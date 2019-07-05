const BaseView = require('../../../../../../../viewController/baseView');

class Login1 extends BaseView {
  constructor() {
    super()
    this.fileName = 'login1'
  }
  getFileName() {
    return this.fileName;
  }
  getDefaultVariables() {
    // No aguments are require. Return sample data
    let defaultVariables = {};

    try {
      defaultVariables = require('./data.json');
    } catch (error) {
      console.log(error);

      return {}
    }

    return defaultVariables;
  }
}
module.exports = Login1;
