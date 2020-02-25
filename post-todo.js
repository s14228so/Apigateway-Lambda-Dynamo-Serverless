var AWS = require("aws-sdk");
var dynamo = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event, context, callback) => {
  const id = Math.random().toString(36).slice(-8);
  var paramsData = {
    TableName: 'Todo',

  }
  const scanData = await dynamo.scan(paramsData).promise();

  var params = {
    TableName: 'Todo',
    Item: {
      id,
      title: event.title
    }
  }
  const result = await dynamo.put(params).promise();
  console.log("result:", result)
};