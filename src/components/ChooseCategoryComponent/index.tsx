import { useEffect, useState } from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  useTheme,
  Checkbox,
  FormControlLabel,
  Typography
} from '@material-ui/core';

type StyleProps = {
  color: string;
}
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  eachItem: {
    '&.MuiGrid-item': {
      padding: theme.spacing(1, 0, 1, 0),
      marginBottom: theme.spacing(2)
    }
  },
  checkbox: {
    zIndex: 1,
    left: '50px',
    top: theme.MetricsSizes.tiny_xxx,
    color: theme.Colors.greyScaleMedium,
    width: theme.MetricsSizes.regular,
    height: theme.MetricsSizes.regular,
    '&:not($checked).MuiCheckbox-colorSecondary': {
      backgroundColor: theme.Colors.greyScaleMedium,
      padding: 0,
      borderRadius: 0
    },
    '&.MuiCheckbox-colorSecondary.Mui-checked': {
      backgroundColor: theme.Colors.white,
      color: (prop) => prop.color || theme.Colors.secondaryOrange
    },
    '&.MuiCheckbox-colorSecondary.Mui-checked:hover': {
      backgroundColor: theme.Colors.white
    },
  },
  description: {
    paddingTop: theme.spacing(1),
    textAlign: 'center',
    fontWeight: theme.fontWeight.medium,
    color: theme.Colors.darkGrey
  }
}));

type Props = {
  handleChangeItem?: (itemData: any) => void;
  data?: any;
  activeBorderColor?: any;
  InitialItemVal?: any[];
  checkBoxColor?: string;
};

function ChooseCategoryComponent({
  data,
  handleChangeItem,
  activeBorderColor,
  InitialItemVal,
  checkBoxColor
}: Props) {
  const classes = useStyles({color: checkBoxColor});
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
    <Grid container spacing={4}>
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
            <FormControlLabel
              value={item.name}
              labelPlacement="bottom"
              label={
                <Typography className={classes.description}>
                  {item.name}
                </Typography>
              }
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
                      borderRadius: theme.MetricsSizes.tiny_x,
                      width: '100px',
                      height: '100px',
                      padding: 2
                    }}
                  />
                </>
              }
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ChooseCategoryComponent;
