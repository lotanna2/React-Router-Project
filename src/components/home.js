import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const RepoList = () => {
  //State management
  const [repos, setRepos] = useState(null); // use state hook returenes two values, The current state value (repos in this case). And A function to update that state (which is setRepos).
  const gitRepos = async () => {
    const response = await axios.get(
      "https://api.github.com/search/repositories?q=XXX"
    );
    console.log(response.data.items);
    setRepos(response.data.items);
    return response.data;
  };
  useEffect(() => {
    gitRepos().catch((e) => console.error(e));// gitRepos is an asyn function that makes an API call (using Axios) to fetch data, presumably a list of repositories.
  }, []); //  the code uses .catch() to catch and log any errors that might occur during the API call.
  return ( 
    <div className="users-cont">
      {repos ? (
        repos.map((repo) => (
          <div className="user-card-cont" key={repo.id}>
            <img
              src={repo.owner.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{repo.name}</span>

            <span className="repo-lang-span">Language: {repo.language}</span> 
            <div>
              By:{" "}
              <Link
                to={`/users/user/${repo.owner.login}`} // directs to the users login page
                className="repo-owner" 
              >
                {repo.owner.login} 
              </Link>
            </div> 
            <Link to={`/repo-detail/${repo.name}/${repo.owner.login}`}>  
              <button>View Repo</button> 
            </Link> 
          </div> 
        )) 
      ) : (
        <h1>Loading...</h1>
      )}
      <Link to="/users">Go To Users Page</Link>
    </div> // link component (html anchor tag) above that allows us to navigate from one page to another
  );
};

export default RepoList;
