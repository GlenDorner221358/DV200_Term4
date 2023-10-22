import React, { useState } from "react";
import Profile from "../pages/profile";

const userData = () => {
  const [userData, setUserData] = useState({
    name: "John",
    surname: "Doe",
    email: "johndoe@example.com",
  });

  return <Profile userData={userData} />;
};

export default userData;