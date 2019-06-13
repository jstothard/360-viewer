import React from 'react';
import { Typography, makeStyles, Container, Card, CardHeader, Grid } from '@material-ui/core';
import { Pannellum } from 'pannellum-react';
import PT from 'prop-types';
import Moment from 'react-moment';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

function Viewer(props) {
  const classes = useStyles();
  const { files } = props;
  return (
    <Container fixed>
      <Grid container justify="center" alignItems="center" spacing={3}>
        {files.map(file => (
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                title={file.name}
                subheader={<Moment format="D/M/YYYY">{file.lastModified}</Moment>}
              />
              <Pannellum
                width="100%"
                height="500px"
                image={URL.createObjectURL(file)}
                pitch={10}
                yaw={180}
                hfov={110}
                autoLoad
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Viewer.propTypes = {
  files: PT.arrayOf(PT.object).isRequired
};

export default Viewer;
