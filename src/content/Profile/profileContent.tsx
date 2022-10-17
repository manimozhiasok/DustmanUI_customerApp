import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { ButtonComp, TextInputComponent } from 'src/components';
import Plus from '../../Assets/Images/Plus.svg';

const ProfileContent = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          style={{
            fontWeight: '400',
            fontSize: 12,
            color: '#A5A5A5'
          }}
        >
          FIRST NAME
        </Typography>
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <TextInputComponent
            variant="standard"
            iconEnd={<Typography style={{ color: '#6CB044' }}>EDIT</Typography>}
          ></TextInputComponent>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 20 }}>
        <Typography>LAST NAME</Typography>
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <TextInputComponent
            variant="standard"
            iconEnd={<Typography style={{ color: '#6CB044' }}>EDIT</Typography>}
          ></TextInputComponent>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 20 }}>
        <Typography>PHONE NUMBER</Typography>
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <TextInputComponent
            variant="standard"
            iconEnd={
              <Typography
                style={{ color: '#6CB044' }}
                onClick={() => {
                  console.log('Viji');
                }}
              >
                EDIT
              </Typography>
            }
          ></TextInputComponent>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 20 }}>
        <Typography>EMAIL ADDRESS</Typography>
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <TextInputComponent
            variant="standard"
            iconEnd={<Typography style={{ color: '#6CB044' }}>EDIT</Typography>}
          ></TextInputComponent>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 20 }}>
        <Typography>ADDRESS</Typography>
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <TextInputComponent
            variant="standard"
            iconEnd={<Typography style={{ color: '#6CB044' }}>EDIT</Typography>}
          ></TextInputComponent>
        </Grid>
      </Grid>
      <Grid xs={12} container justifyContent="center">
        <ButtonComp
          buttonText={'ADD NEW ADDRESS'}
          backgroundColor="white"
          buttonFontSize={14}
          variant="outlined"
          buttonTextColor="#6CB044"
          buttonFontWeight={700}
          // btnBorderRadius={8}
          // height={'30px'}
          btnWidth={'250px'}
          style={{
            marginTop: 30,
            // marginLeft: 400,
            justifyContent: 'center'
          }}
          startIcon={<img src={Plus} />}
          // onClickButton={onClickButton}
        />
      </Grid>
    </Grid>
  );
};
export default ProfileContent;
