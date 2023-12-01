# After uploading zip to lambda, don't have to publish or anything for it to take effect already.

# Tests create a log in cloudwatch.

# Created an sns, subscription, confirmed in email, in lambda put sns as destination, for trigger use dynamo, make sure lambda role has lambda invoke dynamo stream policy, don't forget to configure environment variables in lambda.

# Basically it's react client -> lambda api -> dynamodb -> lambda connector -> sns -> email subscription