const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../Controllers/messageController");
const { protect } = require("../MiddleWare/authMiddleWare");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;
