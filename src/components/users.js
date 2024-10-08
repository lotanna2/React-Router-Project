import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // importing use navigate hook

const Users = () => {
  //State management
  const [gitUsers, setGitUsers] = useState([]);
  const navigate = useNavigate(); // initialized it into a variable we can use in our code

  const getGitUsers = async () => {
    const response = await axios.get("https://api.github.com/users?since=XXXX");
    console.log(response.data);
    setGitUsers(response.data);
    return response.data;
  };

  useEffect(() => {
    getGitUsers().catch((e) => console.error(e));
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      {" "}
      <div className="users-cont">
        {gitUsers.map((user) => (
          <div className="user-card-cont" key={user.id}>
            <img
              src={user.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{user.login}</span>
            <button onClick={() => navigate(`/users/user/${user.login}`)} // navigates to the user's login on click using the UseNavigate hook and passed in the user name variable so it goes to the specific user
              className="view-btn" 
            >
              View User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

// useNavigate hook allows us to navigate between pages without the use of components like links. it is the core of 
// programmatic navigation