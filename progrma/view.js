var prompt = require('prompt-sync')({sigint:true});  
const figlet = require('figlet');
const chalk = require('chalk');  
const inquirer = require('inquirer')
const { printTable } = require('console-table-printer');

function getTitle(){
  return chalk.red(
    figlet.textSync('TIP  CALCULATOR',
      {
        horizontalLayout: 'full',
        font: 'epic'//Colossal'
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
function getQuestion2(BA,P){
  let nbill = parseInt(BA);
  let nporcentual = parseFloat(P)
  return [
    {
      'bill amount': BA, 'tip (%)':P,'tip':chalk.yellow(nbill*nporcentual/100),'total':chalk.cyan(nbill+nbill*nporcentual/100)
    }
  ]
}
function getQuestion(question){
    const {billAmount,porcentual} = question
    let nbill = parseInt(billAmount);
    let nporcentual = parseFloat(porcentual)
    return [
      {
        'bill amount': billAmount, 'tip (%)':porcentual,'tip':chalk.yellow(nbill*nporcentual/100),'total':chalk.cyan(nbill+nbill*nporcentual/100)
      }
    ]
}
function ValueQuestion(question){
  const {billAmount,porcentual} = question
  const message = 'bill amount'
  const message2 ='tip'
  return inquirer.prompt([
    {
      name: 'billAmount',
      type: 'number',
      message: message,
      default: billAmount,
      /*
      validate: function(value){
        if(value >= 0){
            return true
        } else {
            return 'ingrese un numero > 0'
        }
    }
    */
    },
    {
      name: 'porcentual',
      type: 'number',
      message: message2,
      default: porcentual
    }
  ])
}
function view(model){
  return {
    title: getTitle(),
    table: getQuestion(model)
  }
}
module.exports = {
  EmptyTable,
  view,
  ValueQuestion,
  getQuestion2
}
/*
module.exports = {
  getTitle,
  Tabla,
  EmptyTable
}
*/
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