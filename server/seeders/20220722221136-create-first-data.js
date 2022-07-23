const { v4: uuidv4 } = require('uuid');

const db = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      db.Question.create(
      {
        id: uuidv4(),
        question: "You're really busy at work and a colleague is telling you their life story and personal woes. You:",
        Answers: [
          {
            id: uuidv4(),
            title: "Don't dare to interrupt them",
            Point:{
              id: uuidv4(),
              points: 1
            }
          },
          {
            id: uuidv4(),
            title: "Think it’s more important to give them some of your time; work can wait",
            Point:{
              id: uuidv4(),
              points: 2
            }
          },
          {
            id: uuidv4(),
            title: "Listen, but with only with half an ear",
            Point:{
              id: uuidv4(),
              points: 3
            }
          },
          {
            id: uuidv4(),
            title: "Interrupt and explain that you are really busy at the moment",
            Point:{
              id: uuidv4(),
              points: 4
            }
          },
        ]
      },{
        include: [{
          association: db.Question.Answers,
          include: [ db.Answer.Point ]
        }]
    }),
    db.Question.create(
      {
          id: uuidv4(),
          question: "You've been sitting in the doctor's waiting room for more than 25 minutes. You:",
          Answers:[
            {
              title: "Look at your watch every two minutes",
              Point:{
                id: uuidv4(),
                points: 1
              }
            },
            {
              title: "Bubble with inner anger, but keep quiet",
              Point:{
                id: uuidv4(),
                points: 2
              }
            },
            {
              title: "Explain to other equally impatient people in the room that the doctor is always running late",
              Point:{
                id: uuidv4(),
                points: 3
              }
            },
            {
              title: "Complain in a loud voice, while tapping your foot impatiently",
              Point:{
                id: uuidv4(),
                points: 4
              }
            },
          ]
      },{
        include: [{
          association: db.Question.Answers,
          include: [ db.Answer.Point ]
        }]
    }),
    db.Question.create(
      {
        id: uuidv4(),
        question: "You're having an animated discussion with a colleague regarding a project that you're in charge of: You:",
        Answers:[
          {
            title: "Don't dare contradict them",
            Point:{
              id: uuidv4(),
              points: 1
            }
          },
          {
            title: "Think that they are obviously right",
            Point:{
              id: uuidv4(),
              points: 2
            }
          },
          {
            title: "Defend your own point of view, tooth and nail",
            Point:{
              id: uuidv4(),
              points: 3
            }
          },
          {
            title: "Continuously interrupt your colleague",
            Point:{
              id: uuidv4(),
              points: 4
            }
          },
        ]
      },{
        include: [{
          association: db.Question.Answers,
          include: [ db.Answer.Point ]
        }]
    }),
    db.Question.create(
      {
        id: uuidv4(),
        question: "You are taking part in a guided tour of a museum. You:",
        Answers:[
          {
            title: "Are a bit too far towards the back so don't really hear what the guide is saying",
            Point:{
              id: uuidv4(),
              points: 1
            }
          },
          {
            title: "Follow the group without question",
            Point:{
              id: uuidv4(),
              points: 2
            }
          },
          {
            title: "Make sure that everyone is able to hear properly",
            Point:{
              id: uuidv4(),
              points: 3
            }
          },
          {
            title: "Are right up the front, adding your own comments in a loud voice",
            Point:{
              id: uuidv4(),
              points: 4
            }
          },
        ]
      },{
        include: [{
          association: db.Question.Answers,
          include: [ db.Answer.Point ]
        }]
    }),
    db.Question.create(
      {
        id: uuidv4(),
        question: "During dinner parties at your home, you have a hard time with people who:",
        Answers:[
          {
            title: "Ask you to tell a story in front of everyone else",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Talk privately between themselves",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Hang around you all evening",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "Always drag the conversation back to themselves",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]
      },{
        include: [{
          association: db.Question.Answers,
          include: [ db.Answer.Point ]
        }]
    })
  ],
    )
      
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
