const {getTitle} = require('./view')
const {ValueQuestion} = require('./view')
const {printTable} = require('console-table-printer')
var prompt = require('prompt-sync')({sigint:true}); 

async function Execute(state,update,view){
  //const {question, actualView} = state
  //const {title, table} = actualView
  //console.log(title)
  //printTable(table)
  while(true){
    const {question, actualView} = state
    const {title, table} = actualView
    console.clear()
    console.log(title)
    printTable(table)
    console.log('                                                   para salir ponga ctrl^c')
    const {billAmount,porcentual} = await ValueQuestion(question)
    const updateModel = update(billAmount,porcentual,question)
    state = {
      ...state,
      question: updateModel,
      actualView: view(updateModel)
    }

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