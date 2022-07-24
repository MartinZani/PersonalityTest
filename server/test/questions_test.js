let chai = require('chai');
let chaiHttp = require('chai-http');

process.env.NODE_ENV = 'test'

let server = require('../server');
const {expect} = chai

chai.should();
chai.use(chaiHttp);

describe("test questions", () => {
    describe("fetch all questions", () => {
        it("It should fetch all questions", (done) => {
            chai.request(server)
            .get("/api/question/all")
            .set('content-type', 'application/json')
            .end((err, response) =>{
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.equal(5);
                done();
            });
        });

        it("It should ensure that questions contains 4 answers each", (done) => {
            chai.request(server)
            .get("/api/question/all")
            .set('content-type', 'application/json')
            .end((err, response) =>{
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.forEach(question => {
                    expect(question).to.include.keys('Answers');
                    expect(question.Answers.length).to.equal(4);
                });
                done();
            });
        });

    });
        
    describe('test all Test results', () =>{

        it("It should ensure that test result will be 'You are more of a public introvert and private extrovert'", (done) => {
            chai.request(server)
            .get("/api/question/all")
            .set('content-type', 'application/json')
            .end((err, response) =>{
                response.should.have.status(200);
                response.body.should.be.a('array');

                let questionAnswer = []
                response.body.forEach(question => {
                    expect(question).to.include.keys('id');
                    expect(question).to.include.keys('Answers');
                    question.Answers.forEach(answer => {
                        expect(answer).to.include.keys('id', 'title');
                    });
                    
                    let selectedAnswers = [
                        "Think it’s more important to give them some of your time; work can wait",
                        "Bubble with inner anger, but keep quiet",
                        "Think that they are obviously right",
                        "Follow the group without question",
                        "Talk privately between themselves",
                    ];
                    questionAnswer.push({[question.id]: question.Answers.find(a => selectedAnswers.includes(a.title)).id});
                });

                chai.request(server)
                .post("/api/question/submit")
                .set('content-type', 'application/json')
                .send({questionAnswersObj: questionAnswer})
                .end((err, res) =>{
                    expect(res.body).to.include.keys('title');
                    expect(res.body.title).to.equal('You are more of a public introvert and private extrovert');
                    done();
                });
            });
        });

        it("It should ensure that test result will be 'You are more of an extrovert'", (done) => {
            chai.request(server)
            .get("/api/question/all")
            .set('content-type', 'application/json')
            .end((err, response) =>{
                response.should.have.status(200);
                response.body.should.be.a('array');

                let questionAnswer = []
                response.body.forEach(question => {
                    expect(question).to.include.keys('id');
                    expect(question).to.include.keys('Answers');
                    question.Answers.forEach(answer => {
                        expect(answer).to.include.keys('id', 'title');
                    });
                    let selectedAnswers = [
                        "Interrupt and explain that you are really busy at the moment",
                        "Complain in a loud voice, while tapping your foot impatiently",
                        "Continuously interrupt your colleague",
                        "Are right up the front, adding your own comments in a loud voice",
                        "Ask you to tell a story in front of everyone else",
                    ];
                    questionAnswer.push({[question.id]: question.Answers.find(a => selectedAnswers.includes(a.title)).id});
                });

                chai.request(server)
                .post("/api/question/submit")
                .set('content-type', 'application/json')
                .send({questionAnswersObj: questionAnswer})
                .end((err, res) =>{
                    expect(res.body).to.include.keys('title');
                    expect(res.body.title).to.equal('You are more of an extrovert');
                    done();
                });
            });
        });

        it("It should ensure that test result will be 'You are more of an introvert'", (done) => {
            chai.request(server)
            .get("/api/question/all")
            .set('content-type', 'application/json')
            .end((err, response) =>{
                response.should.have.status(200);
                response.body.should.be.a('array');

                let questionAnswer = [];
                response.body.forEach((question, index) => {
                    expect(question).to.include.keys('id');
                    expect(question).to.include.keys('Answers');
                    question.Answers.forEach(answer => {
                        expect(answer).to.include.keys('id', 'title');
                    });
                    let selectedAnswers = [
                        "Don't dare to interrupt them",
                        "Look at your watch every two minutes",
                        "Don't dare contradict them",
                        "Are a bit too far towards the back so don't really hear what the guide is saying",
                        "Ask you to tell a story in front of everyone else",
                    ];
                    questionAnswer.push({[question.id]: question.Answers.find(a => selectedAnswers.includes(a.title)).id});
                });

                chai.request(server)
                .post("/api/question/submit")
                .set('content-type', 'application/json')
                .send({questionAnswersObj: questionAnswer})
                .end((err, res) =>{
                    expect(res.body).to.include.keys('title');
                    expect(res.body.title).to.equal('You are more of an introvert');
                    done();
                });
            });
        });

        it("It should return 'Server error'", (done) => {
            chai.request(server)
            .get("/api/question/all")
            .set('content-type', 'application/json')
            .end((err, response) =>{
                response.should.have.status(200);
                response.body.should.be.a('array');

                let questionAnswer = [];
                response.body.forEach((question, index) => {
                    expect(question).to.include.keys('id');
                    expect(question).to.include.keys('Answers');
                });

                chai.request(server)
                .post("/api/question/submit")
                .set('content-type', 'application/json')
                .send({questionAnswersObj: questionAnswer})
                .end((err, res) =>{
                    expect(res.body).to.include.keys('message');
                    expect(res.body.message).to.equal('Server error');
                    done();
                });
            });
        });

    });
});