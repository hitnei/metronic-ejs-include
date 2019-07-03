class BaseView {
  constructor(fileName) {
    this.fileName = fileName;
  }

  getFileName() {
    return this.fileName;
  }

  generateView() {
    var returnVariable = this.getDefaultVariables();

    // If exist aguments
    if (arguments.length > 0) {

      // If first agument is not a function
      if (typeof arguments[0] != "function") {
        var object = arguments[0]; // mặc định

        // Take object keys
        var array = Object.keys(object)
        console.log({ array: array });


        // For (keys)
        for (var i = 0; i < array.length; i++) {

          // array[i] = 'section1' - object key i = 'section1'
          if (typeof returnVariable[array[i]] != 'undefined') {

            // returnVariable['section1'] =
            returnVariable[array[i]] = object[array[i]]; // replace tham so vao
          }
        }
      } else {
        // chỗ này để đó sau anh viết
      }
    }
    return returnVariable;
  }

  getDefaultVariables() {
    return {}
  }
}

module.exports = BaseView;
