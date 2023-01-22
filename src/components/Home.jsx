import { Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import dummy from "../assets/dummy.jpg";
import ReadMore from "./elements/ReadMore";
import { useStyles } from "./styles/Home";
import { content } from "./elements/dummyImages";
import { useNavigate } from "react-router";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useState } from "react";
import QRCode from "react-qr-code";

const auctionContent = content;

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const marketRoute = () => {
    navigate("/marketplace", { replace: true });
  };
  const singleRoute = () => {
    navigate("/singlePage", { replace: true });
  };

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className={classes.mainContent}>
      <div className={classes.featuredContent}>
        <div className={classes.featured}>
          <Button
            variant='contained'
            className={`${classes.listButton} ${classes.exploreButton}`}>
            Limited Offer <ArrowDownwardIcon />{" "}
          </Button>
          <div className={classes.NFTFeatures}>
            <div>
              <div className={classes.owner}>
                <Typography>
                  Vendor : Kasturi Mart <br /> Location: Birendra Chowk,
                  Kadaghari <br />
                  Ending Date : 2023/01/23 <br />
                </Typography>
                {isEdit ? (
                  <Button
                    variant='contained'
                    className={classes.exploreButton}
                    onClick={() => setIsEdit(false)}>
                    Generate QR code
                  </Button>
                ) : (
                  <div
                    style={{
                      height: "auto",
                      margin: "0 20px",
                      padding: "5px",
                      maxWidth: 84,
                    }}>
                    <QRCode
                      size={256}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      viewBox={`0 0 256 256`}
                      value='qr'
                    />
                  </div>
                )}
              </div>
              <Divider />
              <ReadMore>
                <div className={classes.description}>
                  <Typography>
                    Items available at a discounted rate:
                    <ul>
                      <li>Rice</li>
                      <li>Pizza</li>
                      <li>Vegetables</li>
                      <li>Apples</li>
                      <li>Milk</li>
                    </ul>
                  </Typography>
                </div>
              </ReadMore>
            </div>
          </div>
          <Button
            variant='contained'
            className={classes.exploreButton}
            onClick={() => navigate("/marketplace")}>
            Explore More
          </Button>
        </div>
        <div className={classes.currentBid}>
          <img src={dummy} alt='Mart Image' className={classes.NFTImage} />
          <div className={classes.biddings}>
            Remaining Time{" "}
            <div className={classes.bidNumStyle}>10 : 22 : 29</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
