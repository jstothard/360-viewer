import React from 'react';
import MaterialTable from 'material-table';
import PT from 'prop-types';

export default function UploadTable(props) {
  const { files } = props;
  const data = files.map((file, index) => ({
    number: index,
    name: file.name,
    date: file.lastModifiedDate
  }));
}

UploadTable.propTypes = {};
