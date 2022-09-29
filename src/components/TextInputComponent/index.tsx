import {
  TextField,
  Typography,
  useTheme,
  TextFieldProps
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

type StyleProps = {
  width?: string | number;
  height?: string | number;
  borderColor?: string;
};

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  subText: {
    width: (props) => props.width || '100%',
    marginTop: theme.MetricsSizes.tiny,
    '& .MuiOutlinedInput-input': {
      height: (props) => props.height || 46,
      padding: theme.spacing(0, 1.8),
      fontSize: theme.MetricsSizes.small_xxx,
      fontWeight: theme.fontWeight.medium,
      background: theme.Colors.white,
      color: theme.Colors.inputText
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
    ...rest
  } = props;
  const styles = useStyles({
    width: inputWidth,
    height: inputHeight,
    borderColor: (isError && theme.Colors.redPrimary) || borderColor
  });
  return (
    <>
      {inputLabel && (
        <Typography
          style={{
            color:
              (isError && theme.Colors.redPrimary) ||
              labelColor ||
              theme.Colors.primary
          }}
        >
          {inputLabel}
        </Typography>
      )}
      <TextField
        placeholder={placeholderText}
        className={styles.subText}
        size="medium"
        variant={variant}
        FormHelperTextProps={{ classes: { root: styles.helperRoot } }}
        error={isError}
        {...rest}
      />
    </>
  );
};

export default TextInputComponent;