import React, { useEffect, useState } from 'react';
import { useTheme, Grid, Typography, Box } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { borderRadius } from '@mui/system';

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
    flexDirection: 'row'
  },
  textContainer1: {
    marginTop: 5,
    paddingLeft: 20
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
      <Typography variant="h4">
        Provide your available vehicle details to transport the trash.
      </Typography>
      {userTypeItems.map((item, index) => {
        return (
          <Grid
            className={classes.boxMainContainer}
            key={index}
            style={{
              background:
                activeCard === item.id
                  ? 'linear-gradient(rgba(239, 71, 35, 0.2),rgba(246, 141, 31, 0.2))'
                  : theme.Colors.whiteGrey,
              border:
                activeCard === item.id
                  ? `1px solid rgba(107, 176, 67, 0.2)`
                  : 'none'
            }}
          >
            <Grid className={classes.textContainer}>
              <img
                src={item.image}
                alt="images"
                width={50}
                height={50}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 50
                }}
              />
              <Typography className={classes.textContainer1}>
                {item.text}
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
                      ? theme.Colors.secondary
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
