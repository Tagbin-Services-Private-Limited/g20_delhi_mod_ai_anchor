import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App/Assets/css/general.css";
import "./App/Assets/css/style.scss";
import { createBrowserHistory } from "history";
import "./services/i18n";
import firebase from "./firebase";

const history = createBrowserHistory();

console.clear();

firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>,
    document.getElementById("root")
  );

  // let userSessionTimeout = null;

  // if (user === null && userSessionTimeout) {
  //   clearTimeout(userSessionTimeout);
  //   userSessionTimeout = null;
  // } else {
  //   if (user != null)
  //     user.getIdTokenResult().then((idTokenResult) => {
  //       const authTime = idTokenResult.claims.auth_time * 1000;
  //       const sessionDurationInMilliseconds = 30 * 60 * 1000; // 30 min
  //       const expirationInMilliseconds =
  //         sessionDurationInMilliseconds - (Date.now() - authTime);
  //       userSessionTimeout = setTimeout(() => {
  //         // firebase.auth().signOut();
  //         // localStorage.removeItem("user");
  //         // window.location.href = "/login";
  //       }, expirationInMilliseconds);
  //     });
  // }
});

export { history };
