import React from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { AddPhotoAlternate } from '@material-ui/icons';
import { ButtonComp } from 'src/components';
import CarouselContent from 'src/components/Carousel';
import { useTranslation } from 'react-i18next';
import { TrashDetailsContent } from './TrashDetailContent';

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
    color: theme.Colors.silverBlack,
    width: theme.MetricsSizes.large_xx * 2,
    height: theme.MetricsSizes.large_xx * 2
  },
  gridStyle: {
    marginTop: theme.spacing(3.5),
    backgroundColor: theme.Colors.lightGreyBlack,
    padding: theme.spacing(1, 0, 1, 0),
    borderRadius: theme.spacing(1)
  }
}));

type Props = {
  trashData?: any;
  edit?: any;
  onUploadFiles?: any;
  uploadedImages?: any;
};

function TrashDetailsComponent({
  edit,
  trashData,
  onUploadFiles,
  uploadedImages
}: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const length = uploadedImages.length;

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

export default TrashDetailsComponent;
