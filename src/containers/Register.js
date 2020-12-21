import './assets/styles/App.css';
import { CssBaseline } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { SnackbarProvider } from 'notistack';
import Pushe from 'pushe-webpush';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual';
import { useHistory } from 'react-router-dom';
import Notifier from './components/Notifications/Notifications';
import { initRedirect } from './redux/actions/redirect';
import Root from './root/Root';
import MuiTheme from './theme/MuiTheme';
import RTLMuiTheme from './theme/RTLMuiTheme';
import translations from './translations';
import jss from './utils/jssRTL';


Pushe.init('ld838ykvn2n75poe');
Pushe.subscribe();

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const App = ({ dir, redirectTo, initRedirect }) => {
  const history = useHistory();
  useEffect(() => {
    if (redirectTo !== null) {
      history.push(redirectTo);
      initRedirect();
    }
  }, [redirectTo, initRedirect, history]); }

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    }

    function Form() {
        const [state, setState] = React.useState({
          firstName: "",
          lastName: "",
          birthday_date : "",
          username :"",
          password : ""
        })
 
  useEffect(() => {
    document.body.dir = dir;
  }, [dir]);

  console.log(name);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField name="firstName" value={state.firstName} onChange={handleChange} label="نام" />
      <TextField name="lastName"  value={state.firstName} onChange={handleChange} label="نام خانوادگی" />
      <TextField
        name="birthday_date"
        label="تاریخ تولد"
        type="date"
        defaultValue="2017-05-24"
        value={state.firstName} onChange={handleChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField name="username" value={state.firstName} onChange={handleChange} label="نام کاربری" />
      <TextField name="password" value={state.firstName} onChange={handleChange} label="رمز" />
    </form>    
    );  
};

const mapStateToProps = (state) => ({
  dir: state.Intl.locale === 'fa' ? 'rtl' : 'ltr',
  redirectTo: state.redirect.redirectTo,
});

export default connect(mapStateToProps, { initRedirect })(App);
