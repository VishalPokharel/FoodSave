import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    loginPageContent: {
        width: "40%",
        margin: "auto",
        "& p": {
            fontSize: "1.5rem",
        },
        marginTop: "40px"
    },

    loginButton: {
        padding: "5px 10px",
        background: "#FFD600",
        border: "1px solid #FFD600",
        position: "relative",
        color: "#000",
        borderRadius: "2px",
        textAlign: "center",
        float: "left",
        cursor: "pointer",
        fontWeight: 500,
        fontFamily: "Rubik, sans-serif",
        fontSize: "1rem",
        width: "20%",
        margin: "auto",
        marginTop: "20px"

    }

}));


export { useStyles };