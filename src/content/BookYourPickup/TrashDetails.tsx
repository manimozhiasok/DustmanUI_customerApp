import React, { useEffect, useState } from 'react';
import {
  Grid,
  IconButton,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core';
import Carousel from 'src/components/Carousel';
import { Content, LeftContent } from './TrashDetailsContent';
import { AddPhotoAlternate } from '@material-ui/icons';
import { ButtonComp } from 'src/components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme: Theme) => ({
  imageContainer: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'center',
    width: '100%',
    height: '185px',
    fontSize: theme.MetricsSizes.small_xx,
    color: theme.Colors.darkGrey,
    fontWeight: theme.fontWeight.regular
  },
  iconStyle: {
    color: '#828282',
    width: '80px',
    height: '80px'
  },
  gridStyle: {
    marginTop: theme.spacing(2.8),
    backgroundColor: theme.Colors.lightBlackGrey,
    padding: theme.spacing(1, 0, 1, 1),
    borderRadius: theme.spacing(1),
    height: '290px'
  },
  visibleStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(3)
  },
  arrowIcon: {
    color: '#6BB043',
    transform: 'matrix(1, 0, 0, 1, 0, 0)'
  },
  arrowBack: {
    width: theme.MetricsSizes.regular_xxx,
    height: theme.MetricsSizes.regular_xxx,
    background: theme.Colors.whiteLightGrey,
    opacity: '0.3',
    '&:hover': {
      backgroundColor: theme.Colors.whiteLightGrey
    }
  },
  arrowForward: {
    width: theme.MetricsSizes.regular_xxx,
    height: theme.MetricsSizes.regular_xxx,
    background: theme.Colors.whiteLightGrey,
    right: theme.spacing(0.4),
    opacity: '0.3',
    '&:hover': {
      backgroundColor: theme.Colors.whiteLightGrey
    }
  }
}));

function TrashDetails({ edit }) {
  const classes = useStyles();
  const theme = useTheme();
  const [text, setText] = useState('Choose your trash pictures');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [visible, setVisible] = useState(true);

  const onUploadFiles = (e) => {
    let selectedFile: any = URL.createObjectURL(e.target.files[0]);
    console.log('selectedFile from upload list', e.target.files);
    console.log('selectedFile from upload list next', e.target.files[0].name);
    console.log('selectedFile from upload list next id', e.target.files.length);
    if (selectedFiles.find((val) => val === selectedFile)) {
      console.log('Duplicate value');
      selectedFiles.splice(selectedFile);
    } else {
      selectedFiles.push(selectedFile);
    }
    edit.update({ order_images: selectedFiles });
    setVisible(false);
  };

  // useEffect(())
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6}>
        <LeftContent edit={edit} />
      </Grid>
      <Grid item xs={6}>
        <Grid className={classes.gridStyle}>
          <Grid className={classes.imageContainer}>
            <ButtonComp
              iconImage={<AddPhotoAlternate className={classes.iconStyle} />}
              backgroundColor={'transparent'}
              onBrowseButtonClick={onUploadFiles}
              isBrowseButton
            />
            {text}
          </Grid>
          <Carousel show={4}>
            {edit.edits.order_images.map((img,index) => {
              return (
                <Content
                  key={index}
                  imgUrl={img}
                  handleClickImage={(e) => console.log('hi')}
                />
              );
            })}
          </Carousel>
          {visible && (
            <Grid className={classes.visibleStyle}>
              <IconButton
                onClick={(e) => console.log(e)}
                className={classes.arrowBack}
              >
                <ArrowBackIcon
                  fontSize={'small'}
                  className={classes.arrowIcon}
                />
              </IconButton>
              <IconButton
                onClick={(e) => console.log(e)}
                className={classes.arrowForward}
              >
                <ArrowForwardIcon
                  fontSize={'small'}
                  className={classes.arrowIcon}
                />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TrashDetails;
