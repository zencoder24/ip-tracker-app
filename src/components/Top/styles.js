//Styles for the Top Component

import { makeStyles } from '@mui/styles';
import theme from "../theme";
import HeadBg from "../../assets/pattern-bg.png"
import {grey, red} from "@mui/material/colors";

export default makeStyles(() => ({
    box:{
        width: '100%',
        padding: '5% 10% 30% 10%',
        backgroundImage: `url(${HeadBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('md')]:{ //<---Example of a Media Query Breakpoint which is defined in theme.js
            padding: '5% 10% 13% 10%'
        },
        [theme.breakpoints.up('lg')]:{
            padding: '4% 10% 8% 10%'
        },
    },

    title:{
        color: grey[50], //<-- Colors provided by Material (https://mui.com/material-ui/customization/color/#main-content)
        [theme.breakpoints.up('md')]:{
            fontSize: "1.75em"
        },
        [theme.breakpoints.up('md')]:{
            fontSize: "2.55em"
        },
        [theme.breakpoints.up('lg')]:{
            fontSize: "2.65em"
        },
        [theme.breakpoints.up('lg')]:{
            fontSize: "2.65em"
        },
    },
   textField:{
        borderRadius: '10px',
        marginTop: '10%',
       paddingRight: '0',
       "& .MuiOutlinedInput-root": {
           "& fieldset": {
               borderColor: "rgba(0, 0, 0, 0.23)"  // default
           },
           "&.Mui-focused fieldset": {

           }
        },
       [theme.breakpoints.up('md')]:{
           padding: "0",
           width: "76%",
           margin: "0 16%",
           marginTop: "3%"
       },
   },


   inputRoot:{
        paddingRight: '0',
       backgroundColor: grey[50],
       borderRadius: '10px'

   },

    helperText: {
        color: red[400]
    },
   iconButton: {
        borderRadius: "0px 10px 10px 0px",
       backgroundColor: "black",
       "&:hover, &.Mui-focusVisible": { backgroundColor: "black" }
   },
    formButtonIcon:{
        color: "white"
    }

}))