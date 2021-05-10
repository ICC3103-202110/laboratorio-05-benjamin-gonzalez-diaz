const { printTable } = require('console-table-printer');
const chalk = require('chalk');    
// style a string
console.log(chalk.red('this is red'));
//Create a table
const testCases = [
  { index: 3, text: chalk.green('I would like some gelb bananen bitte'), value: 100 },
  { index: 4, text: chalk.yellow('I hope batch update is working'), value: 300, total: 1200 },
  { index: 5, text: 'agregado'},
];
printTable(testCases);