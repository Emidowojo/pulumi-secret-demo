# Pulumi Secret Demo

This project demonstrates fetching a secret from Pulumi ESC using an AWS 
Lambda function.

## Setup
1. Install Pulumi and AWS CLI.
2. Run `pulumi login` and `aws configure`.
3. Clone this repo: `git clone 
https://github.com/Emidowojo/pulumi-secret-demo`.
4. `cd pulumi-secret-demo && npm install`.
5. Set up ESC: Create an environment 
`Emidowojo/pulumi-secret-demo/my-secrets` with `myApiKey: 
fake-api-key-xyz123`.
6. Set the Pulumi access token: `pulumi config set pulumiAccessToken 
<token> --secret`.
7. Deploy: `pulumi up`.

## Lambda
- Function: `secretFetcher`
- Fetches `myApiKey` from ESC and logs it.

## Testing
- AWS Console > Lambda > `secretFetcher` > Test.
- Check CloudWatch logs for “Secret fetched: fake-api-key-xyz123”.
