import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom"; // grabbing the parameter to navigate and target a page

const UserProfile = () => {
  const [gitUserData, setGitUserData] = useState({}); // useState passes 2 parameters, the value and the set state usually on fetching or reload


  const { username } = useParams(); // calling the username as a parameter
  

  useEffect(() => {
    const getGitUser = async () => {
      const response = await axios.get(
        `https://api.github.com/users/${username}` // passing in the username as a dynamic username that would generate the profile as the parameter we inpute 
      );
      console.log("USER IS HERE", response.data);
      setGitUserData(response.data); // setting the state of user data to the new state or current state
      return response.data;
    };
    getGitUser().catch((e) => console.error(e));
  }, [username]);
  return (
    <div className="user-profile-main-cont">
      <div className="top-cont">
        <img
          src={gitUserData.avatar_url}
          className="user-avatar-img"
          alt="user-img"
        />{" "}
        <div className="name-cont">
          <span>{gitUserData.login}</span>
          <h2>{gitUserData.name}</h2>
          <h3>{gitUserData.location}</h3>
          <div className="follow-cont">
            <span className="followers">
              Followers: {gitUserData.followers}
            </span>
            <span>Following: {gitUserData.following}</span>
          </div>
          <a
            className="view-ongit-a"
            href={gitUserData.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
      <div className="bottom-cont">
        <h3>{gitUserData.bio}</h3>
      </div>
    </div>
  );
};

export default UserProfile;
