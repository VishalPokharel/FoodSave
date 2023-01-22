import { makeStyles, alpha } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 5px",
  },
  header: {
    paddingTop: "20px",
    backgroundColor: "#000000",
  },
  logoName: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    margin: "10px 0px",
    width: "80px",
    height: "80px",
  },
  headerTitle: {
    margin: "5px 0px 0px 10px",
    display: "inline-block",
    fontFamily: "Quicksand, sans-serif",
    fontWeight: 600,
    fontSize: "1.75rem",
    color: "#C4C4C4",
    textTransform: "capitalize",
  },
  headerButton: {
    fontFamily: "Rubik, sans-serif",
    fontWeight: 600,
    fontSize: "0.9rem",
    color: "#FFFFFF",
    borderRadius: "10px",
    size: "small",
    marginLeft: "40px",
    transition: "0.5s all ease-out",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    "&:nth-child(5), &:nth-child(6)": {
      backgroundColor: "#c3a400",
      color: "#000",
    },
    "&:nth-child(6)": {
      marginLeft: "10px",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "80%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    headerButton: {
      fontFamily: "Rubik, sans-serif",
      fontWeight: 600,
      fontSize: "0.9rem",
      color: "#FFFFFF",
      borderRadius: "5px",
      size: "small",
      marginLeft: "40px",
      transition: "0.5s all ease-out",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
      },
      "&:nth-child(5), &:nth-child(6)": {
        backgroundColor: "#FFD600",
        color: "#000",
      },
      "&:nth-child(6)": {
        marginLeft: "10px",
      },
    },
  },
}))

export { useStyles }
