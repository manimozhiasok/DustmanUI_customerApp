import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import Carousel from 'src/components/Carousel';
import PhotoAlternateLogo from 'src/Assets/Images/photoAlternate.png';
import { Content, imagesForSlide, LeftContent } from './TrashDetailsContent';
import { AddPhotoAlternate } from '@material-ui/icons';
import { ButtonComp } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({
  imageContainer: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    width: '100%',
    height: '185px',
    fontSize: theme.MetricsSizes.small_xx,
    color: theme.Colors.darkGrey,
    fontWeight: theme.fontWeight.regular
  }
}));

function TrashDetails({ edit, data }) {
  const classes = useStyles();
  const theme = useTheme();
  const [photo, setPhoto] = useState(PhotoAlternateLogo);
  const [text, setText] = useState('Choose your trash pictures');
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState();

  const handleClickImage = (e) => {
    console.log('event', e.target.src);
    setPhoto(e.target.src);
    setText('');
    console.log('text', text);
  };

  const handleData = () => {
    setSelectedValue(edit.edits.order_items);
    //data.map((id) => {if(id === edit.edits.order_items)})
    console.log('selectedItems new', selectedValue);
  };
  useEffect(() => handleData);

  const onUploadFiles = (e) => {
    console.log('e from onUploadFiles', e);
    console.log('e.target from onUploadFiles', e.target);
    console.log('e.target.files', e.target.files);

    // setSelectedFileName(e.target.files[0].name);
    // console.log('e.target.files[0].name',e.target.files[0].name);

    // var imageUrlTemp = URL.createObjectURL(e.target.files[0]);
    // setSelectedFiles(imageUrlTemp);
    //setSelectedFiles(URL.createObjectURL(e.target.files))
    let images = [];
    images.push(e.target.files);
    for (let i = 0; i < images[0].length; i++) {
      images.push(URL.createObjectURL(images[0][i]));
    }
    console.log('images', images);

    setSelectedFiles(images);
    // const { files } = e.target;

    // const selecteds = [...[...files]];
    // console.log('selecteds',selecteds);

    // selecteds.find((i) => images.push(URL.createObjectURL(i)));
    // // selecteds.forEach((i) => images.push(URL.createObjectURL(i)));
    // setSelectedFiles(images);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={6}>
        <LeftContent edit={edit} handleData={handleData} />
      </Grid>
      <Grid item xs={6}>
        <Grid
          style={{
            backgroundColor: theme.Colors.lightWhiteGrey,
            padding: '3%',
            borderRadius: '8px'
          }}
        >
          <Grid className={classes.imageContainer}>
            <ButtonComp
              buttonText={''}
              iconImage={
                <AddPhotoAlternate
                  style={{ color: '#828282', width: '80px', height: '80px' }}
                />
              }
              backgroundColor={'transparent'}
              onClickButton={onUploadFiles}
              isBrowseButton
            />
            {/* <input
              type="file"
              accept="image/*"
              multiple
              onChange={onUploadFiles}
            /> */}
            {text}
          </Grid>
          <Carousel show={3}>
            {imagesForSlide.map((img, index) => {
              return (
                <Content
                  key={index}
                  imgUrl={img.imageUrl}
                  handleClickImage={handleClickImage}
                />
              );
            })}
          </Carousel>
          {/* <Carousel show={3}>
            {selectedFiles.map((img) => {
              return (
                <Content
                  key={img}
                  imgUrl={img}
                  handleClickImage={(e) => console.log(e)}
                />
              );
            })}
          </Carousel> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TrashDetails;
