import React from "react";
import { Typography, Button, Badge } from "@material-ui/core";
import useStyles from "../styles/Scrollbar";
import { useStyles as HomeStyles } from "../styles/Home";
// import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
// import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
// import { usePalette } from "react-palette";
import QRCode from "react-qr-code";
import { useState } from "react";

function SubTitle(props) {
  const homeClasses = HomeStyles();
  const scrollClasses = useStyles();
  //   const { data } = usePalette(props.src);

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div>
      <div className={`${scrollClasses.biddings} ${homeClasses.biddings}`}>
        <div>{props.vendor}</div>
        <div>Location: {props.location}</div>
        <div>Ending Date: {props.endingDate}</div>
        <div>
          Get vouchers of {props.discount}% discount for {props.items}
        </div>
        {isEdit ? (
          <Button
            variant='contained'
            className={homeClasses.exploreButton}
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
    </div>
  );
}

export default SubTitle;
