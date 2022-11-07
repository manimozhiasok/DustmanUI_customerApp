import React, { useEffect, useState } from 'react';
import { useTheme, Grid, Typography, Box } from '@material-ui/core';
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
    // color: theme.Colors.greyLight
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
  boxMainContainer1: {
    marginRight: theme.spacing(2)
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  radioContainer: {
    backgroundColor: theme.Colors.white,
    borderColor: theme.Colors.greyAccent,
    padding: 5,
    border: '1px solid'
  }
}));

type Prop = {
  userTypeItems: any[];
  selectedVal: number;
  onClickRadioButton: (val: number) => void;
};

const SelectUserComp = ({
  userTypeItems,
  selectedVal,
  onClickRadioButton
}: Prop) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setActiveCard(selectedVal);
  }, [selectedVal]);

  return (
    <Grid style={{ marginTop: theme.spacing(5) }}>
      {userTypeItems.map((item, index) => {
        return (
          <Grid className={classes.boxMainContainer} key={index}>
            <Grid className={classes.boxMainContainer1}>
              <img src={item.image_url} />
            </Grid>
            <Grid className={classes.textContainer}>
              <Typography variant="h4" className={classes.textStyle}>
                {`${item.name} User`}
              </Typography>
              <Typography variant="subtitle2" className={classes.subTextStyle}>
                {item.description}
              </Typography>
            </Grid>
            <Grid
              className={classes.radioContainer}
              onClick={() => onClickRadioButton(item.id)}
            >
              <Box
                sx={{ height: 12, width: 12 }}
                style={{
                  backgroundColor:
                    activeCard === item.id
                      ? theme.Colors.primary
                      : theme.Colors.white
                }}
              ></Box>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default React.memo(SelectUserComp);
