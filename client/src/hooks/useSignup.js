import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (inputs) => {
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/v1/auth/signup", inputs, {
        withCredentials: true,
      });
      toast.success("plese log in")
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
