import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/user/userSlice";

import styles from "../../styles/Profile.module.css";
import { jwtDecode } from "jwt-decode";
const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
      const decoded = jwtDecode(localStorage.getItem('token')|| '');
      if(decoded){
        setUserData(decoded);
      }
     
  }, [setUserData]);  

  const { given_name, family_name, email } = userData || {};

  return (
    <div className={styles.profile}>
      <h2>User Profile</h2>
      {userData ? (
        <ul>
          <li>First Name: {given_name}</li>
          <li>Last Name: {family_name}</li>
          <li>Email: {email}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
