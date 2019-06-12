import React from 'react';
import { Typography, makeStyles, Container } from '@material-ui/core';
// import { Pannellum } from "pannellum-react";
import PT from 'prop-types';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

function Viewer(props) {
  const classes = useStyles();
  const { files } = props;

  return (
    <div>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h6" color="inherit">
                This is the viewer
        </Typography>
        {
          files.map(file => <img src={URL.createObjectURL(file)} alt="Logo" />)
        }
      </Container>
    </div>
  );
}

Viewer.propTypes = {
  files: PT.arrayOf(PT.object).isRequired,
};

export default Viewer;
