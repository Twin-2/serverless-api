'use strict';

const PeopleSchema = require('./profileSchema.js');
const dynamoose = require('dynamoose');

exports.handler = async (event) => {
    console.log('event body', event.pathParameters)
    try {
        if (event.pathParameters) {
            console.log('here')
            let name = event.pathParameters.id
            console.log(name)
            let user = await PeopleSchema.scan("name").eq(name).exec()
            console.log('user', user)
            return {
                statusCode: 201,
                body: JSON.stringify(user)
            }
        } else {
            let users = await PeopleSchema.scan().exec()
            console.log('users', users)
            return {
                statusCode: 201,
                body: JSON.stringify(users)
            }
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: err
        }
    }
}
