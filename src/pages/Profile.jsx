import React, { useContext, useState } from "react";
import EditProfile from "../components/EditProfile";

// context
import dummy from "../assets/IVPR4348.jpg";

// styles
import { MdEdit } from "react-icons/md";
import { motion } from "framer-motion";

const Profile = () => {
  const { darkMode } = useContext(DarkThemeContext);

  const userData = {
    name: "sjk",
    country: "India",
    age: 18,
  };

  const [newData, setNewData] = useState({
    name: userData.name,
    country: userData.country,
    age: userData.age,
    password: "",
    changePassword: "",
  });

  const [showModal, setShowModal] = useState(false);

  // event hadlers
  const toggleModal = (e) => {
    console.log("toggled");
    console.log(e.target.id);
    setShowModal(true);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "100vw", transistion: { duration: 0.2 } }}
      className={"profile " + (darkMode ? "dark-profile" : "")}
    >
      {showModal && (
        <EditProfile
          newData={newData}
          closeModal={() => setShowModal(false)}
          setNewData={setNewData}
          changePassword={false}
        />
      )}
      <section className="activity"></section>
      <section className="display">
        <div className="profile-image">
          <img src={dummy} alt="profile-pic" />
        </div>
        <div className="details">
          <div className="data-field">
            <h3 className="field-name">Name</h3>
            <div className="field-data">
              <p>{userData.name}</p>
              <MdEdit id="name" className="edit-icon" onClick={toggleModal} />
            </div>
          </div>
          <div className="data-field">
            <h3 className="field-name">Country</h3>
            <div className="field-data">
              <p>{userData.country}</p>
              <MdEdit
                id="country"
                className="edit-icon"
                onClick={toggleModal}
              />
            </div>
          </div>
          <div className="data-field">
            <h3 className="field-name">Age</h3>
            <div className="field-data">
              <p>{userData.age}</p>
              <MdEdit id="age" className="edit-icon" onClick={toggleModal} />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Profile;
