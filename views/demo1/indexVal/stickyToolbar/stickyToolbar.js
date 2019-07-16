const BaseView = require('../../../viewController/baseView');

class stickyToolbar extends BaseView {
    constructor() {
      super()
      this.fileName = 'stickyToolbar'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./stickyToolbarData.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = stickyToolbar;