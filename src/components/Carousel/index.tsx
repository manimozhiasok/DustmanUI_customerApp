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
    flexDirection: 'column'
  },
  iconStyle: {
    color: theme.Colors.primaryGreen,
    transform: 'matrix(1, 0, 0, 1, 0, 0)'
  },
  imageStyle: {
    borderRadius: '6px',
    width: '80px',
    height: '80px',
    opacity: 1.0
  },
  gridStyle: {
    paddingRight: theme.spacing(0.5)
  }
}));

type CarouselProp = {
  children: any;
  show?: any;
};
export const Carousel = (props: CarouselProp) => {
  const classes = useStyles();
  const { children, show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const handleNextClick = () => {
    console.log('handleNextClick');
    if (currentIndex < length) {
      if (currentIndex < 2) {
        setCurrentIndex((prevState) => prevState + 0.5);
      }
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 0.5);
    }
  };

  return (
    <Grid className={classes.carouselContainer}>
      <Grid className={classes.carouselWrapper}>
        <Grid
          className={`carousel-content show-${show}`}
          style={{
            transform: `translateX(-${currentIndex * (100 / show)}%)`
          }}
        >
          {children}
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

type Prop = {
  imgUrl: any;
  key: number;
};

export const Content = ({ imgUrl, key }: Prop) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.gridStyle}>
        <img
          src={imgUrl}
          alt="image not found"
          key={key}
          className={classes.imageStyle}
        />
      </Grid>
    </>
  );
};

const CarouselContent = ({ data }: any) => {
  const classes = useStyles();
  return (
    <>
      <Carousel show={4}>
        {data.map((item, index) => {
          return <Content imgUrl={item.image_url} key={index} />;
        })}
      </Carousel>
    </>
  );
};

export default CarouselContent;
