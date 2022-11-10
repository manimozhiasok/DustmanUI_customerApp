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
    subText1: {
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.MetricsSizes.tiny_x,
      color: theme.Colors.blackGrey,
      marginBootom: theme.spacing(2)
      // marginBottom:"20px"
    },
    heading: {
      fontSize: theme.MetricsSizes.small_x,
      fontWeight: theme.fontWeight.medium,
      color: theme.Colors.rusticRed
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
       margin: theme.spacing(1,0.5,1.75,1),
      background: theme.Colors.whiteGrey,
      padding:theme.spacing(1,1,0.5,1),
      borderRadius: 5,
      width: 152,
      height: 82,
      cursor: 'pointer',
      position: 'relative'
    },
    gridAlign: {
      // paddingTop:"5px"
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

  useEffect(() => {
    setActiveCard(selectedVal);
  }, [selectedVal]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography className={classes.subHeading}>
          {t('vehicleChoose')}
        </Typography>
      </Grid>
      {dataContent.map((item, index) => {
        return (
          <Grid
            container 
            item
            className={classes.gridStyle}
            alignItems="center"
            key={index}
            onClick={() => onClick(item.id)}
            style={{
              background:
                activeCard === item.id
                  ? 'linear-gradient(rgba(108, 176, 67, 0.2),rgba(146, 227, 169, 0.2))'
                  : theme.Colors.whiteGrey,
              border:
                activeCard === item.id
                  ? `1px solid rgba(107, 176, 67, 0.2)`
                  : 'none'
            }}
          >
            <Grid item xs={12} className={classes.gridAlign}>
              <Typography className={classes.heading}>{item.name}</Typography>
              <Typography className={classes.subText}>{item.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid
                style={{
                  background: theme.Colors.white,
                  borderRadius: 50,
                  height: '45px',
                  width: '45px',
                  padding: theme.spacing(0, 0),
                  position: 'absolute',
                  right: '10px',
                  bottom:"20px"
                }}
              />
              <img
                src={item.image}
                width={65}
                height={40}
                style={{
                  // background: theme.Colors.white,
                  // borderRadius: 50,
                  padding: theme.spacing(0, 0),
                  position: 'absolute',
                   right: '10px',
                   bottom:"20px"
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.subText1}>
                {item.description}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default SelectVehicleType;
