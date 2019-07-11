class BaseView {
    constructor(fileName) {
      this.fileName = fileName;
    }
  
    getFileName(){
      return this.fileName;
    }
  
    generateView() {
      var returnVariable = this.getDefaultVariables();
  
      if (arguments.length > 0) {
        if (typeof arguments[0] != "function") {
          var object = arguments[0]; // mặc định
          var array = Object.keys(object)
  
          for (var i = 0; i < array.length; i++) {
            if (typeof returnVariable[array[i]] != 'undefined') {
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