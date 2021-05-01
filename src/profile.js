import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  return (
    <div
      className="main-div"
      style={{ backgroundColor: "black", color: "gold", textAlign: "center", height :"770px" }}
    >
      <div style={{padding : '10px'}}><b><i>Hellooo {props.username} :)</i></b> 
      </div>
      <br />
      <Link to="/events" style={{textDecoration: "none" ,color :"gold", padding : '20px'}}>Your bookings</Link> <br />
      <Link to="/events" style={{textDecoration: "none" ,color :"gold", padding : '10px'}}>Your wishList events</Link> <br />
      <Link to="/events" style={{textDecoration: "none" ,color :"gold", padding : '10px'}}>Your Recommendations</Link> <br />
      <Link to="/events" style={{textDecoration: "none" ,color :"gold", padding : '60px'}}>Feedback</Link> <br />
      <Link to="/events" style={{textDecoration: "none" ,color :"gold", padding : '10px'}}>Ratings</Link> <br />
      <button className="buttons" onClick={props.logoutHandler}>
        <b>Sign Out</b>
      </button>
    </div>
  );
};

export default Profile;
