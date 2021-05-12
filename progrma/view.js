
const figlet = require('figlet');
const chalk = require('chalk');  

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
function Table(tipe){
  const {valor} = tipe;
  return [
    {Valor: valor}
  ]
}

function views(amount){
  return {
      title: getTitle(),
      table: Table(amount)
  }
}
module.exports = {
  views,
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