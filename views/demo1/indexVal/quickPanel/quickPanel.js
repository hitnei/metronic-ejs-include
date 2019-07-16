const BaseView = require('../../../viewController/baseView');

class quickPanel extends BaseView {
    constructor() {
      super()
      this.fileName = 'quickPanel'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./quickPanelData.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = quickPanel;