'use strict';

const PeopleSchema = require('./profileSchema.js');
const dynamoose = require('dynamoose');

//take in info from the API trigger
//post that data to the Dynamo DB with a new item

exports.handler = async (event) => {
    console.log('event body', event)
    try {
        console.log('here')
        let id = event.pathParameters.id
        console.log('id', id)
        let data = JSON.parse(event.body)
        console.log('data', data)
        let user = await PeopleSchema.update({ "1": id }, data)
        console.log('user', user)
        return {
            statusCode: 201,
            body: JSON.stringify(user)
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: err
        }
    }
}