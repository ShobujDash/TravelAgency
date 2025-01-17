const {
  createComment,
  deleteComment,
  editComment,
  getPostComment,
  likeComment,
  getComments,
} = require("../controllers/CommentController");
const AuthVerification = require("../middlewares/AuthVerification");

const express = require("express");

const router = express.Router();

router.post("/create", AuthVerification, createComment);
router.get("/getPostComments/:postId", getPostComment);
router.put("/likeComment/:commentId", AuthVerification, likeComment);
router.put("/editComment/:commentId", AuthVerification, editComment);
router.delete("/deleteComment/:commentId", AuthVerification, deleteComment);
router.get("/getcomments", AuthVerification, getComments);

module.exports =  router;
