const BaseView = require('../../../../../../../viewController/baseView');

class Login6 extends BaseView {
  constructor() {
    super()
    this.fileName = 'login6'
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
module.exports = Login6;
