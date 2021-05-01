import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import HomePage from "./homePage";
import Events from "./events";
import AboutUs from "./aboutUs";
import Profile from "./profile"
import Todo from "./todo";
import SignInSignUp from "./signInSignUp";
import WishList from "./wishList";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [userName, setUserName] = useState(undefined);

  const getUserName = () => {
    return fetch('http://localhost:9999/userinfo', { credentials: "include"})
    .then(r => {
      if(r.ok) {
        return r.json();
      } else {
        setLoggedIn(false);
        setUserName(undefined);
        return { success: false };
      }
    }).then(r => {
      if(r.success !== false) {
        setLoggedIn(true);
        setUserName(r.userName);
      }
    });
  }

  useEffect(() => {
    getUserName();
  }, []);


  const signupHandler = (username, password) => {
    if(username.includes("@gmail.com")) {
    loginOrSignup('http://localhost:9999/signup', username, password);
    }
    else {
      setError("Please do enter valid Email/password");
    }
  };
  const loginHandler = (username, password) => {
    if(username.includes("@gmail.com")) {
      loginOrSignup('http://localhost:9999/login', username, password);
      }
      else {
        setError("Please do enter valid Email/password");
      }
  };

  const logoutHandler = () => {
    return fetch('http://localhost:9999/logout', { credentials: 'include'})
    .then(r => {
      if(r.ok) {
        setLoggedIn(false);
        setUserName(undefined);
      }
    })
  };


  const loginOrSignup = (url, username, password) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ userName: username, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include"
    })
      .then((r) => {
        if(r.ok) {
          return { success: true };
        } else {
          return r.json()
        }
      })
      .then((r) => {
        if(r.success === true) {
          return getUserName();
        } else {
          setError(r.err);
        }
      });
  }
  return (
    <div className="App">
      {loggedIn ? (
        <Router>
          <Route path="/:page" component={Header} />
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/eventPlanners" component={HomePage} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/wishList" component={WishList} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/profile" render={() => <Profile username={userName} logoutHandler={logoutHandler} />} />
        </Router>
      ) : (
        <>
          <SignInSignUp signupHandler={signupHandler} loginHandler={loginHandler} error={error} />
        </>
      )}
    </div>
  );
}

export default App;
