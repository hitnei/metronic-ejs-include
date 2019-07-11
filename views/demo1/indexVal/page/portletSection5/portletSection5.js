const BaseView = require('../../../../viewController/baseView');

class portletSection5 extends BaseView {
    constructor() {
      super()
      this.fileName = 'portletSection5'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./portletSection5Data.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = portletSection5;