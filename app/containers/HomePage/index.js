// Plugin needed for Material-UI until the official React version is released
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { connect } from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import Albums from './Albums';
import { selectUsername } from 'interactions/user/selectors';
import Welcome from './Welcome';


class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let children;

    if (this.props.username) {
      children = <Albums />;
    } else {
      children = <Welcome />;
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        {children}
      </MuiThemeProvider>
    );
  }
}

HomePage.propTypes = {
  username: React.PropTypes.string,
};

const mapStateToProps = (state) =>
  ({
    username: selectUsername(state),
  });


export { HomePage };
export default connect(mapStateToProps)(HomePage);
