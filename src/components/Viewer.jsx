import React, { Component } from 'react';
import { Container, Card, CardHeader, Grid, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Pannellum } from 'pannellum-react';
import PT from 'prop-types';
import Moment from 'react-moment';
import CameraAlt from '@material-ui/icons/CameraAlt';
import { saveAs } from 'file-saver';

const styles = theme => ({
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
});

class Viewer extends Component {
  constructor(props) {
    const { files } = props;
    super(props);
    this.references = Array(files.length)
      .fill(0)
      .map(() => React.createRef());
  }

  savePanoImage = (name, ref) => {
    const viewer = ref.current.getViewer();
    const img = viewer
      .getRenderer()
      .render(
        (viewer.getPitch() / 180) * Math.PI,
        (viewer.getYaw() / 180) * Math.PI,
        (viewer.getHfov() / 180) * Math.PI,
        { returnImage: true },
      );
    saveAs(img, name);
  };

  render() {
    const { classes, files } = this.props;
    return (
      <Container fixed>
        <Grid container justify="center" alignItems="center" spacing={3}>
          {files.map((file, index) => (
            <Grid item xs={12} key={URL.createObjectURL(file)}>
              <Card className={classes.card}>
                <CardHeader
                  title={file.name}
                  subheader={<Moment format="D/M/YYYY">{file.lastModified}</Moment>}
                  action={
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    <IconButton
                      aria-label="snapshot"
                      onClick={() => this.savePanoImage(file.name, this.references[index])}
                    >
                      <CameraAlt />
                    </IconButton>
                  }
                />
                <Pannellum
                  ref={this.references[index]}
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
  files: PT.arrayOf(PT.object).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PT.object.isRequired,
};

export default withStyles(styles)(Viewer);
