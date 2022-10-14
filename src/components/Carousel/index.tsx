import { Grid, IconButton, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './carousel.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme: Theme) => ({
  arrowForward: {
    top: '50%',
    position: 'absolute',
    zIndex: 1,
    transform: 'translateY(-50%)',
    right: theme.spacing(0.5),
    width: theme.MetricsSizes.regular_xxx,
    height: theme.MetricsSizes.regular_xxx,
    background: theme.Colors.whiteLightGrey,
    opacity: '0.3',
    boxShadow: '1.09091px 2.18182px 4.36364px rgba(28, 28, 30, 0.06)',
    '&:hover': {
      backgroundColor: theme.Colors.whiteLightGrey
    }
  },
  arrowBack: {
    top: '50%',
    position: 'absolute',
    zIndex: 1,
    left: theme.spacing(0.5),
    transform: 'translateY(-50%)',
    background: theme.Colors.whiteLightGrey,
    opacity: '0.3',
    boxShadow: '1.09091px 2.18182px 4.36364px rgba(28, 28, 30, 0.06)',
    width: theme.MetricsSizes.regular_xxx,
    height: theme.MetricsSizes.regular_xxx,
    '&:hover': {
      backgroundColor: theme.Colors.whiteLightGrey
    }
  },
  carouselWrapper: {
    display: 'flex',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  carouselContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // overflowX: 'scroll'
  },
  carouselContentWrapper: {
    // width: '100%',
    // height: '100%'
    // overflowX: 'scroll'
  },
  iconStyle: {
    color: theme.Colors.primaryGreen,
    transform: 'matrix(1, 0, 0, 1, 0, 0)'
  }
}));

type CarouselProp = {
  children: any;
  show: any;
};
const Carousel = (props: CarouselProp) => {
  const classes = useStyles();
  const { children, show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const handleNextClick = () => {
    console.log('handleNextClick');
    if (currentIndex < length) {
      if(currentIndex < length - show){
      setCurrentIndex((prevState) => prevState + 0.5);
    }}
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 0.5);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNextClick();
    }

    if (diff < -5) {
      handlePrevClick();
    }

    setTouchPosition(null);
  };

  return (
    <Grid className={classes.carouselContainer}>
      <Grid className={classes.carouselWrapper}>
        <Grid
          className={classes.carouselContentWrapper}
          // onTouchStart={handleTouchStart}
          // onTouchMove={handleTouchMove}
        >
          <Grid
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`
            }}
          >
            {children}
          </Grid>
        </Grid>
        <IconButton onClick={handlePrevClick} className={classes.arrowBack}>
          <ArrowBackIcon fontSize={'small'} className={classes.iconStyle} />
        </IconButton>
        <IconButton
          disabled={length < show ? true : false}
          onClick={handleNextClick}
          className={classes.arrowForward}
        >
          <ArrowForwardIcon fontSize={'small'} className={classes.iconStyle} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Carousel;
