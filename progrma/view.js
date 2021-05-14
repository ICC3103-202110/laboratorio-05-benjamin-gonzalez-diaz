var prompt = require('prompt-sync')({sigint:true});  
const figlet = require('figlet');
const chalk = require('chalk');  
const inquirer = require('inquirer')
const { printTable } = require('console-table-printer');

function getTitle(){
  let azar = Math.random()
  let mess = 'epic'
  if(azar > 0 && azar <= 0.5){
    mess = 'Colossal'
  }
  if(azar > 0.5 && azar <= 1){
    mess = 'Epic'
  }
  return chalk.red(
    figlet.textSync('TIP  CALCULATOR',
      {
        horizontalLayout: 'full',
        font: mess//Colossal'
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

function getQuestion(question){
    const {billAmount,porcentual} = question
    let nbill = parseInt(billAmount);
    let nporcentual = parseFloat(porcentual)
    return [
      {
        'bill amount': billAmount, 'tip (%)':porcentual+ '%','tip':chalk.yellow(nbill*nporcentual/100),'total':chalk.cyan(nbill+nbill*nporcentual/100)
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
      
      validate: function(value){
        if(value >= 0){
            return true
        } else {
            return 0
        }
    }
    },
    {
      name: 'porcentual',
      type: 'number',
      message: message2,
      default: porcentual,
      validate: function(value){
        if(value != 0){
            return true
        } else {
            return ''
        }
    }
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