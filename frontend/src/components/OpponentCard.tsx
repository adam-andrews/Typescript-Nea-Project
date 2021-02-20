import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import Card from "./Card";
import "./OpponentCard.css";

export default function OpponentCard() {
  return (
    <div className="OpponentCard">
        <IconButton>
          <Avatar />
        </IconButton>
      <div className="OpponentCard__Textbox">
        <p>Username: </p>
        <p>Balance:</p>
      </div>
      <div className="OpponentCard__CardContainer">
        <Card />
        <Card />
      </div>
    </div>
  );
}
