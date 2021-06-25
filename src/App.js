import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from './components/ShareMultipleComponents/Navbar/Navbar';
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import LogIn from "./components/LogIn/LogIn/LogIn";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./components/LogIn/PrivateRoute/PrivateRoute";
import Booking from "./components/Dashboard/Booking/Booking";
import Services from "./components/Home/Services/Services";
import Footer from "./components/Home/Footer/Footer";
import Review from "./components/Home/Review/Review";
import Contract from "./components/Home/Contract/Contract";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbars />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/service">
            <Services />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/contract">
            <Contract />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard/booking/:id">
            <Booking />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
