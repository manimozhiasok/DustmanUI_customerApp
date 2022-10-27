import React from 'react';
import { useTheme } from '@material-ui/styles';
import { Grid, Typography, makeStyles, Theme, Button } from '@material-ui/core';
import { API_SERVICES } from 'src/Services';
import { HTTP_STATUSES } from 'src/Config/constant';
type Props = {
  profileIcon?: string;
  userName?: string;
  userEmail?: string;
  displayIcon?: any;
};

const useStyles = makeStyles<Theme, Props>((theme) => {
  return {
    subText: {
      padding: theme.spacing(1.5, 0),
      color: theme.Colors.mediumGrey,
      fontWeight: theme.fontWeight.bold,
      fontSize: '17px'
    },
    userDetails: {
      fontWeight: theme.fontWeight.regular,
      fontSize: ' 11px',
      lineHeight: '0px'
    },
    container: {
      padding: theme.spacing(0, 1)
    },
    mainContainer: {
      display: 'flex'
      // paddingLeft: theme.MetricsSizes.small_x
    }
  };
});

const AccordionIcon = ({
  profileIcon,
  userName,
  userEmail,
  displayIcon
}: Props) => {
  const classes = useStyles({});
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
          // edit.update({
          //   order_images: [...uploadedImages, ...imageData]
          // });
        }
      }
    }
  };
  return (
    <Grid direction="row" className={classes.mainContainer}>
      <Button
        className={classes.container}
        component="label"
        // variant={variant}
        // onClick={onClickButton}
        // endIcon={iconImage}
      >
        <input
          type="file"
          accept="image/jpg,image/jpeg"
          hidden
          multiple
          onChange={onUploadFiles}
        />
        <img src={profileIcon || displayIcon} alt={'image'} />
      </Button>
      <Grid className={classes.container}>
        <Typography className={classes.subText}>{userName}</Typography>
        <Typography className={classes.userDetails}>{userEmail}</Typography>
      </Grid>
    </Grid>
  );
};
export default AccordionIcon;
