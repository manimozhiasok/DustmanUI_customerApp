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
import { AddPhotoAlternate } from '@material-ui/icons/';
import PhotoAlternateLogo from 'src/Assets/Images/photoAlternate.png';

const useStyles = makeStyles((theme: Theme) => ({
  textStyle: {
    color: theme.Colors.deepGrey,
    fontWeight: 400,
    fontSize: '16px'
  },
  optionStyle: {
    color: '#11294C',
    fontSize: '12px'
  },
  textAreaStyle: {
    fontSize: theme.MetricsSizes.small_xxx,
    fontWeight: theme.fontWeight.regular,
    padding: theme.spacing(1),
    color: theme.Colors.secondaryBlack,
    borderColor: theme.Colors.lightWhiteGrey,
    backgroundColor: theme.Colors.lightWhiteGrey
  },
  imageContainer: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    width: '100%',
    height: '185px',
    fontSize: theme.MetricsSizes.small_xx,
    color: theme.Colors.darkGrey,
    fontWeight: theme.fontWeight.regular
  }
}));

function TrashDetails() {
  const classes = useStyles();
  const theme = useTheme();
  const [photo, setPhoto] = useState(PhotoAlternateLogo);
  const [text, setText] = useState('Choose your trash pictures');

  const LeftContent = () => {
    return (
      <>
        <TextInputComponent
          inputLabel="Category"
          labelColor={theme.Colors.deepGrey}
          txtColor={theme.Colors.secondaryBlack}
          backgroundColor={theme.Colors.lightWhiteGrey}
          //inputWidth={332}
          placeholderText="Newspaper, Aluminium, Copper"
          borderColor={theme.Colors.lightWhiteGrey}
          inputHeight={theme.MetricsSizes.large_xxx}
        />
        <TextInputComponent
          inputLabel="Approximate Weight"
          placeholderText="Enter approx. Weight"
          labelColor={theme.Colors.deepGrey}
          txtColor={theme.Colors.secondaryBlack}
          backgroundColor={theme.Colors.lightWhiteGrey}
          borderColor={theme.Colors.lightWhiteGrey}
          inputHeight={theme.MetricsSizes.large_xxx}
          InputProps={{
            endAdornment: <InputAdornment position="start">kg.</InputAdornment>,
            style: {
              backgroundColor: theme.Colors.lightWhiteGrey
            }
          }}
        />
        <Typography className={classes.textStyle}>
          Description <label className={classes.optionStyle}>(Optional)</label>
        </Typography>
        <TextareaAutosize
          minRows={5}
          cols={28}
          placeholder="Any instructions for our pickup executive"
          className={classes.textAreaStyle}
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
    }
  ];

  type Prop = {
    //onClick: (e: any) => void;
    imgUrl: any;
    key: number;
  };
  const handleClickImage = (e) => {
    console.log('event', e.target.src);
    setPhoto(e.target.src);
    setText('');
    console.log('text',text);
    
    
  };
  const Content = ({ imgUrl, key }: Prop) => {
    return (
      <>
        <div style={{ paddingRight: '5px' }}>
          <img
            src={imgUrl}
            alt="image not found"
            key={key}
            style={{ borderRadius: '6px', width: '80px', height: '80px' }}
            onClick={handleClickImage}
          />
        </div>
      </>
    );
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={5}>
        <LeftContent />
      </Grid>
      <Grid item xs={5}>
        <div
          style={{
            backgroundColor: theme.Colors.lightWhiteGrey,
            padding: '3%',
            borderRadius: '8px'
          }}
        >
          <div
            className={classes.imageContainer}
            // style={{
            //   justifyContent: 'center',
            //   display: 'flex',
            //   flexDirection: 'column',
            //   gap: '10px',
            //   alignItems: 'center',
            //   width: '100%',
            //   height: '185px'
            // }}
          >
            <img src={photo}></img>
            {text}
          </div>
          <Carousel show={3}>
            {imagesForSlide.map((img, index) => {
              return <Content key={index} imgUrl={img.imageUrl} />;
            })}
          </Carousel>
        </div>
      </Grid>
    </Grid>
  );
}

export default TrashDetails;
