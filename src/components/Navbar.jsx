import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} > 
    <AppBar position="static" color='secondary'>
      <Toolbar>
    
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={'left'} fontFamily={'revert-layer'}>
          Product App
        </Typography>

        <Link to ={'/home'}>
        <Button style={{color:'white'}}>VIEWPRODUCTS</Button></Link>
        <Link to ={'/'}>
        <Button style={{color:'white'}}>ADDPRODUCTS</Button></Link>
       
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar