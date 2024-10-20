// this is easy for implementing a new route on here instead of doing that on our 'APP.JS' file 
import { lazy } from "react";
import home from 'src/components/home.js'

const Users = lazy(() => import("./components/users")); // all for lazy loading, every other component would not be delayed 
const UserProfile = lazy(() => import('./components/userProfile')); 
const SearchUser = lazy(() => import("./components/searchUser")); 
const Login = lazy(() => import('./components/login'));
const AuthProfile = lazy(() => import('./components/authProfile')); 
const AboutUs = lazy(() => import("./components/about")); 
const NotFound = lazy(() => import('./components/notfound')); 

// creatying the route object for them, they need a path and component property
export const appRoutes = [
 {
    path: "/",
    component: home,
    requiresAuth: false,
 },

 {
    path: "/login",
    component: Login,
    requiresAuth: false,
 }, 
 {
    path: "/users",
    component: Users,
    requiresAuth: false,
 }, 
 {
    path: "/authProfile",
    component: AuthProfile,
    requiresAuth: true,
 },
 {
    path: "/searchUser",
    component: SearchUser,
    requiresAuth: false,
 },
 {
    path: "/users/user/:username",
    component: UserProfile,
    requiresAuth: false,
 },
 {
    path: "/about",
    component: AboutUs,
    requiresAuth: false,
 },
 {
    path: "/notfound",
    component: NotFound,
    requiresAuth: false,
 }

];