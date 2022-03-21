import React from 'react';
import {Card, Divider, Typography} from "@mui/material";
import useStyles from './styles.js'

const LocationInfo = ({locationInfo}) => {
    const classes = useStyles();
    return (
      <Card className={classes.infoContainer}  raised={true}>
          <div className={classes.infoGroup}>
              <Typography variant="subtitle2" component="h2" className={classes.infoLabel} >
                  Ip Address
              </Typography>
              <Typography variant='subtitle1' component='p' className={classes.infoDesc}>
                  {locationInfo.ip}
              </Typography>
          </div>
          <Divider orientation="vertical" flexItem className={classes.divider} />
          <div className={classes.infoGroup}>
              <Typography variant="subtitle2" component="h2" className={classes.infoLabel} >
                  Location
              </Typography>
              <Typography variant='subtitle1' component='p' className={classes.infoDesc}>
                  {`${locationInfo.city}, ${locationInfo.state} ${locationInfo.zipcode}`}
              </Typography>
          </div>
          <Divider orientation="vertical" flexItem  className={classes.divider} />
          <div className={classes.infoGroup}>
              <Typography variant="subtitle2" component="h2" className={classes.infoLabel} >
                  Timezone
              </Typography>
              <Typography variant='subtitle1' component='p' className={classes.infoDesc}>
                  {locationInfo.timezone}
              </Typography>
          </div>
          <Divider orientation="vertical" flexItem  className={classes.divider} />
          <div className={classes.infoGroup}>
              <Typography variant="subtitle2" component="h2" className={classes.infoLabel} >
                  ISP
              </Typography>
              <Typography variant='subtitle1' component='p' className={classes.infoDesc}>
                  {locationInfo.isp}
              </Typography>
          </div>




      </Card>
    );
};

export default LocationInfo;
