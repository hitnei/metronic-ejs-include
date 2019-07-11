const BaseView = require('../../../../viewController/baseView');

class userBar extends BaseView {
    constructor() {
      super()
      this.fileName = 'userBar'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./userBarData.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = userBar;