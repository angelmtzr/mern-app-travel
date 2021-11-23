require("dotenv").config();

const app = require("./app");
require('./database');


async function main(){
    const PORT = app.get("port");
    await app.listen(PORT);
    console.log(`connected to port ${PORT}`);
}

main();

