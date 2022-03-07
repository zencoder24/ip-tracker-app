import { makeStyles } from '@mui/styles';
import HeadBg from "../../assets/pattern-bg.png"

export default makeStyles((theme) => ({
    box:{
        width: '100%',
        padding: '13% 10%',
        backgroundImage: `url(${HeadBg})`,
        height: '35vh'
    },
   textField:{
        backgroundColor: 'white',
        borderRadius: '8px',
        marginTop: '10%',
       paddingRight: '0',
       "& .MuiOutlinedInput-root": {
           "& fieldset": {
               borderColor: "rgba(0, 0, 0, 0.23)"  // default
           },
           "&.Mui-focused fieldset": {

           }
        }
   },

    textFieldFocused: {
        backgroundColor: "yellow"
    },

   inputRoot:{
        paddingRight: '0'
   },
   iconButton: {
        borderRadius: "0px 8px 8px 0px",
        backgroundColor: "black"
   },
    formButtonIcon:{
        color: "white"
    }

}))