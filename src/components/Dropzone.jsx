import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import PT from 'prop-types';
import { Card, CardHeader, makeStyles } from '@material-ui/core';
import '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  paragraph: {
    ...theme.typography.body1
  }
}));

function Dropzone(props) {
  const { handleChange } = props;
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title="Upload Media" />
      <DropzoneArea
        onChange={handleChange}
        acceptedFiles={['image/jpeg', 'image/jpg', 'image/png', 'image/bmp']}
        showPreviews
        showPreviewsInDropzone={false}
        maxFileSize={100000000}
        dropzoneParagraphClass={classes.paragraph}
        filesLimit={10}
      />
    </Card>
  );
}

export default Dropzone;

Dropzone.propTypes = {
  handleChange: PT.func.isRequired
};
