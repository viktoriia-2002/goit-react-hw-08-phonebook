// import React from 'react';
// import { TextField } from '@mui/material';

// function Filter({ onChange, value }) {
//   return (
//     <TextField
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         marginLeft: 20,
//       }}
//       size="small"
//       type="text"
//       onChange={onChange}
//       value={value}
//     />
//   );
// }

// export default Filter;
import React from 'react';
import { TextField } from '@mui/material';
import styles from './Filter.module.css';

function Filter({ onChange, value }) {
  return (
    <TextField
      className={styles.filter}
      size="small"
      type="text"
      onChange={onChange}
      value={value}
    />
  );
}

export default Filter;
