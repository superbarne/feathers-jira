import errorHandler from '../error-handler';
import makeDebug from 'debug';

const debug = makeDebug('feathers-jira:project');

class Service {
  constructor (options = {}) {

  }

  find() {

  }
}

export default function init (options) {
  debug('Initializing feathers-jira:project plugin');

  return new Service(options);
}

init.Service = Service;
