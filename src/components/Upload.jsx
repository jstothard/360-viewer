import React from "react";
import PT from "prop-types";
import { Typography, makeStyles, Container } from "@material-ui/core";
import Dropzone from "./Dropzone";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

function Upload(props) {
  const classes = useStyles();
  const { handleChange } = props;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h6" color="inherit">
        Upload Media
      </Typography>
      <Dropzone handleChange={handleChange.bind(this)} />
    </Container>
  );
}

Upload.propTypes = {
  handleChange: PT.func
};

export default Upload;
