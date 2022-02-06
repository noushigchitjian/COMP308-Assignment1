import React, { useState, useEffect } from "react";
import auth from "../../auth/auth";
import "./Comment.css";

export default function Comment(props) {
  const [courseCode, setCode] = useState(null);
  const [courseName, setName] = useState(null);
  const [comment, setComment] = useState(null);

  const [uemail, setEmail] = useState();
  const handleCode = (event) => {
    setCode(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };
  // let loggedEmail = auth.getToken();

  useEffect(() => {
    const loggedInUser = auth.getToken();

    //  setEmail(loggedInUser);
    if (loggedInUser !== "") {
      setEmail(loggedInUser);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.history.push({
      pathname: "/result",
      state: comment,
    });
  };

  return (
    <div className="comment-wrapper">
      <h1>Enter Your Comments</h1>
      <form onSubmit={handleSubmit}>
        <b>
          <label for="ccode">Course Code:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        </b>
        <input
          type="text"
          name="ccode"
          id="ccode"
          value={courseCode}
          onChange={handleCode}
        />
        <br />
        <br />
        <b>
          <label for="cname">Course Name:&nbsp;&nbsp;&nbsp;</label>
        </b>
        <input
          type="text"
          name="cname"
          id="cname"
          value={courseName}
          onChange={handleName}
        />
        <br />
        <br />
        <label>
          <p>Student Email</p>
          <input
            type="email"
            name="email"
            id="email"
            value={uemail}
            disabled={true}
          />
        </label>
        <p>
          <label style={{ color: "red" }} for="ycomment">
            Your Comments:&nbsp;&nbsp;
          </label>
        </p>

        <textarea
          name="ycomment"
          id="ycomment"
          value={comment}
          onChange={handleComment}
        />
        <br />

        <div>
          <button style={{ color: "green" }} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
