const BaseView = require('../../../../../../../viewController/baseView');

class Login3 extends BaseView {
  constructor() {
    super()
    this.fileName = 'login3'
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
module.exports = Login3;
