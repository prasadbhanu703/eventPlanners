import {useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";

const Header = () => {
  const { page } = useParams() || "head";
  let [clicked, setClicked] = useState(false);
  let [searchclicked,setSearch] = useState(false);

  const HeaderLink = ({ page }) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);
    return (
      <Link to={`/${page}`} className="headerlink-title">
        {title}
      </Link>
    );
  };

  return (
    <>
      <div className="header">
        <img
          alt=""
          src="https://www.logodesign.net/logo/young-boy-wearing-headphone-with-synthesizer-glasses-2642ld.png?size=2&industry=event-planner&bg=0"
          width="70px"
          height="70px"
          className="d-inline-block align-top"
          selected={page === "home"}
          onClick={() => {
            setClicked(!clicked);
          }}
        />
        
        {clicked ? <Redirect to="/eventPlanners" /> : ""}
        
        <HeaderLink page="eventPlanners" selected={page === "home"} />

        <form className="search-container" action="/events">
          <input
            type="text"
            placeholder="events/event organisers"
            className="searchBox"
          />
          <button
            type="button"
            style={{
              margin: "10px",
              color: "black",
              backgroundColor: "gold",
              fontWeight: "lighter",
              height: "40px",
            }}
            onClick ={ () =>  {setSearch((prev) => !prev) ; console.log("clicked search")}}
          >
            search it
          </button>
          
        </form>
        
        {searchclicked ? <Redirect to="/events" /> : ""}
        <HeaderLink page="events" selected={page === "events"} />
        <HeaderLink page="wishList" selected={page === "wishList"} />
        <HeaderLink page="aboutUs" selected={page === "aboutUs"} />
        <HeaderLink page="profile" selected={page === "profile"} />
        
      </div>
    </>
  );
};

export default Header;
