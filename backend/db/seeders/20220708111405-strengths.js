'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('strengths', [
      { strength: `Intrapersonal Sphere`, type_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { strength: `Interpersonal Communication`, type_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { strength: `Stress Management`, type_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { strength: `Social Adaptability`, type_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { strength: `Critical Thinking`, type_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { strength: `Creative thinking`, type_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { strength: `Teamwork`, type_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { strength: `Communication`, type_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { strength: `Self-organization and independence`, type_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { strength: `Ability to learn`, type_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { strength: `Mathematical Literacy`, type_id: 3, createdAt: new Date(), updatedAt: new Date() },      
      { strength: `IT and media literacy`, type_id: 3, createdAt: new Date(), updatedAt: new Date() },  
      { strength: `Natural Science Literacy`, type_id: 3, createdAt: new Date(), updatedAt: new Date() },  
      { strength: `Creative Art`, type_id: 3, createdAt: new Date(), updatedAt: new Date() },  
      { strength: `Reading and writing literacy`, type_id: 3, createdAt: new Date(), updatedAt: new Date() },  
      { strength: `Foreign languages`, type_id: 3, createdAt: new Date(), updatedAt: new Date() },  
      { strength: `Social and Humanitarian Literacy`, type_id: 3, createdAt: new Date(), updatedAt: new Date() },  
      { strength: `Sports and Health`, type_id: 3, createdAt: new Date(), updatedAt: new Date() },  
      { strength: `Curiosity`, type_id: 4, createdAt: new Date(), updatedAt: new Date() },  
      { strength: `Initiative`, type_id: 4, createdAt: new Date(), updatedAt: new Date() }, 
      { strength: `Responsibility`, type_id: 4, createdAt: new Date(), updatedAt: new Date() }, 
      { strength: `Self-motivation`, type_id: 4, createdAt: new Date(), updatedAt: new Date() }, 
      { strength: `Purposefulness`, type_id: 4, createdAt: new Date(), updatedAt: new Date() }, 
      { strength: `Adaptability`, type_id: 4, createdAt: new Date(), updatedAt: new Date() }, 
      { strength: `Growth Mindset`, type_id: 4, createdAt: new Date(), updatedAt: new Date() }, 
      { strength: `Indifference`, type_id: 4, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
