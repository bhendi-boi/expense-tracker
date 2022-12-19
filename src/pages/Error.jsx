import { useContext } from "react";
import { Link } from "react-router-dom";
import SVG404 from "../assets/404-error.svg";
// context
import { AuthContext } from "../context/AuthContext";
import { DarkThemeContext } from "../context/DarkThemeContext";

// styles

const Error = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="min-h-screen text-center text-gray-700 bg-background">
      <picture className="mb-6">
        <img src={SVG404} alt="404 error" />
      </picture>
      <h2 className="mb-4 text-2xl">
        Error 404 Page not found <br />
        <span className="text-xl">
          Try checking the URL and refreshing the page.
        </span>
      </h2>
      <div className="">
        {currentUser ? (
          <span className="text-xl">
            Click{" "}
            <Link
              to="/profile"
              className="font-medium text-blue-600 hover:underline underline-offset-2 focus-within:underline"
            >
              here
            </Link>{" "}
            to go to your profile
          </span>
        ) : (
          <span className="text-xl">
            Click{" "}
            <Link
              to="/"
              className="font-medium text-blue-600 hover:underline underline-offset-2 focus-within:underline"
            >
              here
            </Link>{" "}
            to visit home page
          </span>
        )}
      </div>
    </div>
  );
};

export default Error;
