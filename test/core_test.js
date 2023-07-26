const fs = require('fs');
// const os = require('os');
const db_file="data.json";

// fs.writeFileSync("data.txt","Hellow World ");
// fs.appendFileSync("data.txt", " My Worls")
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.hostname());

const dataBuffer = fs.readFileSync(db_file);
        const dataJSON = dataBuffer.toString();
        console.log(JSON.parse(dataJSON));