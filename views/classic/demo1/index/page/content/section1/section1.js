const BaseView = require('../../../../../../viewController/baseView');

class Section1 extends BaseView {
  constructor() {
    super()
    this.fileName = 'section1'
  }
  getFileName() {
    return this.fileName;
  }
  getDefaultVariables() {
    // No aguments are require. Return sample data
    let defaultVariables = {}

    try {
      defaultVariables = require('./data.json');
    } catch (error) {
      console.log(error);

      return {}
    }

    return defaultVariables;
  }
}
module.exports = Section1;