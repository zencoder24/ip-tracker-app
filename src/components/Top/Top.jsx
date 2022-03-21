import React from "react";
import {Box, Typography, TextField, InputAdornment, IconButton} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useStyles from './styles.js'



const Top = ({setIpAddress, onClick, formInvalid}) => {
    const classes = useStyles();
  return(
      <Box className={classes.box}>
          <Typography
            variant="h6"
            align="center"
            className={classes.title}>
              Ip Address Tracker
          </Typography>
                  <TextField
                      error={formInvalid}
                      helperText={formInvalid ? "Please Provide a Valid IP Address or domain": ''} //<-Error Message
                      FormHelperTextProps={{ classes: { root: classes.helperText } }} //<--Used to style error message
                      onChange={(e) => setIpAddress(e.target.value)}
                      className={classes.textField}
                      placeholder="Search for any IP address or domain"
                      fullWidth
                      variant="outlined"
                      color="primary"
                      size="small"
                      InputProps={{
                          classes:{
                              root: classes.inputRoot
                          },
                          endAdornment:(
                              //Button on the end of the input text field
                              <InputAdornment position='end'>
                                  <IconButton
                                      color="secondary"
                                      onClick={onClick}
                                      className={classes.iconButton}
                                      children={<ArrowForwardIosIcon className={classes.formButtonIcon}/>}/>
                              </InputAdornment>
                          )
                      }}
                  />
      </Box>
  )
}

export default Top