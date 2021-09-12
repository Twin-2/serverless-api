'use strict';

const dynamoose = require('dynamoose');
const uuid = require('uuid').v4;

const peopleSchema = new dynamoose.Schema({
    "1": String,
    "age": String,
    "name": String,
    "employed": Boolean
});

module.exports = dynamoose.model('people', peopleSchema)