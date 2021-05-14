
function update(billAmount,porcentual,Question){
  const {billAmount,porcentual} = Question
  return {
    ...initQuestion,
    billAmount: billAmount,
    porcentual: porcentual
  }
}
module.exports = {
  update
}



















/*
var figlet = require('figlet');
const chalk = require('chalk');
// style a string
console.log(chalk.red('Hello !'));
const { printTable } = require('console-table-printer');

//Create a table
const testCases = [
  { index: 3, text: 'I would like some gelb bananen bitte', value: 100 },
  { index: 4, text: 'I hope batch update is working', value: 300 },
];

//print
printTable(testCases);
*/
