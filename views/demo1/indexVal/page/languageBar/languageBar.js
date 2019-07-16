const BaseView = require('../../../../viewController/baseView');

class languageBar extends BaseView {
    constructor() {
      super()
      this.fileName = 'languageBar'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./languageBarData.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = languageBar;