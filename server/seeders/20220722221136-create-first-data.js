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
              Point:{
                id: uuidv4(),
                points: 1
              }
            },
            {
              title: "Talk privately between themselves",
              Point:{
                id: uuidv4(),
                points: 2
              }
            },
            {
              title: "Hang around you all evening",
              Point:{
                id: uuidv4(),
                points: 3
              }
            },
            {
              title: "Always drag the conversation back to themselves",
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
      db.Result.create(
        {
          type: "introvert_extrovert_text_result_introvert",
          title: "You are more of an introvert",
          message: "You feel that living alone is to live happily, and you prefer hiding in a crowd rather than standing out in one. You are perpetually tormented by the idea of doing things wrong, not understanding or not being alert enough or intelligent enough to do what others expect of you. You lack in self-confidence and you seem to believe that others are better than you. While in a conversation, for example, you would be more likely to go along with the other’s points of view as you don’t fully respect your own opinions. Where there’s a low level task to complete or a service to be allotted, it’s you who volunteers. When people want to get out of a task, they naturally come to you as they know that you never say ‘no’. It’s not surprising that you sometimes have the impression of being permanently exploited, but you don’t really know how to break this vicious circle. On the rare occasions that you’ve tried to do so, this uncharacteristic defiance has caused uproar and you’ve ended up backing down. You are afraid of contact with others as you imagine that they are constantly judging you and that their probing looks will obviously find your faults. So, you try to remain the most transparent and discreet possible. How far will you take this logic of self-denigration? Try and stop projecting onto others the bad image you have about yourself. Have a good look around you and you’ll see that they too have faults, weaknesses and shortcomings, so stop finding excuses for everything. Maybe you were brought up in an atmosphere of ‘You’ll never make the grade’ as a child — a poison that you need progressively to get out of your system. Learn to look after your own interests — everyone else does, so why not you? You too have desires, dreams and opinions — express them. If you think that by saying no or thinking differently from others that you will no longer be loved, it just isn’t so. Others will learn to respect you because you respect yourself."
        }
      ),
      db.Result.create(
        {
          type: "introvert_extrovert_text_result_public_introvert_private_extrovert",
          title: "You are more of a public introvert and private extrovert",
          message: "Within your circle of family and friends, you are completely at ease and it’s often you who takes the lead to organise outings, dinners, vacations, etc. However, as soon as you are in a public or professional setting you become rather inhibited. You don’t feel in tune with what you would qualify as agitation, rivalry or vainglory and this can sometimes appear to others as a kind of hidden criticism or a lack of ambition. In fact, your pragmatic temperament helps you successfully manage problems as and when they arise. You aren’t the kind to calculate your every move and plan every inch of your life, and you find the sphere of family and friends to be much more gratifying to the professional sphere. You are more expressive in emotional, sensorial and human terms and at home your organisation skills and capacity to oil the family wheels work well and many of your family and friends appreciate your qualities and skills. At first glance, people find it hard to understand how you could be so comfortable organising your private life and then seem to lose the better part of your self-confidence when you’re in public. Maybe it’s a question of rhythm? If you feel comfortable in your domestic rhythm it’s perhaps because it works more on a short-term basis (day, week or more rarely a month). On the contrary, the rhythm of professional life seems less concrete and more distant as the professional agenda works more to quarterly or annual plans, that you have no control over. Is this the source of your lessened motivation? You can’t control all the cards so you have to adapt and, in fact, that doesn’t interest you at all? If this difference between work and home life doesn’t bother you, then carry on. However, if you feel frustrated by this imbalance, it could be useful to look into the deeper reasons (either on your own or with someone else) that keep you less focused on professional ambition. For instance, such reasons could be: a lack of thanks and recognition, a fear of not being up to the mark… It’s up to you to find out."
        }
      ),
      db.Result.create(
        {
          type: "introvert_extrovert_text_result_extrovert",
          title: "You are more of an extrovert",
          message: "In public and at work you are a ball of energy perpetually on the move. You take the initiative, encourage others, hate waiting and are endlessly anticipating what’s going on around you. You take real pleasure in managing everything, much like the conductor of an orchestra. You enjoy being noticed by your work peers and your anxiety is linked more to the thought of leaving others indifferent. You need other’s attention to fully exist, but once you’ve crossed the threshold of your home, it’s another matter. You no longer take initiatives, but leave others to decide in your place. When your partner asks you to make a choice or give an opinion about holiday destinations, dinner menus or the children’s activities, you offer little or no input. You’re not comfortable and don’t know how to react and those around you often interpret your passiveness as a lack of interest or a certain reticence. The reactions of those around you may make you feel the need to revise your behaviour to close the gap between the two poles of your life. People feel that you compensate in one area of life (public), which you have trouble handling on the other side (private). The public over-activity into which you throw yourself prevents you from expressing your emotions and feelings. At work, rationality and efficiency is asked of you, but even there, emotions and feelings are unavoidable. It’s not by denying or pushing them out of your attention that they cease to exist. Instead, by forcing them out of your conscious mind, they govern you unconsciously. Why are you so afraid of your emotions? What are you afraid of finding deep within yourself? This over-investment in public and professional life could well be, to a certain degree, running away from whatever it is that you don’t master or control. You’d win some inner serenity if you accepted to walk the road of self-knowledge."
        }
      )
  ],
    )
      
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
