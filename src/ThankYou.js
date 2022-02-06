import React from "react";
import { useParams } from "react-router-dom";

function ThankYou(props) {
  //const { uemail, ucomment } = useParams();

  return (
    <React.Fragment>
      <div>
        <h1>Thank You {props.location.state}</h1>
        <br />
        <h3>We appreciate your comments:</h3>
      </div>
    </React.Fragment>
  );
}

export default ThankYou;
