import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const config = new pulumi.Config();
const pulumiAccessToken = config.require("pulumiAccessToken");

const lambdaRole = new aws.iam.Role("lambdaRole", {
    assumeRolePolicy: aws.iam.assumeRolePolicyForPrincipal({ Service: 
"lambda.amazonaws.com" }),
});

new aws.iam.RolePolicyAttachment("lambdaPolicy", {
    role: lambdaRole,
    policyArn: aws.iam.ManagedPolicy.AWSLambdaBasicExecutionRole,
});

const lambda = new aws.lambda.Function("secretFetcher", {
    runtime: "nodejs18.x",
    handler: "index.handler",
    role: lambdaRole.arn,
    code: new pulumi.asset.AssetArchive({
        ".": new pulumi.asset.FileArchive("./lambda"),
    }),
    environment: {
        variables: {
            PULUMI_ACCESS_TOKEN: pulumiAccessToken,
        },
    },
});

export const lambdaArn = lambda.arn;
