const BaseView = require('../../../viewController/baseView');

class chat extends BaseView {
    constructor() {
      super()
      this.fileName = 'chat'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./chatData.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = chat;