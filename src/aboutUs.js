import React from "react";
// import Todo from './todo';

const AboutUs = () => {

  return (
    <div
      className="main-div"
      style={{ backgroundColor: "black", color: "gold", textAlign: "center" }}
    >
      <h2>
        <i>About:</i>{" "}
      </h2>
      <h4>
        <b>contact us :</b> 080-95868489526{" "}
      </h4>
      <h4>
        <b>email Id: </b> eventPlannersApplication@gmail.com
      </h4>
      <h4>
        <b>Outlook</b> eventPlanners@gmail.com
      </h4>

      <h2>
        <i>Help </i>{" "}
      </h2>
      <h4>FAQ</h4>
      <h4>Payments</h4>
      <h4>Cancellations</h4>
      <div className="img-container">
        <div style={{ width: "50%" }}>
          <h2>
            {" "}
            <i>Mail Us:</i>{" "}
          </h2>
          <h4> Event Planners Pvt Ltd, </h4>
          <h4> Sarojini Devi Road, </h4>
          <h4> Narsampet, warangal(Dist) </h4>
          <h4> Telengana. </h4>
        </div>
        <div style={{ width: "50%" }}>
          <h2>
            <i> Registered office Address: </i>
          </h2>
          <h4> Event Planners Pvt Ltd, </h4>
          <h4> BU Convention Hall, </h4>
          <h4> BN Reddy Nagar </h4>
          <h4> Narsampet , 506132 </h4>
          <h4> Warangal(Dist),Telengana. </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
