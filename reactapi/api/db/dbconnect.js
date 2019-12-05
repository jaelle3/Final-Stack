const createUser = function (user, db, callback) {
    const users = db.collection('Users');
    users.insertMany([{
        username: user.username,
        password: user.password
    }], function (err, result) {
        if (!err)
            console.log(result)
    })
}

const createQuestion = function (question, db, callback) {
    const questions = db.collection('Questions');
    questions.insertMany([{
        id: question.id,
        question: question.question,
        user: question.user
    }], function (err, result) {
        if (!err)
            console.log(result)
    })
}

const createAnswer = function (answer, db, callback) {
    const answers = db.collection('Answers');
    answers.insertMany([{
        id: answer.id,
        answer: answer.answer,

    }], function (err, result) {
        if (!err)
            console.log(result)
    })
}

const listUsers = function (db, callback) {
    var users = db.collection("Users");
    users.find({}).toArray(function (err, docs) {
        callback(docs)
    });
}

const listQuestions = function (db, callback) {
    var qns = db.collection("Questions");
    qns.find({}).toArray(function (err, docs) {
        callback(docs)
    });
}

const sayHello = function () {
    return "Hello";
}


exports.createUser = createUser;
exports.sayHello = sayHello;
exports.listUsers = listUsers;
exports.createUser = createAnswer;
exports.createQuestion = createQuestion;
exports.createAnswer = createAnswer;
exports.listQuestions = listQuestions;