import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/messages/getConversations",
          { withCredentials: true }
        );
        setConversations(res.data);
        setLoading(false)
      } catch (error) {
        console.log(error);

        toast.error(error.response.data.message || error.response.statusText);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);
  return { loading, conversations };
};

export default useGetConversations;
