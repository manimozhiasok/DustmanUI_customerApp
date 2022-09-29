import React from 'react';
import {
  makeStyles,
  useTheme,
  Theme,
  Box,
  Typography
} from '@material-ui/core';

type Props = {
  isSelected: boolean;
};
const useStyles = makeStyles<Theme>((theme: Theme) => {
  return {
    headingContainer: {
      marginBottom: theme.MetricsSizes.tiny_xxx,
      display: 'inline-flex'
    },
    headingStyle: {
      fontSize: theme.MetricsSizes.regular_x,
      fontWeight: theme.fontWeight.bold,
      textAlign: 'left',
      color: theme.Colors.black
    }
  };
});

const Heading = ({ headingText }: { headingText: string }) => {
  const classes = useStyles();
  const theme: Theme = useTheme();

  return (
    <Box className={classes.headingContainer}>
      <Typography className={classes.headingStyle}>{headingText}</Typography>
    </Box>
  );
};

export default Heading;
