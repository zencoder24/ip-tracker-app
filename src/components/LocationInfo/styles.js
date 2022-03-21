import {makeStyles} from '@mui/styles';
import theme from "../theme";
import {grey} from "@mui/material/colors";



export default makeStyles(() => ({
    infoContainer: {
        position: 'absolute',
        textAlign: 'center',
        backgroundColor: grey[50],
        borderRadius: '14px',
        padding: '5% 0',
        width: '75%',
        top: '22%',

        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '1',
        [theme.breakpoints.up('xs')]:{
            top: '24%',
            padding: '4% 13%',
        },
        [theme.breakpoints.up('sm')]:{
            top: '33%',
            padding: '4% 14%',
        },
        [theme.breakpoints.up('md')]:{
            display: "flex",
            justifyContent: "space-between",
            top: "35%",
            padding: "4% 4%",
            width: "85%"
        },
        [theme.breakpoints.up('lg')]:{
            top: "36%",
            width: "80%",
            padding: "3% 4%"
        },


    },

    infoGroup: {
        [theme.breakpoints.up('md')]:{
            textAlign: "left"
        },
    },
    infoLabel : {
        color: 'hsl(0, 0%, 59%)',
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: '0.625em',
        [theme.breakpoints.up('md')]:{
            fontSize: "0.725em"
        },

        [theme.breakpoints.up('xl')]:{
            fontSize: "1.325em"
        },
    },

    infoDesc: {
        fontWeight: '500',
        fontSize: '1.1rem',
        [theme.breakpoints.up('md')]:{
            fontSize: "1.2rem"
        },
        [theme.breakpoints.up('xl')]:{
            fontSize: "2.2rem"
        },
    },

    divider: {
        display: "none",
        [theme.breakpoints.up('md')]:{
            display: 'flex',
            padding: "0, 5px"

        },

    }
}))