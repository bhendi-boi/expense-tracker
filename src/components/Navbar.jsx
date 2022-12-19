import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineMenu,
  MdClose,
} from "react-icons/md";
// context
import { AuthContext } from "../context/AuthContext";
import useTheme from "../context/useTheme";

// styles
import { motion } from "framer-motion";
const Navbar = () => {
  // context
  const [darkMode, changeTheme] = useTheme();
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
    <nav className="sticky top-0 left-0 flex items-center justify-between w-full h-16 text-gray-900 bg-white dark:bg-dark-background dark:text-white">
      <div className="mx-4 logo">
        <NavLink to="/">
          <h1 className="text-4xl font-bold capitalize">bhendi's</h1>
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        <div className="">
          {darkMode === "dark" ? (
            <MdOutlineDarkMode size={30} onClick={changeTheme} />
          ) : (
            <MdOutlineLightMode size={30} onClick={changeTheme} />
          )}
        </div>
        {currentUser ? (
          <button className="mr-4" onClick={toggleVisible}>
            {!visible ? <MdOutlineMenu size={30} /> : <MdClose size={30} />}
          </button>
        ) : (
          <button
            onClick={handleSignIn}
            className="px-4 py-2 mr-4 font-medium text-white bg-gray-900 rounded-sm hover:bg-transparent hover:text-gray-700 hover:outline dark:bg-white dark:text-gray-900 dark:hover:text-white dark:hover:bg-gray-900"
          >
            Login
          </button>
        )}
      </div>
      {/* <div className="relative w-full min-h-screen bg-transparent bg-neutral-600 bg-opacity-70"> */}
      <div
        className={
          "absolute top-16 w-40 h-[calc(100vh-4rem)] bg-white z-10 " +
          (visible ? "right-0" : "hidden")
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
