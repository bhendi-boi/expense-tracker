import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
// context
import { DarkThemeContext } from "../context/DarkThemeContext";
import { AuthContext } from "../context/AuthContext";

// styles
import { motion } from "framer-motion";
const Navbar = () => {
  // context
  const { darkMode, changeTheme } = useContext(DarkThemeContext);
  const { logOut, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const links = ["profile", "dashboard", "logout"];

  // functions
  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const toggleVisible = () => {
    setVisible((visible) => !visible);
  };
  return (
    <nav className="sticky top-0 left-0 flex items-center justify-between w-full h-16 bg-white">
      <div className="mx-4 logo">
        <NavLink to="/">
          <h1 className="text-4xl capitalize">bhendi's</h1>
        </NavLink>
      </div>
      <div className="flex gap-4">
        <div className="">
          {darkMode ? (
            <MdOutlineDarkMode
              size={30}
              className="text-white"
              onClick={changeTheme}
            />
          ) : (
            <MdOutlineLightMode
              size={30}
              className="text-black"
              onClick={changeTheme}
            />
          )}
        </div>
        <button>
          <AiOutlineMenu size={30} className="mr-4" onClick={toggleVisible} />
        </button>
      </div>
      {/* <div className="relative w-full min-h-screen bg-transparent bg-neutral-600 bg-opacity-70"> */}
      <div
        className={
          "absolute top-16 w-40 h-screen bg-white " +
          (visible ? "right-0" : "-right-40")
        }
      >
        <ul
          role="list"
          className="flex flex-col gap-4 pl-4 mt-4 text-xl font-medium text-gray-800 capitalize"
        >
          {links.map((link) => {
            return (
              <li key={link} className="hover:text-blue-600">
                <NavLink to={`/${link}`}>{link}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
