import {
  Typography,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core"
import React, { useState } from "react"
import { useStyles } from "./styles/Write"
import { useStyles as loginStyles } from "./styles/Login"
import { useNavigate } from "react-router"

const Login = (props) => {
  const classes = useStyles()
  const loginClass = loginStyles()
  const navigate = useNavigate()

  const handleOnChange = (event) => {
    const value = event.target.value
    setInputValues({ ...inputValues, [event.target.name]: value })
  }

  const [inputValues, setInputValues] = useState({
    phoneNumber: "",
    location: "",
  })

  return (
    <div
      className={`${loginClass.loginPageContent} ${classes.writePageContent}`}
    >
      <Typography style={{ textAlign: "center" }}>Login Form</Typography>
      {/* <div className={classes.successSubmit}>
          <div>Successfully Submitted!</div>
        </div> */}
      <div className={`${loginClass.loginForm} ${classes.uploadContent}`}>
        <form
          action=""
          noValidate
          autoComplete="off"
          className={classes.writerForm}
        >
          <div className={classes.textFields}>
            <TextField
              id="phoneNumber"
              label="Enter Phone Number"
              variant="outlined"
              name="phoneNumber"
              value={inputValues.shop}
              onChange={handleOnChange}
              className={classes.textField}
            />

            <input
              type="button"
              value="Login"
              className={loginClass.loginButton}
              style={{ color: "#000", marginTop: "10px" }}
              onClick={() => {
                navigate("/home")
              }}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
