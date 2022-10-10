import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Details detailinfo={props.phone} />
          <Details detailinfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default card;
