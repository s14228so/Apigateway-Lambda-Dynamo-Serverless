var AWS = require("aws-sdk");
var dynamo = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event, context, callback) => {
  var params = {
    TableName: 'Todo',
    Item: {
      id: event.id,
      title: event.title
    }
  }
  const result = await dynamo.put(params).promise();
  console.log("result:", result)
};