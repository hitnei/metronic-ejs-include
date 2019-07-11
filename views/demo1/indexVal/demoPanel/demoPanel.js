const BaseView = require('../../../viewController/baseView');

class demoPanel extends BaseView {
    constructor() {
      super()
      this.fileName = 'demoPanel'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./demoPanelData.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = demoPanel;