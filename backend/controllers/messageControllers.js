const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModal");
const User = require("../models/usersModel");
const Chat = require("../models/chatModel");

const sendMessage = asyncHandler(async (req, res) => {
  const { chatId, content } = req.body;

  if (!chatId || !content) {
    res.status(400).send("chatid and contend is required");
    return;
  }

  try {
    let message = await Message.create({
      sender: req.user._id,
      content: content,
      chat: chatId,
    });

    message = await message.populate("sender", "name pic");
    message = await message.populate("chat");

    message = await User.populate(message, {
      path: "chat.users",
      select: "name pic email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

    res.status(200).json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const getMessage = asyncHandler(async (req, res) => {
  const { chatId } = req.params;
  if (!chatId) {
    res.status(400).send("Please share the chat Id");
    return;
  }
  try {
    const message = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name pic email")
      .populate("chat");

    res.status(200).json(message);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = { sendMessage, getMessage };
