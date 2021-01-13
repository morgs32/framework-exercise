import React from "react";
import PropTypes from "prop-types";

Card.propTypes = {};
Card.defaultProps = {};

export default function Card(props) {
  return (
    <div className="card">
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="180"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Image cap"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96" />
        <text x="50%" y="50%" text-anchor="middle" fill="#dee2e6" dy=".3em">
          Image
        </text>
      </svg>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{props.body}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
