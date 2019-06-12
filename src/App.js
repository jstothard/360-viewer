import React, { Component } from "react";
import ButtonAppBar from "./components/ButtonAppBar";
import { withStyles } from "@material-ui/core/styles";
import Upload from "./components/Upload";
import Viewer from "./components/Viewer";
import { Router } from "@reach/router"


const styles = theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    padding: theme.spacing(8, 0, 6)
  }
});

class App extends Component {
  state = {
    files: []
  };

  handleChange = files => {
    this.setState({
      files
    });
  };

  render() {
    const { classes } = this.props;
    const { files } = this.state;
    return (
      <div className={classes.root}>
        <ButtonAppBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer}>
          <Router>
          <Upload handleChange={this.handleChange} default />
          <Viewer files={files} path='/viewer'/>
            </Router>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
