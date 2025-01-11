import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setauthUser } = useAuthContext();

  const logout = async () => {
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/v1/auth/logout", "", {
        withCredentials: true,
      });
      localStorage.removeItem("current-chat-user");
      setauthUser(null);
      toast.success("successfully logged out");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
