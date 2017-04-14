import errors from 'feathers-errors';

export default function errorHandler (error) {
  let feathersError = error;

  if (error.type) {
    switch (error.type) {
      default:
        feathersError = new errors.GeneralError('Unknown Jira Error', error);
    }
  }

  return Promise.reject(feathersError);
}
