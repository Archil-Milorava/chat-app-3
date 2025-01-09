import { useState } from "react";
import Input from "../ui/Input";

const Login = () => {
  const [nickName, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="h-screen max-h-screen w-full max-w-full bg-[#D8C4B6] flex items-center justify-center">
      <div
        className={`bg-[#F5EFE7] w-[30rem] h-[35rem] flex flex-col items-center justify-center space-y-4`}
      >
        <form
          className="flex flex-col items-center space-y-4 w-3/4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-700">Login</h2>
          <Input
            type="text"
            placeholder="Nickname"
            value={nickName}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full p-2"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2"
          />
          <button type="submit">{"Log In"}</button>
        </form>
        <button>Create Account</button>
      </div>
    </main>
  );
};

export default Login;
