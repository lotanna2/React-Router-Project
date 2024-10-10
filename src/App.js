import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'; // the Navigate component is used to protect routes and enable redirect when the set rules for processing that route arent met 
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import Navbar from './components/navbar';
import NotFound from './components/notfound';
import UserProfile from './components/userProfile';
import SearchUser from "./components/searchUser"
import AuthProfile from './components/authProfile';
import { useState } from 'react';

function App() { // setting home page the root of our url
  // 'exact' key word makes sure our route outputs the right component (page) at the exact 'root' of our project. only used for ROOT eg home page
// the 'element' displays the home component 
// the 'Route'with nested elements below is for routing on the navbar
 const [username, setUsername] = useState(""); // setting a state variable for the authProfile login
 cobst [isLogged, setIsLogged] = useState(false); // boolean that holds the state of the authentic
return (
  
    <Routes>
      <Route path="/" element={<Navbar />}> 
        <Route exact path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/users" element={<Users />} /> 
        <Route element={<UserProfile />} path="/users/user/:username "/> 
        <Route path="/search" element={<SearchUser />} /> 
        <Route 
        element={
        <login setIsLogged={setIsLogged} setUsername={setUsername} />
          } 
          path="/login" />
        <Route 
          element={isLogged ? ( <AuthProfile username={username}/>
           ) : (
           <Navigate  replace to ={"/login"} /> 
          ) // navigate component to triger the 'login route' if the user isnt authenticated.
        } 
          path="/authprofile" 
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
 
  ); // the (path="*" element={<NotFound />}) is a page created for routes that doesnt exist in the application and the path prop is '*' 
}

export default App;
