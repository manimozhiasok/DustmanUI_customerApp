import React from 'react';
import {
  makeStyles,
  Theme,
  Grid,
  Typography,
  GridProps,
  useTheme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return {
    imgContainer: {
      paddingLeft: theme.spacing(1.6)
    }
  };
});

export type UHIconTextProps = GridProps & {
  icon?: any;
  firstImg?: any;
  value?: string;
  secImage?: any;
  renderComponent?: () => JSX.Element;
  textContentStyle?: React.CSSProperties;
};

const UHIconTextComp = (props: UHIconTextProps) => {
  const {
    icon,
    firstImg,
    value,
    secImage,
    renderComponent,
    textContentStyle,
    ...rest
  } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container {...rest}>
      {icon && (
        // <Grid item>
        <img src={icon} />
        // </Grid>
      )}
      <Grid
        item
        xs
        style={{ marginLeft: theme.spacing(2.4), ...textContentStyle }}
      >
        {renderComponent && renderComponent()}
        {value && <Typography variant="h5">{value}</Typography>}
        {firstImg && (
          <Grid
            container
            className={classes.imgContainer}
            direction="row"
            spacing={2}
          >
            <Grid item>{firstImg}</Grid>
            <Grid item>{secImage}</Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default UHIconTextComp;
