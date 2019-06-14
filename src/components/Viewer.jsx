import React, { Component } from 'react';
import { Container, Card, CardHeader, Grid, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Pannellum } from 'pannellum-react';
import PT from 'prop-types';
import Moment from 'react-moment';
import CameraAlt from '@material-ui/icons/CameraAlt';

const styles = theme => ({
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
});

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  state = {
    viewer: null,
    ref: null
  };

  savePanoImage() {
    const viewer = this.ref.current.getViewer();
    const img = viewer
      .getRenderer()
      .render(
        (viewer.getPitch() / 180) * Math.PI,
        (viewer.getYaw() / 180) * Math.PI,
        (viewer.getHfov() / 180) * Math.PI,
        { returnImage: true }
      );
    const link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    link.href = img;
    link.click();
  }

  render() {
    const { classes, files } = this.props;
    return (
      <Container fixed>
        <Grid container justify="center" alignItems="center" spacing={3}>
          {files.map(file => (
            <Grid item xs={12} key={URL.createObjectURL(file)}>
              <Card className={classes.card}>
                <CardHeader
                  title={file.name}
                  subheader={<Moment format="D/M/YYYY">{file.lastModified}</Moment>}
                  action={
                    <IconButton
                      aria-label="snapshot"
                      onClick={() => console.log(this.savePanoImage())}
                    >
                      <CameraAlt />
                    </IconButton>
                  }
                />
                <Pannellum
                  ref={this.ref}
                  width="100%"
                  height="500px"
                  image={URL.createObjectURL(file)}
                  pitch={10}
                  yaw={180}
                  hfov={110}
                  compass
                  autoLoad
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

Viewer.propTypes = {
  files: PT.arrayOf(PT.object).isRequired
};

export default withStyles(styles)(Viewer);
