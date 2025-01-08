import express from "express";
import { getConversations, getMessages, sendMessage } from "../controllers/messages.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messagesRoutes = express.Router();

messagesRoutes.post("/send/:id", protectRoute, sendMessage);
messagesRoutes.get("/getMessages/:id", protectRoute, getMessages);
messagesRoutes.get("/getConversations", protectRoute, getConversations);

export default messagesRoutes;
