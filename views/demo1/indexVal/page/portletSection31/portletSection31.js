const BaseView = require('../../../../viewController/baseView');

class portletSection31 extends BaseView {
    constructor() {
      super()
      this.fileName = 'portletSection31'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./portletSection31Data.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = portletSection31;