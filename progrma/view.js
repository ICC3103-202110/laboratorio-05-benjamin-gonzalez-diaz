var prompt = require('prompt-sync')({sigint:true});  
const figlet = require('figlet');
const chalk = require('chalk');  
const { printTable } = require('console-table-printer');

function getTitle(){
  return chalk.cyan(
    figlet.textSync('TIP CALCULATOR',
      {
        horizontalLayout: 'full',
        font: 'Sub-Zero'
      }
    )
  )
}
function EmptyTable(){
  const tableview = [
    {bill_amount: 0,'tip (%)': chalk.green(0 +'%'), tip: chalk.yellow(0*0/100), total: chalk.cyan(0+0*0/100)}
  ]
  printTable(tableview);
}
function Tabla(){
  let bill = prompt('bill amount?: ','0');
  let porcentual = prompt('tip?: ');
  var nbill = parseInt(bill);
  var nporcentual = parseFloat(porcentual);
  const table = [
    { bill_amount: bill, 'tip (%)': chalk.green(porcentual +'%'), tip: chalk.yellow(nbill*nporcentual/100), total: chalk.cyan(nbill+nbill*nporcentual/100) },
  ];
  printTable(table);
}
module.exports = {
  getTitle,
  Tabla,
  EmptyTable
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