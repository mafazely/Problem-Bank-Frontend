import './assets/styles/App.css';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Notifier from './components/Notifications/Notifications';
import { initRedirect } from './redux/actions/redirect';
import Root from './root/Root';
import RTLMuiTheme from './theme/RTLMuiTheme';
import translations from './translations';
import jss from './utils/jssRTL';

const App = ({ redirectTo, forceRedirect, initRedirect }) => {
  const history = useHistory();
  useEffect(() => {
    if (redirectTo !== null) {
      history.push(redirectTo);
      if (forceRedirect) {
        history.push(redirectTo);
        history.push('/loading/');
        history.goBack();
      } else {
        history.push(redirectTo);
      }
      initRedirect();
    }
  }, [redirectTo, forceRedirect, initRedirect, history]);

  return (
    <IntlProvider translations={translations}>
      <ThemeProvider theme={RTLMuiTheme}>
        <StylesProvider jss={jss}>
          <SnackbarProvider>
            <Notifier />
            <CssBaseline />
            <Root />
          </SnackbarProvider>
        </StylesProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

const mapStateToProps = (state) => ({
  redirectTo: state.redirect.redirectTo,
  forceRedirect: state.redirect.force,
});

export default connect(mapStateToProps, { initRedirect })(App);
