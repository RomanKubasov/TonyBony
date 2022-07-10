const {categories, activities, types, strengths} = require('../db/models');

async function arrActivities() {
const array = await activities.findAll({
  include: {
    model: categories,
  }
});
return JSON.parse(JSON.stringify(array)).map((el) => ({...el, category: el.category.category}));
};

async function arrStrengths(type_id) {
  const array = await strengths.findAll({
    include: {
      model: types,
    },
    where: {
      type_id,
    }
  });
  return JSON.parse(JSON.stringify(array)).map((el) => ({...el, type: el.type.type}));
};

module.exports = { arrActivities, arrStrengths }
