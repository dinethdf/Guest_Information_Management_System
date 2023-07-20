const fs = require('fs');
const os = require('os');

fs.writeFileSync("data.txt","Hellow World ");
fs.appendFileSync("data.txt", " My Worls")
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.hostname());