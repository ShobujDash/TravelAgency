const Comment = require("../models/CommentModel");
const { errorHandler } = require("../utils/error");

exports.createComment = function (req, res, next) {
  try {
    const content = req.body.content;
    const postId = req.body.postId;
    const userId = req.body.userId;

    console.log(content,postId,userId)

    if (userId !== req.headers.id) {
      return next(
        errorHandler(403, "You are not allowed to create this comment.")
      );
    }

    const newComment = new Comment({
      content: content,
      postId: postId,
      userId: userId,
    });

    newComment
      .save()
      .then(function () {
        res
          .status(200)
          .json({ success: true, message: "Comment saved", newComment });
      })
      .catch(next);
  } catch (error) {
    next(error);
  }
};

exports.getPostComment = function (req, res, next) {
  try {
    Comment.find({ postId: req.params.postId })
      .sort({ createdAt: -1 })
      .populate("userId")
      .then(function (comments) {
        res.status(200).json({ success: true, comments });
      })
      .catch(next);
  } catch (error) {
    next(error);
  }
};

exports.likeComment = function (req, res, next) {
  try {
    Comment.findById(req.params.commentId)
      .then(function (comment) {
        if (!comment) {
          return next(errorHandler(404, "Comment not found"));
        }

        const userIndex = comment.likes.indexOf(req.user.id);
        if (userIndex === -1) {
          comment.numberOfLikes += 1;
          comment.likes.push(req.user.id);
        } else {
          comment.numberOfLikes -= 1;
          comment.likes.splice(userIndex, 1);
        }

        comment
          .save()
          .then(function () {
            res.status(200).json(comment);
          })
          .catch(next);
      })
      .catch(next);
  } catch (error) {
    next(error);
  }
};

exports.editComment = function (req, res, next) {
  try {
    Comment.findById(req.params.commentId)
      .then(function (comment) {
        if (!comment) {
          return next(errorHandler(404, "Comment not found"));
        }
        if (comment.userId !== req.user.id && !req.user.isAdmin) {
          return next(
            errorHandler(403, "You are not allowed to edit this comment")
          );
        }

        Comment.findByIdAndUpdate(
          req.params.commentId,
          { content: req.body.content },
          { new: true }
        )
          .then(function (editedComment) {
            res.status(200).json(editedComment);
          })
          .catch(next);
      })
      .catch(next);
  } catch (error) {
    next(error);
  }
};

exports.deleteComment = function (req, res, next) {
  try {
    Comment.findById(req.params.commentId)
      .then(function (comment) {
        if (!comment) {
          return next(errorHandler(404, "Comment not found"));
        }
        if (comment.userId !== req.user.id && !req.user.isAdmin) {
          return next(
            errorHandler(403, "You are not allowed to delete this comment")
          );
        }

        Comment.findByIdAndDelete(req.params.commentId)
          .then(function () {
            res.status(200).json("Comment has been deleted");
          })
          .catch(next);
      })
      .catch(next);
  } catch (error) {
    next(error);
  }
};

exports.getComments = function (req, res, next) {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to get all comments"));
  }
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === "desc" ? -1 : 1;

    Comment.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit)
      .then(function (comments) {
        Comment.countDocuments()
          .then(function (totalComments) {
            const now = new Date();
            const oneMonthAgo = new Date(
              now.getFullYear(),
              now.getMonth() - 1,
              now.getDate()
            );

            Comment.countDocuments({ createdAt: { $gte: oneMonthAgo } })
              .then(function (lastMonthComments) {
                res
                  .status(200)
                  .json({ comments, totalComments, lastMonthComments });
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  } catch (error) {
    next(error);
  }
};
