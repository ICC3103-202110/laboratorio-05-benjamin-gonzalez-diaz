const {initQuestion} = require('./question');
const {view} = require('./view');
const {update} = require('./update');
const app = require('./app');
const status = {
    question: initQuestion,
    actualView: view(initQuestion)
}
app(status,update,view)