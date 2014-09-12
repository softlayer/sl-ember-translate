module.exports = function(app) {
  var express = require('express');
  var translationRouter = express.Router();
  translationRouter.get('/', function(req, res) {
    res.send({
        'SIMPLE_KEY'   : 'I have been translated',
        'SINGULAR_KEY' : 'View my family',
        'PLURAL_KEY'   : 'View my families',
        'REPLACED_KEY' : 'I have replaced {0} and {1}'
    });
  });
  app.use('/api/translation', translationRouter);
};
