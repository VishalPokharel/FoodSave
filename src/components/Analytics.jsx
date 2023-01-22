import { Button, Divider, Typography } from "@material-ui/core"
import React from "react"
import trend from "../assets/trend.png"
import analytics from "../assets/analytics.png"
import sales from "../assets/sales.png"
import { useStyles } from "./styles/Home"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"

const Analytics = () => {
  const classes = useStyles()

  return (
    <div className={classes.mainContent}>
      <div className={classes.featuredContent}>
        <div className={classes.featured}>
          <Button
            variant="contained"
            className={`${classes.listButton} ${classes.exploreButton}`}
          >
            Market Trends <ArrowDownwardIcon />{" "}
          </Button>
          <div classes={{ margin: "200px" }}>
            <img src={trend} alt="Mart Image" className={classes.analysis} />
            <img
              src={analytics}
              alt="Mart Image"
              className={classes.analysis}
            />
            <img src={sales} alt="Mart Image" className={classes.analysis} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Analytics
