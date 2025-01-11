import { Navigate, Route, Routes } from "react-router-dom";

import { useAuthContext } from "./context/authContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <SignUp />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </div>
  );
};

export default App;
