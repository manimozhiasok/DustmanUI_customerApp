import React from 'react';
import { Box, Theme, useTheme, makeStyles } from '@material-ui/core';
import { ButtonComp } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({}));
type Props = {
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
  styles?: Object;
  disabledRightBtn?: boolean;
};

const DualActionButton = (props: Props) => {
  const theme: Theme = useTheme();
  const { onLeftButtonClick, onRightButtonClick, disabledRightBtn, styles } =
    props;
  const classes = useStyles({});
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        ...styles
      }}
    >
      <ButtonComp
        style={{ marginRight: 20 }}
        backgroundColor={theme.Colors.grey}
        height="40px"
        buttonText="Cancel"
        buttonFontSize={theme.MetricsSizes.small_xx}
        buttonTextColor={theme.Colors.primary}
        buttonFontWeight={theme.fontWeight.medium}
        btnWidth="95px"
        btnBorderRadius={100}
        onClickButton={onLeftButtonClick}
      />

      <ButtonComp
        backgroundColor={theme.Colors.primary}
        height="40px"
        buttonText="Save"
        buttonFontSize={theme.MetricsSizes.small_xx}
        buttonTextColor={theme.Colors.white}
        buttonFontWeight={theme.fontWeight.medium}
        btnWidth="95px"
        btnBorderRadius={100}
        onClickButton={onRightButtonClick}
        disabled={disabledRightBtn}
      />
    </Box>
  );
};
export default DualActionButton;
