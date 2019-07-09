import React, { Component } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import { withStyles } from '@material-ui/core/styles';
import Upload from './components/Upload';
import Viewer from './components/Viewer';
import { Router } from '@reach/router';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
    padding: theme.spacing(8, 0, 6),
  },
});

class App extends Component {
  state = {
    files: [],
  };

  handleChange = files => {
    this.setState({
      files,
    });
  };

  updateRow = (row, index) => {
    const { files } = this.state;
    const newFile = new File([files[index]], row.name);
    files.splice(index, 1, newFile);
    this.setState({
      files,
    });
  };

  removeRow = index => {
    const { files } = this.state;
    files.splice(index, 1);
    this.setState({
      files,
    });
  };

  render() {
    const { classes } = this.props;
    const { files } = this.state;
    return (
      <div className={classes.root}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <ButtonAppBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer}>
            <Router>
              <Upload
                handleChange={this.handleChange}
                updateRow={this.updateRow}
                removeRow={this.removeRow}
                files={files}
                default
              />
              <Viewer files={files} path="/viewer" />
            </Router>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
