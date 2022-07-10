require('dotenv').config;
const express = require('express');
const morgan = require('morgan');
const schema = require('./src/scheme');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(PORT, () => { console.log('Server is listen on PORT ',PORT); });
