import { Grid, IconButton, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './carousel.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme: Theme) => ({
  arrowForward: {
    top: '100%',
    position: 'absolute',
    zIndex: 1,
    transform: 'translateY(50%)',
    right: theme.spacing(2),
    width: '48px',
    height: '48px'
  },
  arrowBack: {
    top: '100%',
    position: 'absolute',
    zIndex: 1,
    transform: 'translateY(50%)',
    right: theme.spacing(7),
    width: '48px',
    height: '48px'
  },
  carouselWrapper: {
    display: 'flex',
    width: '100%',
    position: 'relative'
  },
  carouselContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  carouselContentWrapper: {
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  }
}));

const Carousel = (props) => {
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
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
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
        {currentIndex > 0 && (
          <IconButton onClick={handlePrevClick} className={classes.arrowBack}>
            <ChevronLeftIcon />
          </IconButton>
        )}
        {currentIndex < length - show && (
          <IconButton
            onClick={handleNextClick}
            className={classes.arrowForward}
          >
            <ChevronRightIcon />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default Carousel;
