import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.models.js";

export const sendMessage = async (req, res) => {
  const senderId = req.currentUser;
  const receiverId = req.params.id;
  const { message } = req.body;

  try {
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json({
      newMessage,
    });
  } catch (error) {
    console.log("error from send message", error);
    res.status(400).json({
      message: "internal server error",
    });
  }
};

export const getMessages = async (req, res) => {
  const senderId = req.currentUser;
  const receiverId = req.params.id;

  try {
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(400).json({
        message: "no messages have found",
      });
    }

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("error from send message", error);
    res.status(400).json({
      message: "internal server error",
    });
  }
};

export const getConversations = async (req, res) => {
  const currentUser = req.currentUser;

  try {
    const otherUsers = await User.find({ _id: { $ne: currentUser } }).select(
      "-password"
    );

    res.status(200).json(otherUsers);
  } catch (error) {
    console.log("error from send message", error);
    res.status(400).json({
      message: "internal server error",
    });
  }
};
