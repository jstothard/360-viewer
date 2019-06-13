import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import PT from 'prop-types';

function Dropzone(props) {
  const { handleChange } = props;
  return (
    <DropzoneArea
      onChange={handleChange}
      acceptedFiles={['image/jpeg', 'image/jpg', 'image/png', 'image/bmp']}
      showPreviews
      showPreviewsInDropzone={false}
      maxFileSize={100000000}
      filesLimit={10}
    />
  );
}

export default Dropzone;

Dropzone.propTypes = {
  handleChange: PT.func.isRequired
};
