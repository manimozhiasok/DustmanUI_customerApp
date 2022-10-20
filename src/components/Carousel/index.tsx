import {
  Grid,
  IconButton,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './carousel.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme: Theme) => ({
  arrowForward: {
    top: '78.5%',
    position: 'absolute',
    zIndex: 1,
    transform: 'translateY(-50%)',
    right: theme.spacing(7.3),
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
    top: '78.5%',
    position: 'absolute',
    zIndex: 1,
    left: theme.spacing(49.5),
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
  arrowBackContent: {
    top: '78.5%',
    position: 'absolute',
    left: 395,
    background: theme.Colors.whiteLightGrey,
    opacity: '0.3',
    boxShadow: '1.09091px 2.18182px 4.36364px rgba(28, 28, 30, 0.06)',
    width: theme.MetricsSizes.regular_xxx,
    height: theme.MetricsSizes.regular_xxx,
    '&:hover': {
      backgroundColor: theme.Colors.whiteLightGrey
    }
  },
  arrowForwardContant: {
    top: '81.3%',
    position: 'absolute',
    right: '56px',
    transform: 'translateY(-50%)',
    width: theme.MetricsSizes.regular_xxx,
    height: theme.MetricsSizes.regular_xxx,
    background: theme.Colors.whiteLightGrey,
    opacity: '0.3',
    boxShadow: '1.09091px 2.18182px 4.36364px rgba(28, 28, 30, 0.06)',
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
  currentIndex?: any;
};
export const Carousel = (props: CarouselProp) => {
  const { children, show, currentIndex } = props;
  const classes = useStyles();
  
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
  const theme = useTheme();
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

const CarouselContent = ({ data, show, length }: any) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex < length) {
      if (currentIndex < length-show) {
        setCurrentIndex((prevState) => prevState + 0.5);
      }
      if (length === show) {
        setCurrentIndex(0.5);
      }
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 0.5);
    }
  };

  return (
    <Grid>
      <Carousel show={show} currentIndex={currentIndex}>
        {data.map((item, index) => {
          return <Content imgUrl={item.image_url} key={index} />;
        })}
      </Carousel>
      <IconButton
        onClick={handlePrevClick}
        className={classes.arrowBack}
      >
        <ArrowBackIcon fontSize={'small'} className={classes.iconStyle} />
      </IconButton>
      <IconButton
        onClick={handleNextClick}
        className={classes.arrowForward}
      >
        <ArrowForwardIcon fontSize={'small'} className={classes.iconStyle} />
      </IconButton>
    </Grid>
  );
};

export default CarouselContent;
