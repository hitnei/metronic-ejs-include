const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
  username: String,
  password: String,
  role: Number
});


const UserModel = mongoose.model('User', userSchema);

class UserClass {
  static async findUserByUserName(usernameInput) {
    if (!usernameInput) return Promise.reject("Tên người dùng không được trống!");

    return await UserModel.findOne({ username: usernameInput });
  }

  static async registerUser(newUser) {
    return await UserModel(newUser).save();
  }

  static async deleteUser(id) {
    if (!id) return Promise.reject("Người dùng không tồn tại");

    return await UserModel.findByIdAndRemove(id);
  }

  static changePassword(info) {
    var userID = info.userID;
    var newPassword = info.newPassword;
    var confirmPassword = info.confirmPassword;

    if (newPassword === confirmPassword)
      return UserModel.findByIdAndUpdate(userID, { password: newPassword }, {new: true});
    else return Promise.reject('Passwords do not match');
  }
}

module.exports = UserClass;
