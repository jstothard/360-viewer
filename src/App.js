import React, { Component } from "react";
import ButtonAppBar from "./components/ButtonAppBar";
import { withStyles } from "@material-ui/core/styles";
import Upload from "./components/Upload";

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
    return (
      <div className={classes.root}>
        <ButtonAppBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer}>
            <Upload handleChange={this.handleChange} />
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
