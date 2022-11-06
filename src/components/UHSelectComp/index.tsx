import React, { useEffect, useState } from 'react';
import { Check } from '@material-ui/icons';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return {
    radio: {
      alignSelf: 'flex-start'
    },
    checkIcon: {
      color: 'white'
    },
    activeCheckIcon: {
      marginLeft: theme.MetricsSizes.regular_x,
      width: 24,
      height: 24
    },
    textStyle: {
      marginLeft: theme.spacing(2.5),
      fontSize: theme.MetricsSizes.small_xx + 1,
      color: theme.Colors.mediumGrey,
      fontWeight: theme.fontWeight.bold
    }
  };
});

type Props = {
  initialValue: number;
  handleChangeItem?: (selId: number) => void;
  labelData: { label: string; value: number }[];
};
const UHSelectComp = ({ initialValue, handleChangeItem, labelData }: Props) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const classes = useStyles();
  const theme = useTheme();

  const onclickItem = (item?: { label: string; value: number }) => {
    setSelectedItem(item.value);
    if (handleChangeItem) {
      handleChangeItem(item.value);
    }
  };

  useEffect(() => {
    setSelectedItem(initialValue);
  }, [initialValue]);

  return (
    <Grid container spacing={2}>
      {labelData.map((item, index) => {
        return (
          <Grid
            item
            xs={12}
            container
            key={index}
            onClick={() => onclickItem(item)}
            alignItems="center"
          >
            <Grid item>
              <Typography
                variant="h6"
                style={{
                  color: theme.Colors.mediumGrey,
                  fontWeight: theme.fontWeight.bold
                }}
              >
                {item.label}
              </Typography>
            </Grid>
            {selectedItem === item.value ? (
              <Grid item xs>
                <Check color="secondary" className={classes.activeCheckIcon} />
              </Grid>
            ) : null}
          </Grid>
        );
      })}
    </Grid>
  );
};
export default UHSelectComp;
