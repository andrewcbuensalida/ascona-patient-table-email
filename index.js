const AWS = require("aws-sdk");
require("dotenv").config();
const sns = new AWS.SNS();

exports.handler = async (event) => {
	if (event.Records) {
		console.log("this is event2", event.Records[0]);
		await sns
			.publish({
				Subject: "Patient table changes",
				Message: JSON.stringify(event.Records[0]), // TODO This is difficult to read when it gets to the email
				TopicArn: process.env.TOPIC_ARN,
			})
			.promise();
	}
	const response = {
		statusCode: 200,
		body: JSON.stringify("Hello from Lambda!"),
	};
	return response;
};
