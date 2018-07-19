const Ember = require('ember');

Ember.$('#something-rendered-by-jquery-plugin').on('click', () => {
    this._handlerActionFromController();
  });