import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, Tab, Tabs, Theme, useTheme, Checkbox } from '@material-ui/core';
import {General, Paper, Carton, Cart, Ewaste, All, Cover, Iron, Plastic, Aluminium, Wood } from 'src/Assets/Images';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
  eachItem:{
    height: '220px',
    padding: theme.spacing(1, 4, 7, 4),
  },
  container:{
    height: '500px',
    overflowY: 'scroll',
  },
  image:{
      position:'absolute',
  },
  checkbox:{
    zIndex: 9,
    left:'80px',
    top:'-20px',
    // background: 'green',
    
  },
  description:{
    // border: '1px solid blue',
    // marginTop:theme.spacing(5),
    paddingTop:theme.spacing(7),
    // textAlign:'center'

  },
  checkBoxContainer:{
    // padding: theme.spacing(5, 5),
    position:'relative', 
  }
}));
function ChooseCategoryComponent() {

  const data = [
    {
      id:'1',
      img: General,
      description:'General Waste'
    },
    {
      id:'2',
      img: Paper,
      description:'Paper'
    },
    {
      id:'3',
      img: Carton,
      description:'Carton Box'
    },
    {
      id:'4',
      img: Ewaste,
      description:'E-Waste'
    },
    {
      id:'5',
      img: Cover,
      description:'Packing Covers'
    },
    {
      id:'6',
      img: General,
      description:'General Waste'
    },
    {
      id:'7',
      img: Iron,
      description:'Iron'
    },
    {
      id:'8',
      img: Aluminium,
      description:'Aluminium'
    },
    {
      id:'9',
      img: General,
      description:'General Waste'
    },
    {
      id:'10',
      img: Paper,
      description:'Paper Waste'
    },
    {
      id:'11',
      img: Carton,
      description:'Carton Waste'
    },
    // {
    //   id:'12',
    //   img: General,
    //   description:'General Waste'
    // },
    // {
    //   id:'13',
    //   img: Paper,
    //   description:'Paper Waste'
    // },
    // {
    //   id:'14',
    //   img: Carton,
    //   description:'Carton Waste'
    // },
  ]

  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();
  const theme = useTheme();

  return (
   
      <Grid container className={classes.container}>
        {
          data.map((item, index)=>{
            return(
              <>
            <Grid container xs={3} key={index} className={classes.eachItem}>
              <Grid item xs={12}>
                  <div className={classes.checkBoxContainer}>
                    <img src={item.img} alt="Images" className={classes.image}/>
                     <Checkbox checked={false} onChange={handleChange} className={classes.checkbox}/>
                  </div>
                  </Grid>
                  <Grid item xs={12}>
                  <div className={classes.description}>{item.description}</div>
                  </Grid> 
            </Grid>
            </>
            );
          })
        }
    </Grid>
  );
}

export default ChooseCategoryComponent;
