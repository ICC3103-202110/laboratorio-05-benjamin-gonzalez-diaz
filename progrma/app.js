const {getTitle,Tabla,EmptyTable} = require('./view')

function Execute(state,update,view){
  console.log(getTitle());
  EmptyTable();
  while (true){
    (Tabla());
  }
}
module.exports = Execute

/*
var prompt = require('prompt-sync')({sigint:true});  
// TE PONE UNA LETRA MAS GRANDE
var figlet = require('figlet');
// TE PONE COLOR A LAS LETRAS
const chalk = require('chalk');
// TE PONE UNA TABLA
const { printTable } = require('console-table-printer');
figlet(('Lab 5 - TIP  CALCULATOR'), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

*/

// style a string
//console.log(chalk.red('Hello !'));
/*
//Create a table
const testCases = [
  { index: 3, text: 'I would like some gelb bananen bitte', value: 100 },
  { index: 4, text: 'I hope batch update is working', value: 300 },
];

//print
printTable(testCases);

let bill = prompt('bill amount?: ','0');
let porcentual = prompt('tip?: ');
var nbill = parseInt(bill);
var nporcentual = parseFloat(porcentual);
*/