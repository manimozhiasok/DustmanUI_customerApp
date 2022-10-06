import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  InputAdornment,
  makeStyles,
  Tab,
  Tabs,
  TextareaAutosize,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { TextInputComponent } from 'src/components';
import Carousel from 'src/components/Carousel';

const useStyles = makeStyles((theme: Theme) => ({}));

const Waste = ['Newspaper', 'Aluminium', 'Iron'];

function TrashDetails() {
  const classes = useStyles();
  const theme: Theme = useTheme();

  const [categoryList, setCategoryList] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategoryList(event.target.value as string[]);
  };

  const LeftContent = () => {
    return (
      <>
        <TextInputComponent
          inputLabel='Category'
          txtColor={theme.Colors.deepGrey}
          inputWidth={332}
        />
        <TextInputComponent
          inputLabel="Approximate Weight"
          placeholderText="Enter approx. Weight"
          txtColor={theme.Colors.deepGrey}
          inputWidth={332}
          InputProps={{
            endAdornment: <InputAdornment position="start">kg.</InputAdornment>
          }}
        />
        <Typography style={{color: theme.Colors.deepGrey}}>Description (Optional)</Typography>
        <TextareaAutosize
          rows={6}
          cols={35}
          placeholder="Any instructions for our pickup executive"
          style={{
            fontSize: theme.MetricsSizes.small_xxx,
            fontWeight: theme.fontWeight.regular,
            fontFamily: 'DM Sans',
            padding: theme.spacing(1)
          }}
        />
        </>
    );
  };

  const imagesForSlide = [
    {
      id: 2,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4bECuQKN8KRcAYPQwE03Vt5CZBWqPCTr9g&usqp=CAU'
    },

    {
      id: 3,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_cn3Z1iNyocdOSpJ3_tCWyFQ6LZARnznMQ&usqp=CAU'
    },
    {
      id: 3,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
    },
    {
      id: 4,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
    },
    {
      id: 5,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
    },
    {
      id: 6,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
    },
  ];

  type Prop = {
    onClick: (e: any) => void;
    imgUrl: any;
  }
  const Content = ({ imgUrl, onClick }: Prop) => {
    return (
      <div style={{paddingRight: '5px', paddingLeft: '5px'}}>
        <img
          src={imgUrl}
          alt="image not found"
          style={{ borderRadius: '6px', width: '80px', height: '80px' }}
          // onClick={}
        />
      </div>
    );
  };
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <LeftContent />
      </Grid>
      <Grid item xs={6}><iframe></iframe>
        <Carousel  show={3}>
          {imagesForSlide.map((img, index) => {
            return <Content key={index} imgUrl={img.imageUrl} onClick={(e)=>console.log('e con',e)}/>;
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
}

export default TrashDetails;
