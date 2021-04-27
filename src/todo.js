// import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
// import AboutUs from "./aboutUs";


const Todo = () => {
  // const [text, setText] = useState("");
  // const [data, setData] = useState([{
  //   author : "author1" ,
  //   book : "book1"
  // },
  // {
  //   author : "author2" ,
  //   book : "book2"
  // },
  // {
  //   author : "author3" ,
  //   book : "book3"
  // }])
  // return (<div className="main-div">
  // <input type="text" placeholder="enter book name" value = {text} onChange ={(evt) => {setText(evt.target.value)}} />
  // {
  //   text.length >= 3 ? <i> {data.map((evt) => {return (<div>{(evt.book.slice(0, text.length) === text)  ? evt.author : ""}</div>)})} </i> : ""
  // }
  //  </div>)
};

export default Todo;

//>>>>>>>>>> timer problem with start and stop buttons

// const Todo = () => {
//   let [timer, setTimer] = useState(60);
//   let [state, setState] = useState(false);

//   const increament = () => {
//     setTimer(timer - 1);
//   };
//   const stop = () => {
//     setState(true);
//   };

//   useEffect(() => {
//     if (!state) {
//       const interval = setInterval(() => {
//         increament();
//       }, 1000);

//       return () => {
//         clearInterval(interval);
//       };
//     }
//   }, [timer, state]);

//   return (
//     <div className="main-div">
//       {timer}
//       <button onClick={increament}> Start </button>
//       <button onClick={stop}> Stop </button>
//     </div>
//   );
// };

//>>>>>>>>>>>>>>>>>> How to update UseState Object and object destructuring.

// const Todo = () => {
//     const [counter, setCounter] = useState(0);
//     let [fields, setFields] = useState({ fname : "" , lname : ""  });
//     let [clicked, setClicked] = useState(false);
//   return( <div className="main-div">
//   {counter}
//   <button onClick = {() => {setCounter( counter + 1 ); console.log("counter value : ",counter)}}>Incrmnt </button>

//     <input type="text" placeholder="enter" value = {fields.fname} onChange ={ evt => { const newFName = evt.target.value; setFields( prev => { return {...prev , fname : newFName} } )}  } />
//     <input type="text" placeholder="enter" value = {fields.lname} onChange ={ evt => { const newLName = evt.target.value; setFields( prev => { return {...prev , lname : newLName}})}  } />
//     <button onClick={() => {setClicked(true); console.log(fields) }} > button </button>
//     {clicked ? <i> {fields.fname} and {fields.lname} </i> : "" }

//   </div>);
// };

// >>>>>>>>>>>>>>>>>>> How to compare useState objects like Authentication

//     const Todo = () => {
//     const [userName, setUserName] = useState("");
//     const [passWord, setPassword] = useState("");
//     const [clicked, setClicked] = useState(false);
//     // console.log("Props of TOdo : ",props)
//     const[dummy, setData] = useState ( {
//         username : "bhanu",
//         password : "12345"
//     })
//     const clickHandler = (evt) => {
//         if(dummy.username === userName && dummy.password === passWord) {
//             setClicked(true);
//         }
//         else {setClicked(false)}
//         evt.preventDefault();

//         console.log(clicked , dummy , userName , passWord);

//     }

//     return (<div className="main-div">
//        <form>
//            <span> UserName : </span>
//            <input type="text" placeholder="username" value={userName} onChange = {(evt) => { setUserName(evt.target.value) ; console.log( "username",userName)}} />
//            {/* {userName} */}
//            <span> Password : </span>
//            <input type="number" placeholder="password" onChange = {(evt) => { setPassword(evt.target.value)}} />
//            <button onClick={clickHandler}> SigniIn </button>
//            {clicked ? <Redirect to="./aboutUs" name={userName}> {AboutUs}  </Redirect>: ""}
//            </form>
//     </div>)
// }

// >>>>>>>>>>>>>>>>>>>>>>>>> How to use useEffect in react and also How To capture values from User Input

// import React, { useCallback, useEffect, useState } from "react";

// const Todo = () => {
//    let [timer, setTimer] = useState(60);
//    let [clicked, setClicked] = useState(false);

//   const timerFunction = () => {
//     setClicked(true);
//     // setTimer(timer = timer-1);
//   //   console.log("reached", timer)
//   }

//   const pauseTime = () => {
//     setClicked(!clicked);

//   }

//   const timeInterval = useCallback(() =>{ setInterval(() => {
//       clicked ?  setTimer(timer > 0 ? timer-- : 60) : setTimer(timer);
//       // console.log(timer, "is timer" );
//     },1000);
//   })

//    useEffect(() => {
//         timeInterval();

//     return () => {clearInterval(timeInterval)}
//    },[timeInterval])
//     return ( <div className="main-div">

//       <button onClick = {timerFunction}> start </button>
//       <button onClick ={ pauseTime } > pause </button>
//       {timer}
//         </div>)
// }

// // import React, { useEffect, useState } from "react";

// // const Todo = () => {
// //   let [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// //   let [text, setText] = useState("");
// //   const [show, setShow] = useState([]);
// //   // const [editmode, setEditMode] = useState(false);

// //   const clickHandler = () => {
// //     setData(data.splice(0, data.length - 1));
// //   };

// //   useEffect(() => {
// //     console.log("data chnages", data);
// //     const value = document.getElementById("id");

// //     // window.addEventListener("keydown", clickHandler);
// //     // return () => {window.removeEventListener("keydown", clickHandler)}
// //   }, [data]);

// //   return (
// //     <div className="main-div">
// //       <button onClick={() => setData(data.splice(1))}> first button </button>
// //       <button onClick={clickHandler}> end button </button>
// //       {data.map((item, idx) => {
// //         return <b key={idx}> {item} </b>;
// //       })}
// //       <input
// //         type="text"
// //         placeholder="enter something"
// //         onChange={(evt) => {
// //           setText(evt.target.value);
// //         }}
// //       />
// //       <button
// //         onClick={() => {
// //           setShow((evt) => [...evt, text]);
// //         }}
// //       >
// //         {" "}
// //         ADD{" "}
// //       </button>
// //       {/* {show.map((evt,idx) => {return(<i key={idx}> { evt  }</i>)})}
// //        */}
// //       {show.map((evt, idx) => {

// //         return (
// //           <>
// //           {/* { editmode} ? <textarea type="text"> </textarea> : */}
// //           <div>

// //             <li key={idx}> {evt} </li>{" "}
// //             <button
// //               onClick={() => {
// //                 show[idx] = text;
// //                 setShow([...show])
// //               }}
// //             >
// //               change
// //             </button>{" "}
// //             <button
// //               onClick={() => {
// //                 show.splice(idx, 1);
// //                 setShow([...show]);
// //                 console.log("idx is :", idx);
// //               }}
// //             >
// //               Delete{" "}
// //             </button>
// //             </div>
// //           </>
// //         );
// //       })}
// //       <div id="id"> </div>
// //     </div>
// //   );
// // };
