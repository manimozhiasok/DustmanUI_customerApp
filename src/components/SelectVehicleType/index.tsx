import React, { useState, useEffect } from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    subText: {
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.MetricsSizes.tiny_x,
      color: theme.Colors.blackGrey
    },
    heading: {
      fontSize: theme.MetricsSizes.small_x,
      fontWeight: theme.fontWeight.medium
    },
    topHeading: {
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.MetricsSizes.small_xxx,
      color: theme.Colors.primary
    },
    subHeading: {
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.MetricsSizes.small_xxx,
      color: theme.Colors.lightBlack
    },
    gridStyle: {
      margin: 5,
      background: theme.Colors.whiteGrey,
      borderRadius: '8px',
      width: 152,
      height: 82,
      cursor: 'pointer'
    }
  })
);

function SelectVehicleType({
  dataContent,
  onClick,
  selectedVal
}: {
  dataContent: any[];
  onClick: (id: number) => void;
  selectedVal?: number;
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeCard, setActiveCard] = useState(0);
  const { t } = useTranslation();

  const onClickItem = (selectId: number) => {
    setActiveCard(selectId);
    onClick(selectId);
  };

  useEffect(() => {
    setActiveCard(selectedVal);
  }, [selectedVal]);

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12}>
        <Typography className={classes.subHeading}>
          {t('vehicleChoose')}
        </Typography>
      </Grid>
      {dataContent.map((item, index) => {
        return (
          <Grid
            item
            className={classes.gridStyle}
            key={index}
            onClick={() => onClickItem(item.id)}
            style={{
              background:
                activeCard === item.id
                  ? 'linear-gradient(274.42deg, #6CB043 0%, #92E3A9 124.45%)'
                  : theme.Colors.whiteGrey
            }}
          >
            <Typography className={classes.heading}>{item.name}</Typography>
            <Grid
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row'
              }}
            >
              <Typography className={classes.subText}>{item.name}</Typography>

              <img
                src={item.image}
                width={45}
                height={45}
                style={{
                  background: theme.Colors.white,
                  borderRadius: 50,
                  padding: theme.spacing(0, 0)
                }}
              />
            </Grid>

            <Typography className={classes.subText}>
              {item.description}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default SelectVehicleType;
