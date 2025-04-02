const { EscApi, Configuration } = require("@pulumi/esc-sdk/esc");

exports.handler = async (event) => {
    const config = new Configuration({
        accessToken: process.env.PULUMI_ACCESS_TOKEN,
    });
    const client = new EscApi(config);
    const env = await client.openAndReadEnvironment("Emidowojo", 
"pulumi-secret-demo", "my-secrets");
    const secret = env.values.myApiKey;
    console.log("Secret fetched:", secret);
    return { statusCode: 200, body: "Secret retrieved!" };
};


