import React from 'react';
import { Box, Grid } from '@material-ui/core';
import ButtonComp from '../ButtonComp';

const OrderButton = ({
  isField,
  onClickButton
}: {
  isField?: boolean;
  onClickButton?: () => void;
}) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}
    >
      <ButtonComp
        buttonText={'View Details'}
        backgroundColor="#FCFCFC"
        buttonFontSize={10}
        variant="outlined"
        buttonTextColor="#6CB044"
        buttonFontWeight={500}
        btnBorderRadius={8}
        height={'30px'}
        btnWidth={'150px'}
        style={{ marginRight: 10 }}
        onClickButton={onClickButton}
      />
      {isField && (
        <ButtonComp
          buttonText={'CANCEL'}
          buttonFontSize={10}
          variant="contained"
          buttonTextColor="#FFFFFF"
          buttonFontWeight={500}
          btnBorderRadius={8}
          height={'30px'}
          btnWidth={'72px'}
        />
      )}
    </Box>
  );
};
export default OrderButton;
