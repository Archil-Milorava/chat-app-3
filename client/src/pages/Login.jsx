import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import Input from "../ui/Input";

const Login = () => {
  const [inputs, setInputs] = useState({
    nickName: "",
    password: "",
  });


  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  
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
          <h2 className="text-2xl font-bold text-gray-700">Login</h2>
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
          <button className="text-xl text-black" type="submit">
            {"Log In"}
          </button>
        </form>
        <Link to="/signup" className="text-black">
          Create Account
        </Link>
      </div>
    </main>
  );
};

export default Login;
