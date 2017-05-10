import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css';

import { Snackbar } from './atoms';
import { Header } from './pages';

import { hideSnackbar } from '../store/reducers/utils';

import { currentUser } from '../store/reducers/user';

class App extends React.Component {
  componentWillMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { snackbar, children, onSnackbarClose } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Header />
          <div style={{ marginTop: 64 }}>
            {children}
          </div>
          <Snackbar
            open={snackbar.open}
            message={snackbar.message}
            bodyStyle={{
              backgroundColor: snackbar.status === 'error'
                ? '#F44336'
                : 'inherit'
            }}
            autoHideDuration={4000}
            onRequestClose={onSnackbarClose}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  snackbar: state.utils.snackbar
});

const mapDispatchToProps = dispatch => ({
  onSnackbarClose: () => dispatch(hideSnackbar()),
  getCurrentUser: () => dispatch(currentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
