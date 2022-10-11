import React from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core';
import { bike } from 'src/Assets';
import { vehicleImage } from 'src/Assets';
import SelectVehicleType from 'src/components/SelectVehicleType';

const useStyles = makeStyles<Theme>((theme: Theme) => createStyles({}));
const dataContent = [
  {
    heading: 'Two Wheeler',
    subHeading: 'Vehicle Type',
    image: bike,
    subText: '* Kindly arrange parking'
  },
  {
    heading: 'Three Wheeler',
    subHeading: 'Tri Cycle',
    image: vehicleImage,
    subText: '* Kindly arrange parking'
  },
  {
    heading: 'Four Wheeler',
    subHeading: 'mini truck',
    image: vehicleImage,
    subText: '* Kindly arrange parking'
  },
  {
    heading: 'Four Wheeler',
    subHeading: 'Tempo',
    image: vehicleImage,
    subText: '* Kindly arrange parking'
  },
  {
    heading: 'Four Wheeler',
    subHeading: 'Lorry',
    image: vehicleImage,
    subText: '* Kindly arrange parking'
  }
];
function SelectVehicle() {
  const classes = useStyles();
  const theme = useTheme();
  const handleClick = () => {
    console.log('clicked item');
  };

  return (
    <>
      <SelectVehicleType dataContent={dataContent} onClick={handleClick} />
    </>
  );
}

export default SelectVehicle;
