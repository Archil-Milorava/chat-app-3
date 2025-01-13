import { useState } from "react";
import useConversation from "../store/useConversation";
import axios  from "axios";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    
    try {
      const data = await axios.post(
        `http://localhost:5000/api/v1/messages/send/${selectedConversation._id}`,
        {message},
        { withCredentials: true }
      );
      
      setMessages([...messages, data.data.newMessage]);
    } catch (error) {
        console.log(error);
        
      toast.error(error.statusText);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
