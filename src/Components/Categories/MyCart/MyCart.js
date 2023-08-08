import { border } from '@mui/system'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';
import "./Style.css"
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#00ffd0',
    color: 'black',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('No Items In Cart')
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 6),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3,6),
  // createData('Eclair', 262, 16.0, 24, 6.0,3),
  // createData('Cupcake', 305, 3.7, 67, 4.3,2),
  // createData('Gingerbread', 356, 16.0, 49, 3.9,1),
];


const MyCart = () => {
  let navigate = useNavigate('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate('/Checkout')
  }
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate('/AllEvents')
  }




  return (
    <>


      <Box sx={{
        backgroundColor: '#111827'
      }}>
        <React.Fragment >
          <CssBaseline sx={{
            backgroundColor: '#111827'
          }} />
          <Container sx={{
          }} fixed maxWidth="ms" >



            <Box sx={{
              bgcolor: '#111827', height: '70vh', width: '50',
              p: 5,
              mx: 5

            }}>
              <Box sx={{
                border: '2px solid #00f9cc',
                borderRadius: '15px',
                // bgcolor: '#111827', height: '70vh', width:'50' ,
                // m:5,
                mx: 5,
                p: "25px 21px 0px 21px"

              }}>
                <Box sx={{
                  borderBottom: '2px solid #ffff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  // mx: 5
                  mb: 5
                  // p:5 
                }}>

                  <h1 style={{
                    color: '#00f9cc',
                  }}> MyCart</h1>

                  <Button
                    onClick={handleNavigate}
                    style={{
                      backgroundColor: '#00f9cc',
                      borderRadius: '35px',
                      height: '50px',

                    }}>
                    Book Events
                  </Button>
                </Box>

                <Box sx={{
                  mb: 5
                }} >
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700, borderWidth: '2px solid #00f9cc' }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Event Name</StyledTableCell>
                          <StyledTableCell align="right">Date of Concerts</StyledTableCell>
                          <StyledTableCell align="right">Price / Seat</StyledTableCell>
                          <StyledTableCell align="right">Quantity</StyledTableCell>
                          <StyledTableCell align="right">Total</StyledTableCell>
                          <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                        <TableRow sx={{
                          backgroundColor: '#00f9cc',
                          // mb:5
                        }}>
                          <TableCell colSpan={5}>Total</TableCell>

                          <TableCell align="right">

                          </TableCell>
                        </TableRow>

                      </TableBody>

                    </Table>

                  </TableContainer>
                  <Box sx={{ textAlign: 'end' }}>
                    <Button onClick={handleSubmit} className='button MuiButtonBase-root' sx={{
                      width: '18%',
                      border: '5px solid #00ffd0 ',
                      borderRadius: '50px',
                      backgroundColor: '#00ffd0',
                      color: 'black',
                      mt: 3,

                    }}>Proceed To Checkout</Button>
                  </Box>
                </Box>




              </Box>




            </Box>


          </Container>
        </React.Fragment>
      </Box>

      {/* <Box sx={{
  m:8,
  height:50,
  width:'80%',
  border:'2px solid #00f9cc'
 }}>

 </Box>
  */}
    </>
  )
}

export default MyCart
