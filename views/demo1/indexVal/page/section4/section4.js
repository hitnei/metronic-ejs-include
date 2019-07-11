const BaseView = require('../../../../viewController/baseView');

class section4 extends BaseView {
    constructor() {
      super()
      this.fileName = 'section4'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./section4Data.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = section4;