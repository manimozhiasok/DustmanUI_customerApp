import React from 'react';
import { makeStyles, Theme, Button, ButtonProps } from '@material-ui/core';

type ThemeProps = {
  bgColor?: string;
  height?: string | number;
  buttonFontSize?: number;
  btnTextColor?: string;
  buttonFontWeight?: number;
  btnWidth?: string | number;
  btnBorderRadius?: number;
};

const useStyles = makeStyles<Theme, ThemeProps>((theme) => {
  return {
    container: {
      display: 'flex',
      width: (props) => props.btnWidth || '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: (props) => props.bgColor || theme.Colors.secondary,
      color: (props) => props.btnTextColor || theme.Colors.white,
      fontSize: (props) => props.buttonFontSize || theme.MetricsSizes.regular,
      fontWeight: (props) => props.buttonFontWeight || theme.fontWeight.medium,
      height: (props) => props.height || theme.MetricsSizes.large_xxx,
      borderRadius: (props) =>
        props.btnBorderRadius || theme.MetricsSizes.tiny_xx,
      textTransform: 'none',
      '&.MuiButton-contained': {
        boxShadow: 'none'
      },
      '&:hover': {
        backgroundColor: (props) => props.bgColor || theme.Colors.secondary
      },
      '&.MuiButton-root': {
        fontFamily: 'DM Sans'
      }
    }
  };
});

type Props = ButtonProps & {
  backgroundColor?: string;
  height?: string | number;
  buttonText?: string;
  buttonFontSize?: number;
  onClickButton?: any;
  variant?: string;
  buttonTextColor?: string;
  buttonFontWeight?: number;
  btnWidth?: string | number;
  btnBorderRadius?: number;
  onBrowseButtonClick?: any;
  isBrowseButton?: boolean;
  iconImage?: any;
  startIcon?: any;
};

const ButtonComp = (props: Props) => {
  const {
    backgroundColor,
    height,
    buttonText,
    buttonFontSize,
    variant = 'contained',
    buttonTextColor,
    buttonFontWeight,
    btnWidth,
    btnBorderRadius,
    onClickButton,
    iconImage,
    isBrowseButton,
    onBrowseButtonClick,
    startIcon,
    ...rest
  } = props;
  const classes = useStyles({
    bgColor: backgroundColor,
    height: height,
    buttonFontSize: buttonFontSize,
    btnTextColor: buttonTextColor,
    buttonFontWeight,
    btnWidth,
    btnBorderRadius
  });

  if (isBrowseButton)
    return (
      <Button
        className={classes.container}
        component="label"
        variant={variant}
        onClick={onClickButton}
        endIcon={iconImage}
      >
        {buttonText}
        <input
          type="file"
          accept="image/jpg,image/jpeg"
          hidden
          multiple
          onChange={onBrowseButtonClick}
        />
      </Button>
    );

  return (
    <Button
      className={classes.container}
      disableElevation
      variant={variant}
      onClick={onClickButton}
      endIcon={iconImage}
      startIcon={startIcon}
      {...rest}
    >
      {buttonText}
    </Button>
  );
};
export default ButtonComp;
