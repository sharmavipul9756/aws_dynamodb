var AWS = require("aws-sdk");
require('dotenv').config()
let awsConfig = {
    "region": process.env.REGION,
    "endpoint": process.env.END_POINT,
    "accessKeyId": process.env.ACCESSKEY_ID, "secretAccessKey": process.env.PROCESSKEY_ID
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function () {

    var params = {
        TableName: "users",
        Key: {
            "email_id": "example@gmail.com"
        }
    };
    docClient.delete(params, function (err, data) {

        if (err) {
            console.log("users::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::delete::success");
        }
    });
}

remove();