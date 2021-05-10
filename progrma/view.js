const { printTable } = require('console-table-printer');
const chalk = require('chalk');  
var prompt = require('prompt-sync')();  
// style a string
console.log(chalk.red('this is red'));
//Create a table
let bill = prompt('bill amount?: ','0');
let porcentual = prompt('tip?: ');
var nbill = parseInt(bill);
var nporcentual = parseFloat(porcentual);
const testCases = [
  { bill_amount: bill, 'tip (%)': chalk.green(porcentual +'%'), tip: chalk.yellow(nbill*nporcentual/100), total: chalk.cyan(nbill+nbill*nporcentual/100) },
];
printTable(testCases);