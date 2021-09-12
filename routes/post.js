'use strict';

const PeopleSchema = require('./profileSchema.js');
const dynamoose = require('dynamoose');

//take in info from the API trigger
//post that data to the Dynamo DB with a new item

exports.handler = async (event) => {
    console.log('event body', event.body)
    try {
        let data = JSON.parse(event.body)
        console.log('data', data)
        let person = new PeopleSchema(data)
        let record = await person.save();
        return {
            statusCode: 201,
            body: JSON.stringify(record)
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: err
        }
    }
}