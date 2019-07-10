const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postSchema = new schema({
  owner: String,
  photo: String,
  template: String,
  url: {
    shortURL: String,
    customURL: String
  },
  listComment: [{ username: String, content: String }]
});

const PostModel = mongoose.model('Post', postSchema);

class PostClass {
  static async createNewPost(newPost) {
    const { owner, template } = newPost;
    return await PostModel(newPost).save();
  }

  static async deletePost(id) {
    if (!id) return Promise.reject('id is emty');
    return await postModel.findByIdAndRemove(id);
  }
}

module.exports = PostClass;
