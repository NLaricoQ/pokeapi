import { useContext } from "react";
import { UserNameContext } from "../context/UserNameContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();

  const logout = () => {
    removeUserName();
    navigate("/");
  };
  return (
    <div className="bg-red-500 h-36">
      <h1>Pokedex</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Header;
