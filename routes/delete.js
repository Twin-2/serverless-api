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
        let user = await PeopleSchema.delete({ "1": id })
        console.log('user', user)
        return {
            statusCode: 201,
            body: JSON.stringify('Deleted')
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: err
        }
    }
}