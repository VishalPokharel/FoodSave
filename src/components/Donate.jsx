import {
  Typography,
  TextField,
  TextareaAutosize,
  InputAdornment,
} from "@material-ui/core";
import React, { useState } from "react";
import SimpleMap from "./elements/Maps";
import { useStyles } from "./styles/Write";

const Donate = (props) => {
  const classes = useStyles();

  const [inputValues, setInputValues] = useState({
    shop: "",
    food: "",
    quantity: 0,
    discount: 0,
    discountedPrice: 0,
    details: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setInputValues({ ...inputValues, [event.target.name]: value });
  };

  return (
    <div className={classes.writePageContent}>
      <Typography>Add Announcements</Typography>
      {/* <div className={classes.successSubmit}>
        <div>Successfully Submitted!</div>
      </div> */}
      <div className={classes.uploadContent}>
        <form
          action=''
          noValidate
          autoComplete='off'
          className={classes.writerForm}>
          <div className={classes.formContent}>
            <div className={classes.textFields}>
              <TextField
                id='bookTitle'
                label="Vendor's Name"
                variant='outlined'
                name='title'
                value={inputValues.shop}
                onChange={handleOnChange}
                className={classes.textField}
              />
              <div style={{ display: "flex" }}>
                <TextField
                  id='author'
                  label='Food to Donate'
                  variant='outlined'
                  name='foodItem'
                  value={inputValues.food}
                  onChange={handleOnChange}
                  className={classes.textField}
                  style={{
                    width: "80%",
                  }}
                />
                <TextField
                  id='number'
                  label='Quantity'
                  variant='outlined'
                  type='number'
                  name='foodQuantity'
                  className={classes.textField}
                  onChange={handleOnChange}
                />
                <input
                  type='button'
                  value='+'
                  className={` ${classes.chooseFile}`}
                  style={{
                    margin: "10px 5px",
                    padding: "5px 10px",
                    color: "#000",
                    fontWeight: 800,
                  }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <TextField
                  id='discount'
                  label='Discount'
                  variant='outlined'
                  name='discount'
                  type='number'
                  value={inputValues.discount}
                  onChange={handleOnChange}
                  className={classes.textField}
                />
                <TextField
                  id='discountedPrice'
                  label='Discounted Price'
                  variant='outlined'
                  type='number'
                  name='discountedPrice'
                  onChange={handleOnChange}
                  className={classes.textField}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>Rs.</InputAdornment>
                    ),
                  }}
                />
              </div>
              <Typography
                style={{
                  margin: "10px 0px 0px 10px",
                  fontSize: "1rem",
                }}>
                Details
              </Typography>
              <TextareaAutosize
                id='description'
                aria-label='Description'
                minRows={10}
                placeholder='A short description about your product'
                name='description'
                style={{ overflow: "auto" }}
                value={inputValues.description}
                onChange={handleOnChange}
              />
            </div>
            <div className={classes.rightContent}>
              <SimpleMap />
              <Typography
                style={{
                  margin: "40px 150px 0px 0px",
                  fontSize: "2rem",
                }}>
                Upload Shop Image
              </Typography>
              <div className={classes.chooseFile}>
                Choose Image
                <input
                  type='file'
                  accept='image/*'
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file && file.type.substring(0, 5) === "image") {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setPreview(reader.result);
                      };
                      reader.readAsDataURL(file);
                      setImage(file);
                    } else {
                      setImage(null);
                      setPreview(null);
                    }
                  }}
                  className={classes.inputFile}
                />
              </div>
              <img src={preview} alt='' className={classes.uploadedImage} />
              {/* <p>{file}</p> */}

              <input
                type='button'
                value='Submit'
                className={`${classes.submitButton} ${classes.chooseFile}`}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;
