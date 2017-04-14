var feathers = require('feathers');
var rest = require('feathers-rest');
var socketio = require('feathers-socketio');
var hooks = require('feathers-hooks');
var bodyParser = require('body-parser');
var errorHandler = require('feathers-errors/handler');
var jira = require('../lib/index');
var path = require('path');

const conf = {
  protocol: 'https',
  host: 'jira.somehost.com',
  username: 'username',
  password: 'password',
  apiVersion: '2',
  strictSSL: true
};

// Initialize the application
var app = feathers()
  .configure(rest())
  .configure(socketio())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/jira/projects', jira.project(conf))
  .use('/', feathers.static(path.join(__dirname, 'public')))
  .use(errorHandler({ html: false }));

var projektService = app.service('jira/projects');


projektService.find().then(result => {
  console.log(result);
}).catch(error => {
  console.log('Error', error);
});

app.listen(3030);

console.log('Feathers authentication app started on 127.0.0.1:3030');
