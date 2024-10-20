import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'; // the Navigate component is used to protect routes and enable redirect when the set rules for processing that route arent met 
import React, { useState, Suspense } from 'react'; // suspense comp allows you to show a fallback ui while the lazyloded compoent finishes 
import { SwitchTransition, CSSTransition } from 'react-transition-group'; // the 'switchTransition' acts as a wrapper for the routes for all elements or routes that would inherit the animation effect
import { appRoutes } from './routes';

function App() { // setting home page the root of our url// 'exact' key word makes sure our route outputs the right component (page) at the exact 'root' of our project. only used for ROOT eg home page
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
        <Suspense fallback={() => <h1> Loading... </h1>
         }>
          <Routes location={location}> 
             {appRoutes.map((route) => { // adding logic that checkes if routh needs authentication, if not retuen the user to the login page
                if(route.requiresAuth && !isLogged) 
                  { return (
                  <Route
                   Key={route.path}
                   exact path={route.path} 
                   element={<Navigate replace to={"/login"} />} // this navigates it to the login page 
                   />
                  );
             } else {
              return (
              <Route
               key={route.path}
               exact path={route.path}
               element={<route.component
                setIsLogged={setIsLogged} 
               setUsername={setUsername} 
               username={username}/>} // how to add routes in an element prop
              />
              );
             }
             })}
          </Routes>
        </Suspense>
    </CSSTransition>

  </SwitchTransition>
    
 
  ); // the (path="*" element={<NotFound />}) is a page created for routes that doesnt exist in the application and the path prop is '*' 
}

export default App;


// Lazyloading implemented (On demand components ~ home components -----  Lazy Load components ~ all other pages components) 
