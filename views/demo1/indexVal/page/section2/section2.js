const BaseView = require('../../../../viewController/baseView');

class section2 extends BaseView {
    constructor() {
      super()
      this.fileName = 'section2'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./section2Data.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = section2;