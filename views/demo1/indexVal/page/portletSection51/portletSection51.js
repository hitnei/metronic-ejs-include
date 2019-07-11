const BaseView = require('../../../../viewController/baseView');

class portletSection51 extends BaseView {
    constructor() {
      super()
      this.fileName = 'portletSection51'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./portletSection51Data.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = portletSection51;