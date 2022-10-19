import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  useTheme,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel
} from '@material-ui/core';
import { light } from '@material-ui/core/styles/createPalette';

const useStyles = makeStyles((theme: Theme) => ({
  eachItem: {
    padding: theme.spacing(3, 0)
  },
  container: {
    overflowY: 'scroll'
  },
  checkbox: {
    zIndex: 1,
    left: '50px',
    top: '10px',
    color: '#C4C4C4',
    width: theme.MetricsSizes.regular,
    height: theme.MetricsSizes.regular,
    '&:not($checked).MuiCheckbox-colorSecondary': {
      backgroundColor: '#C4C4C4',
      padding: '0px',
      borderRadius: '0px'
    },
    '&.MuiCheckbox-colorSecondary.Mui-checked': {
      backgroundColor: theme.Colors.white
    },
    '&.MuiCheckbox-colorSecondary.Mui-checked:hover': {
      backgroundColor: theme.Colors.white
    }
  },
  description: {
    paddingTop: theme.spacing(1),
    textAlign: 'center'
  },
  checkBoxContainer: {
    position: 'relative',
    width: '100%',
    paddingRight: theme.spacing(10)
  }
}));

type Props = {
  handleChangeItem?: (itemData: any) => void;
  data?: any;
  activeBorderColor?: any;
  InitialItemVal?: any[];
};

function ChooseCategoryComponent({
  data,
  handleChangeItem,
  activeBorderColor,
  InitialItemVal
}: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedItemId, setSelectedItemId] = useState<string[]>([]);
  const getBorderColor = (isActive: boolean) => {
    if (isActive) {
      return activeBorderColor || theme.Colors.secondary;
    }
    return theme.Colors.white;
  };

  const onChange = (itemIds: any[]) => {
    if (handleChangeItem) {
      handleChangeItem(itemIds);
    } else {
      setSelectedItemId(itemIds);
    }
  };

  const isUnselected = (selId: string) => {
    const items =
      selectedItemId.length &&
      selectedItemId.filter((itemId) => selId !== itemId);

    if (items.length < selectedItemId.length) {
      onChange(items);
      return true;
    }
    return false;
  };

  const handleOnClick = (itemId: string) => {
    if (isUnselected(itemId)) {
      return;
    }
    onChange([...selectedItemId, itemId]);
  };

  useEffect(() => {
    setSelectedItemId(InitialItemVal);
  }, [InitialItemVal]);

  return (
    <Grid container spacing={4} className={classes.container}>
      {data.map((item, index) => {
        const findActiveImage: number = selectedItemId.length
          ? selectedItemId.findIndex((selId) => selId === item.id)
          : -1;
        const isActive: boolean = findActiveImage !== -1;
        return (
          <Grid
            item
            xs={3}
            key={index}
            justifyContent="center"
            className={classes.eachItem}
          >
            <Grid className={classes.checkBoxContainer}>
              <FormControlLabel
                value={item.name}
                labelPlacement="bottom"
                label={<div className={classes.description}>{item.name}</div>}
                control={
                  <>
                    <Checkbox
                      onChange={() => handleOnClick(item.id)}
                      className={classes.checkbox}
                      checked={isActive}
                    />
                    <img
                      src={item.image_url}
                      alt="Image Not Found"
                      style={{
                        borderWidth: '1px',
                        borderColor: getBorderColor(isActive),
                        borderStyle: 'solid',
                        borderRadius: '6px',
                        width: '100px',
                        height: '100px',
                        padding: 2
                      }}
                    />
                  </>
                }
              />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ChooseCategoryComponent;
