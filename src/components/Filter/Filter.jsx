import React from 'react';
import { TextField } from '@mui/material';

function Filter({ onChange, value }) {
  return (
    <TextField
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 20,
      }}
      size="small"
      type="text"
      onChange={onChange}
      value={value}
    />
  );
}

export default Filter;
