import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AdminManage from "./compenent/AdminPanel/AdminManage";
import AdminPanel from "./compenent/AdminPanel/AdminPanel";
import AddProduct from "./compenent/Dashboard/AddProducts/AddProduct";
import BlogManage from "./compenent/Dashboard/BlogManage/BlogManage";
import ClientContact from "./compenent/Dashboard/ClientContact/ClientContact";
import MyActivity from "./compenent/Dashboard/MyActivity/MyActivity";
import MyBooking from "./compenent/Dashboard/MyBooking/MyBooking";
import ProductManage from "./compenent/Dashboard/ProductManage/ProductManage";
import UserBlog from "./compenent/Dashboard/UserBlog/UserBlog";
import Home from "./compenent/Home/Home/Home";
import ProductItem from "./compenent/Home/ProductItem/ProductItem";
import Login from "./compenent/Login/Login/Login";
import PrivateRoute from "./compenent/Login/PrivateRoute/PrivateRoute";
import NotFound from "./compenent/Shared/NotFound/NotFound";
export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/AdminPanel">
          <AdminPanel/>
        </Route>
        <Route path="/AdminManage">
          <AdminManage/>
        </Route>
        <Route path="/addProduct">
          <AddProduct/>
        </Route>
        <Route path="/ProductItem">
          <ProductItem/>
        </Route>
        <PrivateRoute path="/myActivity">
          <MyActivity/>
        </PrivateRoute>
        <PrivateRoute path="/userBlog">
          <UserBlog/>
        </PrivateRoute>
        <Route path="/blogManage">
          <BlogManage/>
        </Route>
        <Route path="/productManage">
          <ProductManage/>
        </Route>
        <PrivateRoute path="/booking/:order">
          <MyBooking/>
        </PrivateRoute>
        <Route path="/clientContactList">
          <ClientContact/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
