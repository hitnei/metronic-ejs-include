const mongoose = require('mongoose');
const schema = mongoose.Schema;

const commentSchema = ({
  comment: [{ ownerID: schema.Types.ObjectId, content: String, id: Number }]
})

const CommentModel = mongoose.model('Comment', commentSchema);

class CommentClass {
  static async createNewCommentList() {
    return await CommentModel({}).save();
  }

  static async findCommentList(commentListID) {
    return await CommentModel.findOne(commentListID);
  }

  static addCommentToArray(newComment, id) {
    const { ownerID, content } = newComment;
    return CommentModel.findByIdAndUpdate(id,
      { $push: { comment: { ownerID: ownerID, content: content } } },
    );
  }

}

module.exports = CommentClass;
