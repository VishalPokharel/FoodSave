import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    card: {
        margin: "20px 20px",
        "& img": {
            height: "300px"
        }
    },
    arrow: {
        width: 50,
        height: 50
    },
    scrollMenu: {
        margin: "10px 50px 50px 50px",
    },
    biddings: {
        '& div': {
            margin: "10px"
        }
    }

}));

export default useStyles;