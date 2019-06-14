import React from 'react';
import MaterialTable from 'material-table';
import PT from 'prop-types';

export default function UploadTable(props) {
  const { files, updateRow, removeRow } = props;
  const columns = [
    { title: '#', field: 'number', type: 'numeric', editable: 'never' },
    { title: 'Name', field: 'name' },
    { title: 'Date', field: 'date', type: 'date', editable: 'never' }
  ];
  const data = files.map((file, index) => ({
    number: index + 1,
    name: file.name,
    date: file.lastModifiedDate
  }));

  return (
    <div>
      <MaterialTable
        title="Processed files"
        columns={columns}
        data={data}
        options={{ search: false }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                updateRow(newData, data.indexOf(oldData));
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                removeRow(data.indexOf(oldData));
              }, 600);
            })
        }}
      />
    </div>
  );
}

UploadTable.propTypes = {
  updateRow: PT.func.isRequired,
  removeRow: PT.func.isRequired,
  files: PT.arrayOf(PT.object).isRequired
};
