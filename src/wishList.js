import React, { useState } from "react";
import DataOfOrganisers from "./dataOfOrganisers";

const WishList = () => {
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const newData = DataOfOrganisers.map((data, idx) => {
    if (data.count > 0)
      return (
        console.log(data.name),
        (
          <div
            className="img-container"
            style={{ border: "1px solid black", margin: "10px" }}
            key={idx}
            onClick={() => {
              setClicked(true);
              console.log("clicked");
              //   setIndex(idx);
            }}
          >
            <img
              className="column left"
              style={{ width: "300px" }}
              alt=""
              src={data.logoUrl}
              // onClick ={() => {setClick(!clicked)}}
            />
            <div className="column middle">
              <h2>{data.name}</h2>
              <h4> {data.typesOfEvents} </h4>
              <h6> Location : {data.location}</h6>
              <h6>
                {" "}
                <b>Contact:</b> {data.contact}{" "}
              </h6>
              <h4>
                {" "}
                <b>Offers:</b> {data.offers}{" "}
              </h4>
            </div>
            <div className="column right">
              {/* <button
                className="booking-buttons"
                onClick={() => {
                  setIndex(idx);
                  console.log("index is", idx);
                }}
              >
                <h2> Remove </h2>
              </button> */}
              <button
                className="booking-buttons"
                onClick={() => {
                  alert(`booked event with ${data.name}`);
                }}
              >
                <h2> Book </h2>
              </button>
            </div>
          </div>
        )
      );
    else return <div> </div>;
  });

  console.log("original data", newData);
  const updatedData = newData.slice(index, 1);
  console.log("updated data,", updatedData);
  return <div className="main-div" >{clicked ? updatedData : newData}</div>;
};

export default WishList;
