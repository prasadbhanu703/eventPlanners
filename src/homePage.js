import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Redirect } from "react-router-dom";
import DataOfOrganisers from "./dataOfOrganisers";

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fHdlZGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1505944357431-27579db47558?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBpbmRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1605553426886-c0a99033fda0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHx3ZWRkaW5nJTIwaW5kb29yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1560088613-bef219b766d7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHdlZGRpbmclMjBpbmRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMGluZG9vcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1597466609913-e47405096f86?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODd8fHdlZGRpbmclMjBpbmRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ],
      currentPage: 1,
      imagesPerPage: 1,
      clicked: true,
    };
    this.pageChangeHandler = this.pageChangeHandler.bind(this);
  }

  pageChangeHandler() {
    this.setState({
      clicked: false,
    });
  }

  advertisingImages() {
    this.setState({
      currentPage:
        this.state.currentPage < this.state.images.length
          ? this.state.currentPage + 1
          : 1,
    });
    // console.log("here is current clicked",this.state.currentPage);
  }
  componentDidMount() {
    this.intervalId = setInterval(
      (this.advertisingImages = this.advertisingImages.bind(this)),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { images, currentPage, imagesPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImage = images.slice(indexOfFirstImage, indexOfLastImage);

    const renderImages = currentImage.map((image, index) => {
      return (
        <img
          className="images"
          src={image}
          alt=""
          key={index}
          onClick={this.pageChangeHandler}
        />
      );
    });

    const trendings = DataOfOrganisers.map((data, index) => {
      return (
          <Card
            style={{
              height: "400px",
              width: "295px",
              padding: "10px",
              border: "1px solid black",
              margin: "10px",
              textAlign: "center",
              backgroundColor: "gold",
            }}
            key={index+ "" + data.name}
            onClick={this.pageChangeHandler}
          >
            <CardImg
              top
              width="100%"
              style={{ height: "200px", width: "100%" }}
              src={data.trendings[1]}
              key={index}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h2">#{data.trendings[0]}</CardTitle>
              <CardSubtitle tag="h4" className="mb-2 text-muted">
                {data.name}
              </CardSubtitle>
              <CardText>{data.trendings[2]}</CardText>
            </CardBody>
          </Card>
      );
    });
    const bestDeals = DataOfOrganisers.map((data, index) => {
      return (
          <Card
            style={{
              height: "400px",
              width: "295px",
              padding: "10px",
              border: "1px solid black",
              margin: "10px",
              textAlign: "center",
              backgroundColor: "gold",
            }}
            key={index+ "" + data.name}
            onClick={this.pageChangeHandler}
          >
            <CardImg
              top
              width="100%"
              style={{ height: "200px", width: "100%" }}
              src={data.bestDeals[1]}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h2">#{data.bestDeals[0]}</CardTitle>
              <CardSubtitle tag="h4" className="mb-2 text-muted">
                {data.name}
              </CardSubtitle>
              <CardText>{data.offers}</CardText>
            </CardBody>
          </Card>
      );
    });

    return this.state.clicked ? (
      <>
        <div className="main-div" style={{backgroundColor:""}}>
          {renderImages}
          <h2 style={{ paddingLeft: "10px" }}>Trending: </h2>
          <div className="img-container">{trendings}</div>
          <h2 style={{ paddingLeft: "10px" }}>Best Deals: </h2>
          <div className="img-container">{bestDeals}</div>
        </div>
        <div className="lowerNavbar">
    {" "}
    <h4>
      <b>contact us :</b> 080-95868489526{" "}
    </h4>
    <h4>
      <b>email Id: </b> eventPlannersApplication@gmail.com
    </h4>
    <h4>
      <b>Outlook: </b> eventPlanners@gmail.com
    </h4>
  </div>
      </>
    ) : (
      // (console.log(DataOfOrganisers.name),
      (<Redirect to="/events" > </Redirect>)
    );
  }
}
