import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: "-webkit-box",
    WebkitLineClamp: 4,
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
  },

  button: {
    marginTop: "15px",
    color: "#FFD600",
    fontFamily: "Rubik, sans-serif",
  },
}));
function ReadMore({ children }) {
  const classes = useStyles();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div className={isHidden ? classes.hidden : null}>{children}</div>
      <Button
        size='small'
        onClick={() => setIsHidden(!isHidden)}
        className={classes.button}>
        {isHidden ? "Read In Detail" : "⬆ less"}
      </Button>
    </>
  );
}

export default ReadMore;
