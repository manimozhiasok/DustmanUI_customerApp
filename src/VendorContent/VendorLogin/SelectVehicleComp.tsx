import React, { useEffect, useState } from 'react';
import { useTheme, Grid, Typography, Box, Checkbox } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  textStyle: {
    fontWeight: 700,
    color: theme.Colors.primary
  },
  subTextStyle: {
    marginTop: theme.MetricsSizes.tiny
  },
  boxMainContainer: {
    border: '1px solid',
    borderColor: theme.Colors.lightGrey,
    boxShadow: '0px 0px 1px rgba(50, 50, 71, 0.2)',
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2)
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer1: {
    paddingLeft: theme.spacing(3),
    fontWeight: theme.fontWeight.medium
  }
}));

type Prop = {
  vendorTypeItems: any[];
  selectedVal: any[];
  onClickVehicleCheckbox: (val: any) => void;
};

const SelectVehicleComp = ({
  vendorTypeItems,
  selectedVal,
  onClickVehicleCheckbox
}: Prop) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedItemId, setSelectedItemId] = useState<string[]>([]);

  const onChange = (itemIds: any[]) => {
    if (onClickVehicleCheckbox) {
      onClickVehicleCheckbox(itemIds);
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
    setSelectedItemId(selectedVal);
  }, [selectedVal]);

  return (
    <Grid style={{ marginTop: theme.spacing(5) }}>
      <Typography variant="h4">
        Provide your available vehicle details to transport the trash.
      </Typography>
      {vendorTypeItems.map((item, index) => {
        const findActiveImage: number = selectedItemId.length
          ? selectedItemId.findIndex((selId) => selId === item.id)
          : -1;
        const isActive: boolean = findActiveImage !== -1;
        return (
          <Grid
            className={classes.boxMainContainer}
            key={index}
            style={{
              borderRadius: '8px',
              background: isActive
                ? 'linear-gradient(rgba(239, 71, 35, 0.2),rgba(246, 141, 31, 0.2))'
                : theme.Colors.whiteGrey
            }}
          >
            <Grid className={classes.textContainer}>
              <img
                src={item.image}
                alt="images"
                width={70}
                height={70}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 50
                }}
              />
              <Typography variant="h4" className={classes.textContainer1}>
                {item.name}
              </Typography>
            </Grid>
            <Grid>
              <Checkbox
                style={{ color: theme.Colors.orangePrimary }}
                onChange={() => handleOnClick(item.id)}
                checked={isActive}
              />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default React.memo(SelectVehicleComp);
