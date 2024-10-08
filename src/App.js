import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import Navbar from './components/navbar';
import NotFound from './components/notfound';
import UserProfile from './components/userProfile';
import SearchUser from "./components/searchUser"

function App() { // setting home page the root of our url
  // 'exact' key word makes sure our route outputs the right component (page) at the exact 'root' of our project. only used for ROOT eg home page
// the 'element' displays the home component 
// the 'Route'with nested elements below is for routing on the navbar
  return (
  
    <Routes>
      <Route path="/" element={<Navbar />}> 
        <Route exact path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/users" element={<Users />} /> 
        <Route path="/users/user/:username " element={<UserProfile />}/> 
        <Route path="/search" element={<SearchUser />} /> 
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
 
  ); // the (path="*" element={<NotFound />}) is a page created for routes that doesnt exist in the application and the path prop is '*' 
}

export default App;
