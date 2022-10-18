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
import { API_SERVICES } from 'src/Services';
import { HTTP_STATUSES } from 'src/Config/constant';

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

type Props = {
  trashData?: any;
  edit?: any;
};

function TrashDetails({ edit, trashData }: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const [visible, setVisible] = useState(true);

  const onUploadFiles = async (event: any) => {
    let formData = new FormData();
    let selectedImages = event.target.files;
    for (let key in selectedImages) {
      formData.append('file', selectedImages[key]);
    }
    const uploadImageRes: any =
      await API_SERVICES.imageUploadService.uploadImage(formData);
    if (uploadImageRes?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (uploadImageRes?.data?.images.length) {
        let imageData = [];
        uploadImageRes?.data?.images.map((item) => {
          imageData.push({ image_url: item.Location });
        });
        if (imageData?.length) {
          edit.update({
            order_images: [...edit.edits.order_images, ...imageData]
          });
        }
      }
    }
  };

  // useEffect(())
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6}>
        <LeftContent edit={edit} trashData={trashData} />
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
            {'Choose your trash pictures'}
          </Grid>
          <Carousel show={4}>
            {edit.getValue('order_images').map((item, index) => {
              return <Content key={index} imgUrl={item?.image_url} />;
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
