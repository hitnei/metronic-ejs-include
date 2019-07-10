const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
  username: String,
  password: String,
  role: String
});


const UserModel = mongoose.model('User', userSchema);

class UserClass {
  static async findUserByUserName(usernameInput) {
    if (!usernameInput) return Promise.reject("Tên người dùng không được trống!");

    return await UserModel.findOne({ username: usernameInput });
  }

  static async registerUser(newUser) {
    const { username, password } = newUser;

    return await UserModel(newUser).save();
  }

  static async deleteUser(id) {
    if (!id) return Promise.reject("Người dùng không tồn tại");

    return await UserModel.findByIdAndRemove(id);
  }
}

module.exports = UserClass;
