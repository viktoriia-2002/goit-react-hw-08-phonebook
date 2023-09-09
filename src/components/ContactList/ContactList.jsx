// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import { TableRow, Button } from '@mui/material';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// const ContactList = ({ contacts, handleDelete }) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 300 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Name</StyledTableCell>
//             <StyledTableCell align="right">Number</StyledTableCell>
//             <StyledTableCell align="right"></StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {contacts.map(({ name, number, id }) => (
//             <StyledTableRow key={id}>
//               <StyledTableCell component="th" scope="row">
//                 {name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{number}</StyledTableCell>
//               <StyledTableCell align="right">
//                 <Button
//                   onClick={() => handleDelete(id)}
//                   variant="outlined"
//                   color="error"
//                 >
//                   Delete
//                 </Button>
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default ContactList;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { TableRow, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { MuiTelInput } from 'mui-tel-input';

const TelCountry = () => {
  const [value, setValue] = React.useState('');

  const handleChange = newValue => {
    setValue(newValue);
  };
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1976d2',
    color: 'white',
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  color: 'white',
}));

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Number</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map(({ name, number, id }) => (
            <StyledTableRow key={id}>
              <StyledTableCell component="th" scope="row">
                {name}
              </StyledTableCell>
              <StyledTableCell align="right">{number}</StyledTableCell>
              <StyledTableCell align="right">
                <StyledButton
                  onClick={() => handleDelete(id)}
                  variant="outlined"
                  // color="error"
                >
                  Delete
                </StyledButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;
