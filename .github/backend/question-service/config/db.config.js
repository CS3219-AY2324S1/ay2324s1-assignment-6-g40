require('dotenv').config();

config = {
  HOST: "question-db",
  PORT: 27017,
  DB: "question_db"
};

CONNECTION_STRING = process.env.DB_PASSWORD 
    ? `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@peerprep.rrvvdr1.mongodb.net/?retryWrites=true&w=majority`
    : `mongodb://${config.HOST}:${config.PORT}/${config.DB}`;

module.exports = {
  CONNECTION_STRING: CONNECTION_STRING
};