const { arrActivities, arrStrengths } = require('./data');

const {
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
} = require('graphql');

const ActivityType = new GraphQLObjectType({
  name: "Activity",
  description: "This represent an activity",
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    activity: {type: new GraphQLNonNull(GraphQLString)},
    category_id: {type: GraphQLInt},
    category: {type: GraphQLString},
  })
});

const StrengthType = new GraphQLObjectType({
  name: "Strength",
  description: "This represent a strength",
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    strength: {type: new GraphQLNonNull(GraphQLString)},
    type_id: {type: GraphQLInt},
    type: {type: GraphQLString},
  })
});

const QueryRootType = new GraphQLObjectType({
  name: 'AppSchema',
  description: "Application Schema Query Root",
  fields: () => ({
    activities: {
      type: new GraphQLList(ActivityType),
      description: "List of all Activities",
      resolve: () => {
        return arrActivities();
      }
    },
    strengths: {
      type: new GraphQLList(StrengthType),
      description: "List of all Strengths",
      args: {
        param: {type: GraphQLInt}
      },
      resolve: (_, {param}) => {
        console.log('PARAM--->', param);
        return arrStrengths(param);
      }
    },
  })
});

const schema = new GraphQLSchema({
  query: QueryRootType
});

module.exports = schema;
