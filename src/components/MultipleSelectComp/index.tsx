import React from 'react';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select, { SelectProps } from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';

type StyleProps = {
    width?: string | number;
    height?: string | number;
    borderColor?: string;
  };

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
    selectStyle: {
        width: (props) => props.width || '100%',
      height: theme.MetricsSizes.large_xxx,
      color: theme.Colors.inputText,
      fontSize: theme.MetricsSizes.small_xx,
      fontWeight: theme.fontWeight.medium,
      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.Colors.lightGrey,
          borderWidth: '1px'
      },
      // '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      //   borderColor: theme.Colors.lightGrey,
      //   borderWidth: '1px'
      // },
      // '& fieldset': {
      //   borderColor: theme.Colors.lightGrey
      // },
      // '&:hover .MuiOutlinedInput-notchedOutline': {
      //   borderColor: theme.Colors.lightGrey
      // },
      '& .MuiSelect-select:focus': {
        background: 'transparent',
        outline: 'none'
      }
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

type Props = SelectProps & {
  actions?: string[];
  titleText?: string;
  variant?: string;
  multiple?: boolean;
  value?: string[];
  onChange?: (val: any) => void;
  renderValue?: (value: unknown) => React.ReactNode;
  selectBoxStyle?: React.CSSProperties;
  selectBoxWidth?: number | string;
};

function MultipleSelectComp(props: Props) {
  const {
    actions,
    titleText,
    multiple = false,
    variant = 'outlined',
    value,
    onChange,
    renderValue,
    selectBoxStyle,
    selectBoxWidth,
    ...rest
  } = props;
  const classes = useStyles({width: selectBoxWidth});
  const theme = useTheme();

  return (
    <div>
      {titleText && (
        <Typography
          style={{
            color: theme.Colors.primary
          }}
        >
          {titleText}
        </Typography>
      )}
      <Select
        multiple={multiple}
        variant={variant}
        fullWidth
        value={value}
        onChange={onChange}
        className={classes.selectStyle}
        renderValue={renderValue}
        MenuProps={MenuProps}
        style={{...selectBoxStyle }}
      >
        {actions.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
export default MultipleSelectComp;
