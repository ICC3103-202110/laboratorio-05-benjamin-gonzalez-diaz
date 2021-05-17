const {getTitle} = require('./view')
const {ValueQuestion} = require('./view')
const {printTable} = require('console-table-printer')
var prompt = require('prompt-sync')({sigint:true}); 

async function Execute(state,update,view){
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