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
  const theme = useTheme();
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
        style={{ marginRight: theme.MetricsSizes.regular_x }}
        backgroundColor={theme.Colors.grey}
        height="40px"
        buttonText="Cancel"
        buttonFontSize={theme.MetricsSizes.small_xxx}
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
        buttonFontSize={theme.MetricsSizes.small_xxx}
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
