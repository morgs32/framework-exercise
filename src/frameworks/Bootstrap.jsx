import React from "react";
import PropTypes from "prop-types";
import { cards } from "../utils";
import Card from "../Card";
import Alert from "../Alert";
import './Bootstrap.scss';

Page.propTypes = {};
Page.defaultProps = {};

export default function Page(props) {
  return (
    <div>
      <Alert />

      {cards.map(v => {
        return <Card key={v} body={v} />;
      })}
    </div>
  );
}
