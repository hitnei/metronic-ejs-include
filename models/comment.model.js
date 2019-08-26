const mongoose = require('mongoose');
const db = mongoose.connection;
const schema = mongoose.Schema;

const commentSchema = ({
  // index: Number,
  fromPost: { type: schema.Types.ObjectId, ref: 'PostModel' },
  content: String,
  attachment: [],
  commentBy: { type: schema.Types.ObjectId, ref: 'UserModel' },
  hashtag: [],
  tag: [],
  relateTo: { type: schema.Types.ObjectId, ref: 'CommentModel' }
});

const CommentModel = mongoose.model('Comment', commentSchema);

class CommentClass {
  static async createNewComment(newComment) {
    const { fromPost, content, commentBy } = newComment;
    if (!fromPost || !content || !commentBy)
      return Promise.reject('Invalid comment!');

    return await CommentModel(newComment).save();
  }

  static deleteComment(id) {
    if (!id)
      return Promise.reject('ID is emty!');

    return CommentModel.findByIdAndRemove(id);
  }

  static updateComment(id, updateContent) {
    if (!id || !updateContent)
      return Promise.reject('Invalid comment!');

    return CommentModel.findByIdAndUpdate(id, { content: updateContent }, { new: true });
  }

  static async relateTo(commentID) {
    if (!commentID)
      return Promise.reject('Invalid comment');

    const comment = await CommentModel.findById(commentID);
    if (!comment.relateTo)
      return Promise.reject('Not relate to any other');
    else
      return CommentModel.findById(comment.relateTo);
  }

  static findAll() {
    return CommentModel.find();
  }

}

module.exports = CommentClass;
