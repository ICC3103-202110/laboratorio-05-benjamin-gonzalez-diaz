const {initQuestion} = require('./question');
const {view} = require('./view');
const app = require('./app');
const status = {
    question: initQuestion,
    actualView: view(initQuestion)
}
app(status,true,view)