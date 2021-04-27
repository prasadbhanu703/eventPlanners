import React, { useState } from "react";
// import { ABout } from "./aboutUs";
// import {Link } from "react-router-dom";
import DataOfOrganisers from "./dataOfOrganisers";

// const newDataOfOrganisers = [...DataOfOrganisers];

const Events = (props) => {
  let [clicked, setClick] = useState(true);
  let [index, setIndex] = useState(0);

  const newData = DataOfOrganisers.map((data, idx) => {
    console.log("count is here", data.count);
    return (
      <div
        className="img-container"
        style={{ border: "1px solid black", margin: "10px" }}
        key={idx + data.logoUrl}
        onClick={() => {
          setClick(!clicked);
          console.log("clicked");
          setIndex(idx);
        }}
      >
        <img
          className="column left"
          style={{ width: "300px" }}
          alt=""
          src={data.logoUrl}
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
          <button
            className="booking-buttons"
            onClick={() => {
              // setClick(true)
            }}
          >
            <h2>More info</h2>
          </button>
          {/* <button
            className="booking-buttons"
            onClick={() => {
              alert(`booked event with ${data.name}`);
              setClick(true)
            }}
          >
            <h2> Book </h2>
          </button> */}
        </div>
      </div>
    );
  });

  return (
    <div className="main-div">
      {clicked ? (
        newData
      ) : (
        <div>
          <div
            className="img-container"
            style={{ border: "1px solid black", margin: "10px" }}
            key={index}
            onClick={() => {
              setClick(!clicked);
              console.log("clicked");
              setIndex(null);
            }}
          >
            <img
              className="column left"
              style={{ width: "300px" }}
              alt=""
              src={DataOfOrganisers[index].logoUrl}
              // onClick ={() => {setClick(!clicked)}}
            />
            <div className="column middle">
              <h2>{DataOfOrganisers[index].name}</h2>
              <h4> {DataOfOrganisers[index].typesOfEvents} </h4>
              <h6> Location : {DataOfOrganisers[index].location}</h6>
              <h6>
                {" "}
                <b>Contact:</b> {DataOfOrganisers[index].contact}{" "}
              </h6>
              <h4>
                {" "}
                <b>Offers:</b> {DataOfOrganisers[index].offers}{" "}
              </h4>
            </div>
            <div className="column right">
              <button
                className="booking-buttons"
                onClick={() => {
                  DataOfOrganisers[index].count =
                    DataOfOrganisers[index].count + 1;
                  // alert(`${DataOfOrganisers[index].name} added to wishlist :)`);
                }}
              >
                <h2> Add To WishList </h2>
              </button>
              <button
                className="booking-buttons"
                onClick={() => {
                  alert(
                    `booked a event with ${DataOfOrganisers[index].name} :)`
                  );
                }}
              >
                <h2> Book </h2>
              </button>
            </div>
          </div>
          <div style={{ alignItems: "center" }}>
            {DataOfOrganisers[index].imagesOfEves.map((image, idx) => {
              return (
                <img
                  src={image}
                  alt=""
                  style={{
                    height: "400px",
                    width: "275px",
                    padding: "10px",
                    border: "1px solid black",
                    margin: "10px",
                    textAlign: "center",
                    backgroundColor: "gold",
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
