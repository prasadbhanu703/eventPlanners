import React from 'react';

const LogOut = (props) => {
    // const [logoutClicked, setlogOutClicked] = useState(false);
    console.log(props.username)

    return(
     <div className="main-div">
              <b style={{color : 'black'}}>Hellooo {props.username.slice(0,-10)}</b><br />

        <button className="button" onLoad={props.logoutHandler}>Log Out</button>
        {/* { logoutClicked ? <>{props.logoutHandler} </>: ""} */}
        </div>
    )
}

 

export default LogOut;