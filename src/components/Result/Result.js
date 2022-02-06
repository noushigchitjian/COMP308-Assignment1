import React, { useEffect, useState } from "react";
import auth from "../../auth/auth";
import "./Result.css";

function ThankYou(props) {
  //const { uemail, ucomment } = useParams();
  const [uemail, setEmail] = useState();

  useEffect(() => {
    const loggedInUser = auth.getToken();

    //  setEmail(loggedInUser);
    if (loggedInUser !== "") {
      setEmail(loggedInUser);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="result-Style">
        <h1>Thank You {uemail}</h1>
        <br />
        <h3>We appreciate your comments: {props.location.state}</h3>
      </div>
    </React.Fragment>
  );
}

export default ThankYou;
