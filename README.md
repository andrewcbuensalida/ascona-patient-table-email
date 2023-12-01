# https://lucid.app/lucidchart/1e45130b-0485-4995-870c-0c8d8ba7f35a/edit?viewport_loc=-87%2C54%2C1704%2C870%2C0_0&invitationId=inv_45f48046-54a0-497d-ae20-2484d91fe34a

# After uploading zip to lambda, don't have to publish or anything for it to take effect already.

# Tests create a log in cloudwatch.

# Created an sns, subscription, confirmed in email, in lambda put sns as destination, for trigger use dynamo, make sure lambda role has lambda invoke dynamo stream policy, don't forget to configure environment variables in lambda.

# Basically it's react client -> lambda api -> dynamodb -> lambda connector -> sns -> email subscription