import React from 'react';
import {
  makeStyles,
  useTheme,
  Theme,
  Box,
  Typography
} from '@material-ui/core';

type Props = {
  headingColor: string;
};
const useStyles = makeStyles<Theme>((theme: Theme) => {
  return {
    headingContainer: {
      display: 'inline-flex'
    },
    headingStyle: {
      color: (props: Props) => props.headingColor,
      fontSize: theme.MetricsSizes.regular_xx,
      fontWeight: theme.fontWeight.medium,
      textAlign: 'left'
    }
  };
});

export const SubHeadingPriceTab = ({
  headingText,
  headingColor
}: {
  headingText: string;
  headingColor: string;
}) => {
  const classes = useStyles({ headingColor });
  const theme: Theme = useTheme();

  return (
    <Box className={classes.headingContainer}>
      <Typography className={classes.headingStyle}>{headingText}</Typography>
    </Box>
  );
};
