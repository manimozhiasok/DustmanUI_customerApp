import React from 'react';
import {
  makeStyles,
  useTheme,
  Box,
  Typography,
  Theme,
  Grid
} from '@material-ui/core';

type Props = {
  headerFontWeight?: number;
  headingColor?: string;
  headerFontSize?: string | number;
};
const useStyles = makeStyles<Theme, Props>((theme) => {
  return {
    headingContainer: {
      marginBottom: theme.MetricsSizes.tiny_xxx,
      display: 'inline-flex'
    },
    headingStyle: {
      fontSize: (props) => props.headerFontSize || theme.MetricsSizes.regular_x,
      fontWeight: (props) => props.headerFontWeight || theme.fontWeight.bold,
      color: (props) =>
        props.headingColor ? props.headingColor : theme.Colors.blueDark
    }
  };
});

const Heading = ({
  headingText,
  headingColor,
  headerFontWeight,
  headerFontSize
}: {
  headingText: string;
  headingColor?: string;
  headerFontSize?: string | number;
  headerFontWeight?: number;
}) => {
  const classes = useStyles({ headingColor, headerFontSize, headerFontWeight });
  const theme = useTheme();

  return (
    <Grid className={classes.headingContainer}>
      <Typography className={classes.headingStyle}>{headingText}</Typography>
    </Grid>
  );
};

export default Heading;
