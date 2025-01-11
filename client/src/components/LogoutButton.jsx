import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";

const LogoutButton = () => {
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="mt-auto">
      <BiLogOut
        className="w-6 h-6 text-white cursor-pointer"
        onClick={handleLogout}
      />
    </div>
  );
};
export default LogoutButton;
