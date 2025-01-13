import { useState } from "react";
import Input from "./../ui/Input";
import GenderCheckbox from "../components/GenderCheckbox";
import { Link, useNavigate } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const navigate =useNavigate()
  const [inputs, setInputs] = useState({
    nickName: "",
    password: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    navigate("/login")
  };

  return (
    <main className="h-screen max-h-screen w-full max-w-full bg-[#D8C4B6] flex items-center justify-center">
      <div
        className={`bg-[#F5EFE7] w-[30rem] h-[35rem] flex flex-col items-center justify-center space-y-4`}
      >
        <form
          className={`flex flex-col items-center space-y-4 w-3/4 ${
            loading ? "opacity-20" : ""
          }`}
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-700">Register</h2>
          <Input
            type="text"
            placeholder="Nickname"
            value={inputs.nickName}
            onChange={(e) => setInputs({ ...inputs, nickName: e.target.value })}
            className="w-full p-2"
          />

          <Input
            type="password"
            placeholder="Password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            className="w-full p-2"
          />
          <button type="submit" className="text-black">
            signup
          </button>
        </form>
        <Link to="/login" className="text-black">
          Log In
        </Link>
      </div>
    </main>
  );
};

export default SignUp;
