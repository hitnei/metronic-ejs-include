const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postSchema = new schema({
  postBy: { type: schema.Types.ObjectId, ref: 'UserModel' },
  photo: [],
  content: String,
  shortURL: String,
  customURL: String,
  follower: [],
  hashtag: [],
  tag: [],
  title: String
});

PostModel = mongoose.model('Post', postSchema);

class PostClass {
  static async createNewPost(newPost) {
    const { postBy, content, title } = newPost;
    if (!postBy || !content || !title)
      return Promise.reject('Invalid post!');

    return await PostModel(newPost).save();
  }

  static updatePost(postID, editPost) {
    return PostModel.findByIdAndUpdate(postID, editPost, { new: true });
  }

  static addFollower(Follower) {
    var postID = Follower.postID;
    var followerID = Follower.followerID;

    return PostModel.findByIdAndUpdate(postID, { $push: { follower: followerID } }, { new: true });
  }

  static deleteFollower(data) {
    var followerID = data.followerID;
    var postID = data.postID;

    return PostModel.findByIdAndUpdate(postID, { $pull: { follower: followerID } });
  }

  static async deletePost(id) {
    if (!id) return Promise.reject('ID is emty');

    return await PostModel.findByIdAndRemove(id);
  }

  static findAPost(postID) {
    return PostModel.findById(postID);
  }

  static findAll() {
    return PostModel.find();
  }

  static getFollowers(postID) {
    return PostModel.findById(postID).follower;
  }

  static followPost(userID) {
    return PostModel.find({ follower: { $in: userID } });
  }
}

module.exports = PostClass;
