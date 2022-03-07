import React from "react";
import {Box, Typography, TextField, Button, FormGroup, InputAdornment, IconButton} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {grey} from "@mui/material/colors";
import useStyles from './styles.js'



const Top = (props) => {
    const classes = useStyles();
  return(
      <Box className={classes.box}>
          <Typography
            variant="h6"
            align="center"
            color="primary"
            className={classes.title}>
              Ip Address Tracker
          </Typography>
          <FormGroup row noValidate autoComplete="off">
              <TextField
                  className={classes.textField}
                  classes={{focused: classes.textFieldFocused}}
                  placeholder="Enter an IP address..."
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="small"
                  InputProps={{
                      classes:{
                        root: classes.inputRoot
                      },
                      endAdornment:(
                          <InputAdornment position='end'>
                            <IconButton
                                className={classes.iconButton}
                                children={<ArrowForwardIosIcon className={classes.formButtonIcon}/>}/>
                          </InputAdornment>
                      )
                  }}
                    />
          </FormGroup>
      </Box>
  )
}

export default Top