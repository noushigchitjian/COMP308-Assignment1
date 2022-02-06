import React, { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MateralExample(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = () => {
    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }
   // props.login({ email, password });
  };

  return (
    <form>
      <Typography variant="h5" style={{ marginBottom: 8 }}>
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        className="form-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        className="form-input"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="form-input"
        size="large"
        onClick={submitForm}
      >
        Login
      </Button>

      {error && (
        <Alert severity="error" onClick={() => setError(null)}>
          {props.error || error}
        </Alert>
      )}
    </form>
  );
};