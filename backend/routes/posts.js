const express = require("express");
const postController = require("../controllers/post");
const checkAuth = require("../middleware/check-auth");
const fileExtract = require("../middleware/file");

const router = express.Router();

router.post(
  "",
  checkAuth,
  fileExtract,
  postController.createPost
);

router.put(
  "/:id",
  checkAuth,fileExtract,
  postController.updatePost
);

router.get("", postController.getPosts);

router.get("/:id", postController.getPostById);

router.delete("/:id", checkAuth, postController.deletePost);

module.exports = router;
