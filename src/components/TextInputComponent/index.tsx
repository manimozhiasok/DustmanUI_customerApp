import {
  TextField,
  Typography,
  useTheme,
  TextFieldProps,
  InputAdornment
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { fontSize } from '@mui/system';

type StyleProps = {
  width?: string | number;
  height?: string | number;
  borderColor?: string;
  bgColor?: string;
  placeHolderColor?: string;
  borderRadius?: number;
  textColor?: string;
  fontWeight?: number;
  fontSize?: any;
};

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  subText: {
    width: (props) => props.width || '100%',
    marginTop: theme.MetricsSizes.tiny,
    '& .MuiOutlinedInput-input': {
      height: (props) => props.height || 46,
      padding: theme.spacing(0, 1.8),
      fontSize: (props) => props.fontSize || theme.MetricsSizes.small_xxx,
      fontWeight: (props) => props.fontWeight || theme.fontWeight.medium,
      backgroundColor: (props) => props.bgColor || theme.Colors.white,
      '&::placeholder': {
        color: (props) => props.placeHolderColor || null
      },
      color: (props) => props.textColor || theme.Colors.inputText
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: (props) => props.borderRadius ?? theme.MetricsSizes.tiny
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: (props) => props.borderColor || theme.Colors.lightGrey,
      borderWidth: '1px'
    }
  },
  helperRoot: {
    textTransform: 'none',
    fontSize: theme.MetricsSizes.small_xx
  }
}));

type Props = TextFieldProps & {
  inputLabel?: string;
  placeholderText?: string;
  labelColor?: string;
  inputWidth?: string | number;
  inputHeight?: string | number;
  variant?: string;
  borderColor?: string;
  isError?: boolean;
  backgroundColor?: string;
  placeHolderColor?: string;
  inputStyles?: any;
  inputBorderRadius?: number;
  textColor?: string;
  iconEnd?: any;
  fontWeight?: number;
  fontSize?: any;
};

const TextInputComponent = (props: Props) => {
  const theme: Theme = useTheme();
  const {
    inputLabel,
    placeholderText,
    labelColor,
    inputWidth,
    variant = 'outlined',
    inputHeight,
    borderColor,
    isError = false,
    backgroundColor,
    placeHolderColor,
    inputStyles,
    inputBorderRadius,
    textColor,
    iconEnd,
    fontWeight,
    fontSize,
    ...rest
  } = props;
  const styles = useStyles({
    width: inputWidth,
    height: inputHeight,
    bgColor: backgroundColor,
    placeHolderColor: placeHolderColor,
    borderColor: (isError && theme.Colors.redPrimary) || borderColor,
    borderRadius: inputBorderRadius,
    textColor,
    fontWeight: fontWeight,
    fontSize: fontSize
  });
  return (
    <>
      {inputLabel && (
        <Typography
          style={{
            color:
              (isError && theme.Colors.redPrimary) ||
              labelColor ||
              theme.Colors.primary,
              fontSize: theme.MetricsSizes.small_xxx
          }}
        >
          {inputLabel}
        </Typography>
      )}
      <TextField
        placeholder={placeholderText}
        className={`${styles.subText} ${inputStyles}`}
        // size="medium"
        variant={variant}
        FormHelperTextProps={{ classes: { root: styles.helperRoot } }}
        error={isError}
        InputProps={{
          endAdornment: iconEnd ? (
            <InputAdornment position="end">{iconEnd}</InputAdornment>
          ) : null
        }}
        {...rest}
      />
    </>
  );
};

export default TextInputComponent;
