import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Dashboard = () => {
    const [rows,setRows]=useState([])
  useEffect(()=>{axios.get('https://fakestoreapi.com/products').then((res)=>{
    setRows(res.data)
  })},[])
  return (
    <>
       
    <div>
        {rows && rows.map((row)=>(
            
         <Card style={{display:'grid',gridAutoFlow:'row',backmarginTop:'5%',width:'30%',marginLeft:'35%',marginTop:'20px',backgroundColor:'beige',border:'5px',borderColor:'violet',borderRadius:'5',
         }} sx={{ minWidth: 275 }} >
      <CardContent>

        <Typography sx={{fontSize:20}} textAlign={'left'}>
          <h5 style={{display:'inline'}}>Product Name: </h5>{row.title}
        </Typography>
        
        <Typography sx={{fontSize:20}} textAlign={'left'}>
          <h5 style={{display:'inline'}}>Description:</h5>{row.description}
        </Typography>
       <Typography variant="h5" sx={{fontSize:20}} textAlign={'left'}>
         <h5 style={{display:'inline'}}> Price:</h5>{row.price}
        </Typography>
  
        <Typography variant="h5" sx={{fontSize:20}} textAlign={'left'}>
         <h5 style={{display:'inline'}}> Category:</h5>{row.category}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button style={{color:'violet'}} size="small" >Learn More</Button>
      </CardActions>
    </Card>
    
))
    }</div>
    </>
  )
}

export default Dashboard