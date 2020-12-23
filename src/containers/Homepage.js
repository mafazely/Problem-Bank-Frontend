/* eslint-disable jsx-a11y/media-has-caption */
import {
  Button,
  Divider,
  Fab,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import {
  Assignment,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthDialog from '../components/Dialog/AuthDialog/AuthDialog';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import ScrollTop from '../components/ScrollToTop/ScrollToTop';
import { logout } from '../redux/actions/account';
import PersonCard from '../components/Cards/PersonCard'

const useStyles = makeStyles((theme) => ({
  centerItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 80,
    color: 'white',
    lineHeight: '80px',
    textShadow: '-2px 2px #888',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 60,
      lineHeight: '40px',
    },
  },

  subtitle: {
    fontSize: 25,
    color: '#37253f',
    textShadow: '-2px 2px #888',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },

  sectionTitle: {
    fontSize: 26,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },

  firstSection: {
    height: '100vh',
    color: 'black',
    padding: theme.spacing(4, 3, 4),
  },

  footer: {
    opacity: '1',
    background: '#F0DBED',
    // color: '#f2f2f2',
    boxShadow: '3px 0px 3px 0px black',
    paddingTop: '30px',
    paddingBottom: '30px',
  },

}));

function Homepage({ isLoggedIn, logout }) {
  const classes = useStyles();
  const [authDialogOpen, setAuthDialogOpen] = useState();

  return (
    <>
      <Container className={classes.firstSection}>
        <div id="back-to-top-anchor"></div>
        <div className="landing-background" />

        <Grid container direction="column" style={{ height: '100%' }}>
          <Grid container item direction="row" style={{ height: '10%' }}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setAuthDialogOpen(true)}>
                ورود
              </Button>
            </Grid>
            {isLoggedIn && (
              <Grid item>
                <Button variant="outlined" onClick={() => logout()}>
                  خروج
                </Button>
              </Grid>
            )}
          </Grid>
          <Grid container item direction='row-reverse' style={{ height: '90%' }}>
            <Grid
              item
              container
              xs={12}
              sm={6}
              justify="center"
              alignItems="center"
              direction="column">
              <Grid item>
                <Typography variant="h2" className={classes.title}>
                  بانک مسئله
                </Typography>
                <Typography
                  component="h2"
                  variant="h3"
                  className={classes.subtitle}>
                  مسئله، مسئله و باز هم مسئله!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container className={`${classes.footer} ${classes.centerItems}`}>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Typography
              component="h2"
              variant="h2"
              className={classes.sectionTitle}>
              دست اندر کاران
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>

      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <AuthDialog
        open={authDialogOpen}
        handleClose={() => setAuthDialogOpen(false)}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.account.token,
});

export default connect(mapStateToProps, { logout })(Homepage);
