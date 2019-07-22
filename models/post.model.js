const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postSchema = new schema({
  owner: schema.Types.ObjectId,
  photo: [],
  template: String,
  shortURL: String,
  customURL: String,
  // listComment: [{id: number, comment_id:, status: number, } ]
  listComment: schema.Types.ObjectId
});

const PostModel = mongoose.model('Post', postSchema);

class PostClass {
  static async createNewPost(newPost) {
    const { owner, template } = newPost;
    return await PostModel(newPost).save();
  }

  static async deletePost(id) {
    if (!id) return Promise.reject('id is emty');
    return await PostModel.findByIdAndRemove(id);
  }

  static findAPost(postID) {
    return PostModel.findById(postID);
  }
}

module.exports = PostClass;
