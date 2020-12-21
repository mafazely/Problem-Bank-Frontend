import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1000,
  },
  logo: { height: 45 },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img
            src={process.env.PUBLIC_URL + '/interlogo.png'}
            alt="logo"
            className={classes.logo}
          />
          <Typography variant="h6" noWrap>
            اینترکارسولار
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
