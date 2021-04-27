import React, { useState } from "react";
// import "./../styles/App.css";

export default function SignInSignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main-div" style={{backgroundImage: `url("https://images.pexels.com/photos/3800420/pexels-photo-3800420.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`, height : "760px", color: "gold", textAlign: "center" }}>
      <div >
        <img src = "https://www.logodesign.net/logo/young-boy-wearing-headphone-with-synthesizer-glasses-2642ld.png?size=2&industry=event-planner&bg=0" alt=""></img>
        <br />
        <b style={{backgroundColor : "black"}}> Gmail :</b><span>  </span>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style = {{height : "30px", margin:"20px"}}
          required
        ></input>
        <b style={{backgroundColor : "black"}}> Password :</b><span>  </span>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style = {{height : "30px", margin:"20px"}}
          required
        ></input>
        <br />
        <button className="buttons" onClick={() => props.signupHandler(username, password)}>
         <i><b> Sign Up </b></i>
        </button>
        <button
          className="buttons"
          onClick={() => {
            props.loginHandler(username, password);
            // setUsername("");
            // setPassword("");
          }}
        >
         <i><b> Log In </b></i>
        </button>
        {props.error ? <div style={{color : "gold"}}><b style={{backgroundColor : "black"}}>{props.error}</b></div> : null}
      </div>
    </div>
  );
}

