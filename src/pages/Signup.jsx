import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// firebase
import { auth, db, storage } from "../firebase/config";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

// context
import { AuthContext } from "../context/AuthContext";

// styles
import { motion } from "framer-motion";

const Signup = () => {
  // todo list
  // 1 signin button
  // 2 complete the confirm password and posting function
  const [inputUser, setinputUser] = useState({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // functions
  const validatePasswords = () => {
    if (inputUser.password === "") {
      window.alert("enter a password before submittng");
      setinputUser({ ...inputUser, password: "" });
      return false;
    } else if (confirmPassword === "") {
      window.alert("fill the confirm password field before submitting");
      return false;
    } else if (inputUser.password.length < 7) {
      window.alert("password must be atleast 8 characters long");
      setinputUser({ ...inputUser, password: "" });
      setConfirmPassword("");
      return false;
    } else if (inputUser.password !== confirmPassword) {
      window.alert("passswords you entered donot match");
      setConfirmPassword("");
      return false;
    }
    return true;
  };

  // authentication
  const { signUp, currentUser } = useContext(AuthContext);

  const handleSignIn = async (inputUser) => {
    setLoading(true);
    try {
      const authResponse = await signUp(inputUser.email, inputUser.password);
      const docResponse = await setDoc(
        doc(db, "users", authResponse.user.uid),
        {
          name: `${inputUser.email}`,
          createdAt: serverTimestamp(),
        }
      );
      console.log(docResponse);
      console.log(authResponse);
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  // event handlers
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setinputUser({ ...inputUser, email: `${e.target.value}` });
    } else if (e.target.name === "password") {
      setinputUser({ ...inputUser, password: `${e.target.value}` });
    } else if (e.target.name === "confirmpassword") {
      setConfirmPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePasswords()) {
      handleSignIn(inputUser);
    }
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      className="min-h-screen bg-background"
    >
      <picture className="w-full h-48 bg-yellow-300">
        <img src="" alt="" className="w-full h-full" />
      </picture>
      <form onSubmit={handleSubmit} className="px-4 py-2">
        <span className="block mb-4 text-xl text-center">
          Sign in by filling this form
        </span>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            title="email"
            placeholder="johndoe@gmail.com"
            className="px-4 py-2 text-gray-700 rounded-md bg-zinc-200 focus:outline-none focus:bg-white focus:ring-2"
            value={inputUser.email}
            required={true}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="px-4 py-2 text-gray-700 rounded-md bg-zinc-200 focus:outline-none focus:bg-white focus:ring-2"
            value={inputUser.password}
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="confirmpassword" className="text-xl">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            className="px-4 py-2 text-gray-700 rounded-md bg-zinc-200 focus:outline-none focus:bg-white focus:ring-2"
            value={confirmPassword}
            placeholder="confirm password"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center gap-4 mb-4">
          <motion.button
            disabled={loading}
            type="submit"
            className="w-3/4 px-4 py-2 mx-auto font-medium rounded-md border-emerald-500 bg-emerald-500 text-slate-50"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
          >
            Submit
          </motion.button>
          <span>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline hover:underline-offset-2"
            >
              Login
            </Link>
          </span>
        </div>
      </form>
    </motion.div>
  );
};

export default Signup;
