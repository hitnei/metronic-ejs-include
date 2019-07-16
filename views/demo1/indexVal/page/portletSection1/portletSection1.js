const BaseView = require('../../../../viewController/baseView');

class portletSection1 extends BaseView {
    constructor() {
      super()
      this.fileName = 'portletSection1'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./portletSection1Data.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = portletSection1;