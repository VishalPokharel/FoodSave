import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles as marketStyles } from "./styles/MarketPlace";
import { useStyles as homeStyles } from "./styles/Home";
import HorizontalScrolling from "./elements/HorizontalScroll";
import { content, res_content } from "./elements/dummyImages";
import ListHead from "./elements/ListHead";
// const auctionContent = [];

const auctionContent = content;
const resContent = res_content;

const MarketPlace = () => {
  const marketClasses = marketStyles();
  const homeClasses = homeStyles();

  return (
    <div className={marketClasses.mainContent}>
      <div className={marketClasses.heading} style={{ marginTop: "30px" }}>
        <Typography>All Offers</Typography>
      </div>
      <div className={homeClasses.itemsList}>
        <div className={homeClasses.auctions}>
          <ListHead
            title={""}
            leftButton={"Department Stores"}
            hasRightButton={false}
          />
          <HorizontalScrolling getItems={auctionContent} />
        </div>
        <div className={homeClasses.notableContents}>
          <ListHead
            title={""}
            leftButton={"Restaurants"}
            hasRightButton={false}
          />
          <HorizontalScrolling getItems={resContent} />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
