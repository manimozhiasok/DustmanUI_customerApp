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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectStyle: {
      height: theme.MetricsSizes.large_xxx,
      color: theme.Colors.inputText,
      fontSize: theme.MetricsSizes.small_xx,
      fontWeight: theme.fontWeight.medium,
      marginTop: theme.MetricsSizes.tiny,
      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.Colors.lightGrey,
        borderWidth: '1px'
      },
      '& .MuiSelect-select:focus': {
        background: 'transparent',
        outline: 'none'
      }
    }
  })
);

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
  selectItems?: any[];
  titleText?: string;
  variant?: string;
  multiple?: boolean;
  value?: string[];
  onChange?: (val: any) => void;
  selectBoxStyle?: React.CSSProperties;
  isPlaceholder?: boolean;
  placeholderText?: string;
};

function MultipleSelectComp(props: Props) {
  const {
    selectItems,
    titleText,
    multiple = false,
    variant = 'outlined',
    value,
    onChange,
    selectBoxStyle,
    isPlaceholder = false,
    placeholderText,
    ...rest
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const getMenuItems = () => {
    if (!selectItems?.length) {
      return null;
    }
    return selectItems.map((item, index) => (
      <MenuItem key={index} value={item.value}>
        {item.label}
      </MenuItem>
    ));
  };
  return (
    <div>
      {titleText && (
        <Typography
          style={{
            color: theme.Colors.primary,
            fontWeight: theme.fontWeight.medium
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
        MenuProps={MenuProps}
        style={{ ...selectBoxStyle }}
        {...rest}
      >
        {getMenuItems()}
        {isPlaceholder && (
          <MenuItem value="" disabled>
            {placeholderText || 'Select'}
          </MenuItem>
        )}
      </Select>
    </div>
  );
}
export default MultipleSelectComp;
