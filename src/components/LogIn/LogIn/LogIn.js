import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfiq";
import "./LogIn.css";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSingIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result.user);
        const { displayName, email, photoURL } = result.user;
        const newUser = { name: displayName, email: email, image: photoURL };
        setLoggedInUser(newUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="logIn-container mb-5 pb-3">
        <img
          className="img-container img-fluid"
          src="https://www.capturethemoment4.me/wp-content/uploads/2017/10/Framed-Capture-the-Moment-Logo.png"
          alt=""
        />
        <h4 className="text-center mb-3">Log In With</h4>
        <div onClick={handleGoogleSingIn} className="singInMethod">
          <img
            className="iconImg img-fluid"
            src="https://img-authors.flaticon.com/google.jpg"
            alt=""
          />{" "}
          <button className="btn font-weight-bold">Continue With Google</button>
        </div>
        <small>
          Don't Have account? <a href="/">Create account</a>
        </small>
      </div>
    </div>
  );
};

export default LogIn;
