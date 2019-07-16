const BaseView = require('../../../../viewController/baseView');

class headerMobile extends BaseView {
    constructor() {
      super()
      this.fileName = 'headerMobile'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./headerMobileData.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = headerMobile;