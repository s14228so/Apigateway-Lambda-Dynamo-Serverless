var AWS = require("aws-sdk");
var dynamo = new AWS.DynamoDB.DocumentClient();


exports.handler = function (event, context) {
  var params = {
    TableName: "Todo",
  };
  dynamo.scan(params, function (err, data) {
    if (err) {
      console.log("エラー = " + err);
      context.fail(err); // エラー時
    } else {
      console.log("成功 = " + data);
      context.succeed(data); // 正常時
    }
  });
};