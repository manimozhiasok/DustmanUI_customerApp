import React, { useEffect, useState } from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core';
import Carousel from 'src/components/Carousel';
import PhotoAlternateLogo from 'src/Assets/Images/photoAlternate.png';
import { Content, imagesForSlide, LeftContent } from './TrashDetailsContent';

const useStyles = makeStyles((theme: Theme) => ({
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

  const handleClickImage = (e) => {
    console.log('event', e.target.src);
    setPhoto(e.target.src);
    setText('');
    console.log('text',text);
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
            className={classes.imageContainer}>
            <img src={photo}></img>
            {text}
          </div>
          <Carousel show={3}>
            {imagesForSlide.map((img, index) => {
              return <Content key={index} imgUrl={img.imageUrl} handleClickImage={handleClickImage} />;
            })}
          </Carousel>
        </div>
      </Grid>
    </Grid>
  );
}

export default TrashDetails;
