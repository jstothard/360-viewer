import React from 'react';
import PT from 'prop-types';
import { Typography, makeStyles, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link } from '@reach/router';
import Dropzone from './Dropzone';
import UploadTable from './UploadTable';

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

const ViewerLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/viewer" {...props} />
));

function Upload(props) {
  const classes = useStyles();
  const { handleChange, updateRow, removeRow, files } = props;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h6" color="inherit">
        Upload Media
      </Typography>
      <Dropzone handleChange={handleChange} />
      <UploadTable files={files} updateRow={updateRow} removeRow={removeRow} />
      <Button variant="contained" color="primary" className={classes.button} component={ViewerLink}>
        Upload
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
    </Container>
  );
}

Upload.propTypes = {
  handleChange: PT.func.isRequired,
  updateRow: PT.func.isRequired,
  removeRow: PT.func.isRequired,
  files: PT.arrayOf(PT.object).isRequired
};

export default Upload;
