const {models} = require('./question');
const {views} = require('./view');
const app = require('./app');
const status = {
    actualView: models
}
app(status,true,true)