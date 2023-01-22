import { Button, Divider, Typography } from "@material-ui/core"
import React from "react"
import dummy from "../assets/dummy.jpg"
import ReadMore from "./elements/ReadMore"
import { useStyles } from "./styles/Home"
import { useNavigate } from "react-router"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import { useState } from "react"
import QRCode from "react-qr-code"
import { fetchSaleData } from "../integration"
import { useEffect } from "react"
import { SaleType } from "./constants/constants"

const Home = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [isEdit, setIsEdit] = useState(true)
  const [sale, setSale] = useState([])

  useEffect(() => {
    ;(async () => {
      const sales = await fetchSaleData()
      console.log(sales)
      setSale(sales[sales.length - 1])
    })()
  }, [])

  return (
    <div className={classes.mainContent}>
      <div className={classes.featuredContent}>
        <div className={classes.featured}>
          <Button
            variant="contained"
            className={`${classes.listButton} ${classes.exploreButton}`}
          >
            Limited Offer <ArrowDownwardIcon />{" "}
          </Button>
          {sale.length > 0 ? (
            <>
              <div className={classes.NFTFeatures}>
                <div>
                  <div className={classes.owner}>
                    <Typography>
                      Vendor : ABC <br /> Location: XYZ, Kadaghari <br />
                      Food: {sale.items.name} <br />
                      Quantity: {Number(sale.items.quantity._hex)} <br />
                      Discount: {Number(sale.discount._hex)} <br />
                      Discounted Price: {Number(sale.discountedprice._hex)}{" "}
                      <br />
                      Currently Active : {sale.isActive} <br />
                      Sold From : {SaleType[sale.saletype]} <br />
                      Ending Date : 2023/01/23 <br />
                    </Typography>
                    {isEdit ? (
                      <Button
                        variant="contained"
                        className={classes.exploreButton}
                        onClick={() => setIsEdit(false)}
                      >
                        Generate QR code
                      </Button>
                    ) : (
                      <div
                        style={{
                          height: "auto",
                          margin: "0 20px",
                          padding: "5px",
                          maxWidth: 84,
                        }}
                      >
                        <QRCode
                          size={500}
                          style={{
                            height: "auto",
                            maxWidth: "100%",
                            width: "100%",
                          }}
                          viewBox={`0 0 500 500`}
                          value="qr"
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
                <div className={classes.currentBid}>
                  <img
                    src={dummy}
                    alt="Mart Image"
                    className={classes.NFTImage}
                  />
                  <div className={classes.biddings}>
                    Remaining Time{" "}
                    <div className={classes.bidNumStyle}>10 : 22 : 29</div>
                  </div>
                </div>
              </div>

              <Button
                variant="contained"
                className={classes.exploreButton}
                onClick={() => navigate("/marketplace")}
              >
                Explore More
              </Button>
            </>
          ) : (
            <h1 style={{ color: "white" }}> No Offers Found</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
