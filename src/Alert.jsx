import React from "react";
import PropTypes from "prop-types";

Alert.propTypes = {};
Alert.defaultProps = {};

export default function Alert(props) {
  return (
    <div className="alert alert-dark">
      <ul style={{ padding: 10, margin: 0 }}>
        <li>
          This alert should be on the left on "larger or equal to desktop". And
          hidden on "less or equal to tablet".
        </li>
        <li>
          And there should be 4 cards per row on xlarge screens. 3 on desktop
          and tablet. 2 on "less than or equal to mobile".
        </li>
        <li>And the cards in each row should all have the same length.</li>
        <li>
          Extra credit: use the frameworks "utility" methods to add margin
          **between each row** of cards.
        </li>
      </ul>
    </div>
  );
}
