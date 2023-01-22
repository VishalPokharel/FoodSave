import {
  Typography,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styles/Write";
import { useStyles as loginStyles } from "./styles/Login";

const Signup = (props) => {
  const classes = useStyles();
  const loginClass = loginStyles();

  const handleOnChange = (event) => {
    const value = event.target.value;
    setInputValues({ ...inputValues, [event.target.name]: value });
  };

  const [inputValues, setInputValues] = useState({
    phoneNumber: "",
    location: "",
  });

  return (
    <div
      className={`${loginClass.loginPageContent} ${classes.writePageContent}`}>
      <Typography style={{ textAlign: "center" }}>Sign Up Form</Typography>
      {/* <div className={classes.successSubmit}>
            <div>Successfully Submitted!</div>
          </div> */}
      <div className={`${loginClass.loginForm} ${classes.uploadContent}`}>
        <form
          action=''
          noValidate
          autoComplete='off'
          className={classes.writerForm}>
          <div className={classes.textFields}>
            <TextField
              id='phoneNumber'
              label='Enter Phone Number'
              variant='outlined'
              name='phoneNumber'
              value={inputValues.shop}
              onChange={handleOnChange}
              className={classes.textField}
            />
            <TextField
              id='location'
              variant='outlined'
              name='location'
              label='Enter your Location'
              value={inputValues.location}
              onChange={handleOnChange}
              className={classes.textField}
            />
            <FormControl className={classes.textField}>
              <InputLabel style={{ marginLeft: "20px" }}>
                Choose your role
              </InputLabel>
              <Select style={{ color: "#fff" }}>
                <MenuItem value='retailer'>Retailer</MenuItem>
                <MenuItem value='consumer'>Consumer</MenuItem>
              </Select>
            </FormControl>

            <input
              type='button'
              value='Sign Up'
              className={loginClass.loginButton}
              style={{ color: "#000" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
