import { Grid, Typography, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { ButtonComp, TextInputComponent } from 'src/components';
import Plus from '../../Assets/Images/Plus.svg';
import ProfileAddressModel from './profileAddressModel';

const ProfileContent = ({
  handleAddNewItem,
  handleEditListItem
}: {
  handleEditListItem: () => void;
  handleAddNewItem: () => void;
}) => {
  // const [openModal, setOpenModal] = useState<any>({
  //   open: false
  // });
  const [isEditable, setIsEditable] = useState<any>(true);
  const theme = useTheme();
  //const handleAddNewItem = () => {
  //   console.log(setOpenModal, 'console1...........');
  //   setOpenModal({
  //     open: false
  //   });
  // };
  // const handleEditListItem = () => {
  //   console.log(setOpenModal, 'console1...........');
  //   //setIsEditable(false);
  //   setOpenModal({
  //     open: false,
  //     dialogType: 'edit'
  //   });
  // };
  const handleEdit = () => {
    setIsEditable(false);
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          container
          spacing={2}
          style={{ padding: theme.spacing(0, 0, 0, 0) }}
        >
          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={'FIRST NAME'}
              labelColor={theme.Colors.primary}
              variant="standard"
              disabled={isEditable}
            />
          </Grid>

          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={'LAST NAME'}
              labelColor={theme.Colors.primary}
              variant="standard"
              disabled={isEditable}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={'EMAIL ADDRESS'}
              labelColor={theme.Colors.primary}
              variant="standard"
              disabled={isEditable}
            />
          </Grid>
          <Grid item xs={12} container justifyContent="center">
            <ButtonComp
              buttonText={'EDIT'}
              backgroundColor="white"
              buttonFontSize={14}
              variant="outlined"
              buttonTextColor="#6CB044"
              buttonFontWeight={700}
              btnWidth={'100px'}
              height="30px"
              onClickButton={handleEdit}
            />
          </Grid>

          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={'PHONE NUMBER'}
              labelColor={theme.Colors.primary}
              variant="standard"
              iconEnd={
                <button style={{ color: '#6CB044', border: 'none' }}>
                  EDIT
                </button>
              }
            ></TextInputComponent>
          </Grid>

          <Grid item xs={12}>
            <TextInputComponent
              inputLabel={'ADDRESS'}
              labelColor={theme.Colors.primary}
              variant="standard"
              iconEnd={
                <button
                  style={{ color: '#6CB044', border: 'none' }}
                  onClick={handleEditListItem}
                >
                  EDIT
                </button>
              }
            />
          </Grid>

          <Grid xs={12} container justifyContent="center">
            <ButtonComp
              buttonText={'ADD NEW ADDRESS'}
              backgroundColor="white"
              buttonFontSize={14}
              variant="outlined"
              buttonTextColor="#6CB044"
              buttonFontWeight={700}
              btnWidth={'250px'}
              style={{
                marginTop: 30,
                justifyContent: 'center'
              }}
              startIcon={<img src={Plus} />}
              onClickButton={handleAddNewItem}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* {openModal && (
        <ProfileAddressModel
          onClose={() => setOpenModal(false)}
          open={openModal}
        />
      )} */}
    </>
  );
};
export default ProfileContent;
