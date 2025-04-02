const { EscClient } = require("@pulumi/esc-sdk");

async function fetchSecret() {
    const client = new EscClient();
    const env = await client.getEnvironment("my-secrets");
    const secret = env.values.myApiKey;
    console.log("Here’s the secret:", secret);
}

fetchSecret().catch(err => console.error(err));

