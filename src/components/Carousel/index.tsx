import { Grid, IconButton, makeStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import './carousel.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme: Theme) => ({
  arrowForward: {
    right: 0,
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
  iconStyle: {
    color: theme.Colors.primaryGreen
  },
  imageStyle: {
    borderRadius: theme.MetricsSizes.tiny_x,
    width: theme.MetricsSizes.large_xx * 2,
    height: theme.MetricsSizes.large_xx * 2,
    opacity: 1.0,
    cursor: 'pointer'
  },
  gridStyle: {
    paddingLeft: theme.spacing(0.5),
    paddingTop: theme.spacing(0.9)
  },
  carouselStyle: {
    width: '100%',
    height: theme.MetricsSizes.large_xx * 2.1,
    position: 'relative'
  },
  iconGrid: {
    width: '100%',
    display: 'flex',
    // zIndex: 1,
    padding: theme.spacing(0, 1),
    height: '90px',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));

type CarouselProp = {
  children: any;
  show?: any;
  currentIndex?: any;
  length?: any;
};
export const Carousel = (props: CarouselProp) => {
  const { children, show, currentIndex } = props;
  const classes = useStyles();

  return (
    <Grid className={classes.carouselWrapper}>
      <Grid
        style={{
          transform: `translateX(-${currentIndex * (80 / show)}%)`,
          display: 'flex'
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

const CarouselContent = ({ data, show, length, edit }: any) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(edit, '----------edit--------');
  const handleNextClick = () => {
    if (currentIndex < length) {
      if (currentIndex < length - show) {
        setCurrentIndex((prevState) => prevState + 0.5);
      }
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 0.5);
    }
  };

  function handleClick(index, title) {
    console.log(index, '-------index---------');
    console.log('title', title);
    const newArr = data.findIndex((object) => {
      return object.image_url === title.image_url;
    });
    console.log(newArr);
    data.splice(newArr, 1);
    console.log(data);
    // setSelected(index);
    // setTitle(title);
    edit.update({
      order_images: [data]
    });
  }
  return (
    <Grid className={classes.carouselStyle}>
      <Grid className={classes.iconGrid}>
        <IconButton onClick={handlePrevClick} className={classes.arrowBack}>
          <ArrowBackIcon fontSize={'small'} className={classes.iconStyle} />
        </IconButton>
        <IconButton onClick={handleNextClick} className={classes.arrowForward}>
          <ArrowForwardIcon fontSize={'small'} className={classes.iconStyle} />
        </IconButton>
      </Grid>
      <Carousel show={show} currentIndex={currentIndex} length={length}>
        {data.map((item: { image_url: string }, index: React.Key) => {
          return (
            <Grid key={index} className={classes.gridStyle}>
              <div onClick={() => handleClick(index, item?.image_url)}>
                <img
                  src={item?.image_url}
                  // alt="image not found"
                  className={classes.imageStyle}
                />
              </div>
            </Grid>
          );
        })}
      </Carousel>
    </Grid>
  );
};

export default CarouselContent;
