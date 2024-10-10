import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'; // the Navigate component is used to protect routes and enable redirect when the set rules for processing that route arent met 
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import Navbar from './components/navbar';
import NotFound from './components/notfound';
import UserProfile from './components/userProfile';
import SearchUser from "./components/searchUser"
import AuthProfile from './components/authProfile';
import { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group'; // the 'switchTrabsition' acts as a wrapper for all elements or routes thst would be inherited


function App() { // setting home page the root of our url
  // 'exact' key word makes sure our route outputs the right component (page) at the exact 'root' of our project. only used for ROOT eg home page
// the 'element' displays the home component 
// the 'Route'with nested elements below is for routing on the navbar
// the 'isLogged' prop passed in the Navbar route is to tell the browser that when you are on this path it means the user is logged in so the 'login' icon wont show
 const [username, setUsername] = useState(""); // setting a state variable for the authProfile login
 const [isLogged, setIsLogged] = useState(false); // boolean that holds the state of the authentic
 const location = useLocation(); // for allowing the csstransition component to trck where we navigate  
return (
  <SwitchTransition comment={null}> 
    <CSSTransition 
    key={location.pathname}
    classNames="fade" 
    timeout={300} 
     unmountOnExit>

        <Routes location={location}> 
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
          <Route path="*" element={<NotFound />} />
        </Routes>
    </CSSTransition>

  </SwitchTransition>
    
 
  ); // the (path="*" element={<NotFound />}) is a page created for routes that doesnt exist in the application and the path prop is '*' 
}

export default App;
