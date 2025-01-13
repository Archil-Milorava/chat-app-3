import { useEffect, useState } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/messages/getMessages/${selectedConversation._id}`,
          { withCredentials: true }
        );

        if (res.data.message === "no messages have found") {
          setMessages( []);
        }else{
          setMessages(res.data)
        }
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
