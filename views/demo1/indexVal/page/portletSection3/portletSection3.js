const BaseView = require('../../../../viewController/baseView');

class portletSection3 extends BaseView {
    constructor() {
      super()
      this.fileName = 'portletSection3'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./portletSection3Data.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = portletSection3;