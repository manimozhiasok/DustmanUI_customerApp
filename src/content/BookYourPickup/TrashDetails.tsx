import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { TrashDetailsContent } from './TrashDetailsContent';
import { AddPhotoAlternate } from '@material-ui/icons';
import { ButtonComp } from 'src/components';
import { API_SERVICES } from 'src/Services';
import { HTTP_STATUSES } from 'src/Config/constant';
import CarouselContent from 'src/components/Carousel';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  imageContainer: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'center',
    width: '100%',
    height: '225px',
    fontSize: theme.MetricsSizes.small_xx,
    color: theme.Colors.darkGrey,
    fontWeight: theme.fontWeight.regular
  },
  iconStyle: {
    color: '#828282',
    width: theme.MetricsSizes.large_xx * 2,
    height: theme.MetricsSizes.large_xx * 2
  },
  gridStyle: {
    marginTop: theme.spacing(3.5),
    backgroundColor: theme.Colors.lightBlackGrey,
    padding: theme.spacing(1, 0, 1, 0),
    borderRadius: theme.spacing(1)
  }
}));

type Props = {
  trashData?: any;
  edit?: any;
};

function TrashDetails({ edit, trashData }: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const uploadedImages = edit.getValue('order_images');
  const length = uploadedImages.length;

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
            order_images: [...uploadedImages, ...imageData]
          });
        }
      }
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6}>
        <TrashDetailsContent edit={edit} trashData={trashData} />
      </Grid>
      <Grid item xs={6}>
        <Grid className={classes.gridStyle}>
          <Grid className={classes.imageContainer}>
            <ButtonComp
              iconImage={<AddPhotoAlternate className={classes.iconStyle} />}
              backgroundColor={'transparent'}
              onBrowseButtonClick={onUploadFiles}
              btnWidth={theme.MetricsSizes.large_xxx}
              height={theme.MetricsSizes.xl_large}
              isBrowseButton
            />
            {t('PICKUP.trashPicture')}
          </Grid>
          <CarouselContent data={uploadedImages} show={4} length={length} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TrashDetails;
