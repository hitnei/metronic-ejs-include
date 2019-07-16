const BaseView = require('../../../../viewController/baseView');

class asideMenu extends BaseView {
    constructor() {
      super()
      this.fileName = 'asideMenu'
    }
    getFileName() {
      return this.fileName;
    }
    getDefaultVariables() {
      // No aguments are require. Return sample data
      let defaultVariables = {}
      
      try {
        defaultVariables = require('./asideMenuData.json');
      } catch (error) {
        console.log(error);
  
        return {}
      }
  
      return defaultVariables;
    }
  }
  module.exports = asideMenu;