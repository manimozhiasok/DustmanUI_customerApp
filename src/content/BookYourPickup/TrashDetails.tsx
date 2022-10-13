import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import Carousel from 'src/components/Carousel';
import { Content, LeftContent } from './TrashDetailsContent';
import { AddPhotoAlternate } from '@material-ui/icons';
import { ButtonComp } from 'src/components';

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
    marginTop: theme.spacing(2.5),
    backgroundColor: theme.Colors.lightWhiteGrey,
    padding: theme.spacing(1, 0, 1, 1),
    borderRadius: theme.spacing(1)
  }
}));

function TrashDetails({ edit }) {
  const classes = useStyles();
  const theme = useTheme();
  const [text, setText] = useState('Choose your trash pictures');
  const [selectedFiles, setSelectedFiles] = useState([]);

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
    console.log('selectedFiles length', selectedFiles.length);
    edit.update({ order_images: selectedFiles });
    console.log('selectedFiles from set', selectedFiles);
  };

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
            {edit.edits.order_images.map((img) => {
              return (
                <Content
                  key={img}
                  imgUrl={img}
                  handleClickImage={(e) => console.log('hi')}
                />
              );
            })}
          </Carousel>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TrashDetails;
