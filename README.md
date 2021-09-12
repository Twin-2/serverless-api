# AWS API with DynamoDB, Lambda, and API GATEWAY

## About

Base URL: <https://0zg9zg71v2.execute-api.us-west-2.amazonaws.com/dev>

## DB Schema

Data is stored in DynamoDB through AWS

Schema:

- "1": String. Must be a unique id for each item

- "name": String.

- "age": String

- "employed": Boolean

## Routes

People Resource: add /people to base URL

- GET /{name}: Will return a single item from the database with the matching name based on the schema.

- GET: Will return a list of all the items from the database.

- POST: Requires a body object that matches the above schema. Adds that item to the database.

- PUT /{id}: Requires a route parameter of the unique id ("1" field from the schema) and a body object that matches the parts of the schema that you want to update.

- DELETE /{id}: Requires a route parameter of the unique id ("1" field from the schema). Removes that item from the database.

## UML

All the routes are written in API GATEWAY. When one of these routes is hit, it triggers a Lambda function which uses Dynamoose to interact with DynamoDB.
