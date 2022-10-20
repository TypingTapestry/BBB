import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
  <>
  <center>
    <Typography variant="subtitle2" color="text.secondary">
      Made with 💔 by{" "}<a href="https://github.com/TypingTapestry" target="_blank" rel="noopener">Dominic</a>
    </Typography>
  <br></br>
  <Typography variant="subtitle" color="text.primary">
    <i>"Goodbyes hurt the most when people leave <br />
    without saying them."</i>
  </Typography>
  <br></br>
  <br></br>
  <Typography variant="subtitle" color="text.primary">
    <Link to="/" color="inherit">
      <b>ByeByeBytes</b>
    </Link>
      &nbsp;is a repository of your end-of-life letters to loved ones and friends to be shared after you're gone.
  </Typography>
  </center>
  </>
  );
};

export default Copyright;
