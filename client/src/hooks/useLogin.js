import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setauthUser } = useAuthContext()

  const login = async (inputs) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        inputs,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("current-chat-user", JSON.stringify(res.data.user));
      setauthUser(res.data.user);
      toast.success("successfully logged in");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
