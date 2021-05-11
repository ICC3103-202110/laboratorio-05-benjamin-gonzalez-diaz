
const figlet = require('figlet');
const chalk = require('chalk');  

function GetTitle(){
  return chalk.green(
    figlet.textSync('Lab 5 - TIP  CALCULATOR',
      {
        horizontalLayout: 'full',
        font: 'Nancyj-Underlined'
      }
    )
  )
}

module.exports = {
  GetTitle
}

//var prompt = require('prompt-sync')({sigint:true});  
// style a string
//console.log(chalk.red('this is red'));
//Create a table
/*
let bill = prompt('bill amount?: ','0');
let porcentual = prompt('tip?: ');
var nbill = parseInt(bill);
var nporcentual = parseFloat(porcentual);
const testCases = [
  { bill_amount: bill, 'tip (%)': chalk.green(porcentual +'%'), tip: chalk.yellow(nbill*nporcentual/100), total: chalk.cyan(nbill+nbill*nporcentual/100) },
];
printTable(testCases);
*/