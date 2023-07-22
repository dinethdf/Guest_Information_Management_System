const yargs = require("yargs");
const db = require("./gustdb");

//gust -id, name , address , contact_no , visit_date 

yargs.version("1.0.1");

yargs.command({
    command:'add',
    describe: 'Add a Guest',
    builder:{
        name: {
            describe: "Add a gues",
            demandOption: true,
            type:"string"
        },
        address: {
            describe: "Address",
            demandOption: true,
            type:"string"
        },
        contact_no: {
            describe: "Mob Number",
            demandOption: true,
            type:"string"
        },
        visit_date: {
            describe: "Come date",
            demandOption: true,
            type:"string"
        }

    },
    handler(argv){
        db.add(argv.name);

    }
})
//console.log(process.argv);
yargs.parse();
//console.log(yargs.argv); 


