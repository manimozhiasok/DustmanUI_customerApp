import {
  TextField,
  Typography,
  useTheme,
  TextFieldProps,
  InputAdornment,
  Grid
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

type StyleProps = {
  width?: string | number;
  height?: string | number;
  borderColor?: string;
  bgColor?: string;
  borderRadius?: number;
  textColor?: string;
  inputTextWeight?: number;
  inputTextSize?: any;
  inputBorder?: string;
};

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  subText: {
    width: (props) => props.width || '100%',
    '& .MuiOutlinedInput-multiline': {
      alignItems: 'initial',
      padding: theme.spacing(1.25, 1.8)
    },
    '& .MuiOutlinedInput-input': {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none'
      }
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: (props) => props.borderRadius ?? theme.MetricsSizes.tiny,
      height: (props) => props.height || 46,
      fontSize: (props) => props.inputTextSize || theme.MetricsSizes.small_xxx,
      fontWeight: (props) => props.inputTextWeight || theme.fontWeight.medium,
      backgroundColor: (props) => props.bgColor || theme.Colors.white,
      color: (props) => props.textColor || theme.Colors.inputText
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: (props) => props.borderColor || theme.Colors.lightGrey,
      borderWidth: '1px'
    },
    '& .MuiInput-root': {
      fontSize: theme.MetricsSizes.small_xx + 1,
      fontWeight: theme.fontWeight.bold,
      color: theme.Colors.mediumGrey
    },
    '& .MuiInput-underline::before, .MuiInput-underline:hover::before': {
      borderBottom: '0.5px solid',
      borderBottomColor: theme.Colors.greyDark
    },
    '& .MuiInput-underline::after': {
      borderBottom: '0.5px solid',
      borderBottomColor: (props) => props.inputBorder || theme.Colors.secondary
    }
  },
  helperRoot: {
    textTransform: 'none',
    fontSize: theme.MetricsSizes.small_x,
    fontWeight: theme.fontWeight.medium
  },
  containerStyle: { display: 'flex', flexDirection: 'column' }
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
  inputStyles?: any;
  inputBorderRadius?: number;
  textColor?: string;
  iconEnd?: any;
  inputTextWeight?: number;
  inputTextSize?: any;
  inputLabelFont?: number;
  inputBorder?: string;
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
    inputStyles,
    inputBorderRadius,
    textColor,
    iconEnd,
    inputTextWeight,
    inputTextSize,
    inputLabelFont,
    inputBorder,
    ...rest
  } = props;
  const styles = useStyles({
    width: inputWidth,
    height: inputHeight,
    bgColor: backgroundColor,
    borderColor: (isError && theme.Colors.redPrimary) || borderColor,
    borderRadius: inputBorderRadius,
    textColor,
    inputTextWeight,
    inputTextSize,
    inputBorder
  });
  return (
    <Grid className={styles.containerStyle}>
      {inputLabel && (
        <Typography
          style={{
            color:
              (isError && theme.Colors.redPrimary) ||
              labelColor ||
              theme.Colors.primary,
            fontSize: inputLabelFont || theme.MetricsSizes.small_xxx,
            marginBottom: theme.MetricsSizes.tiny
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
    </Grid>
  );
};

export default TextInputComponent;
