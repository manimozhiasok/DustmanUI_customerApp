import React from 'react';
import {
  makeStyles,
  Theme,
  Grid,
  Typography,
  GridProps,
  useTheme
} from '@material-ui/core';
import { CrownIcon } from 'src/Assets/Images';

const useStyles = makeStyles((theme: Theme) => {
  return {
    imgContainer: {
      paddingLeft: theme.spacing(1.6)
    },
    blurText: {
      filter: 'blur(3px)',
      marginTop: theme.MetricsSizes.small_xxx
    },
    clearText: {
      color: theme.Colors.darkGrey
    },
    imageAlign: {
      display: 'flex',
      flexDirection: 'column'
    }
  };
});

export type UHIconTextProps = GridProps & {
  icon?: any;
  isCrown?: boolean;
  isBlur?: boolean;
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
    isCrown,
    isBlur,
    ...rest
  } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container {...rest}>
      {icon && (
        <Grid item className={classes.imageAlign}>
          {isCrown && <img src={CrownIcon} width="16px" height="16px" />}
          <img src={icon} />
        </Grid>
      )}
      <Grid
        item
        xs
        style={{ marginLeft: theme.spacing(2.4), ...textContentStyle }}
      >
        {renderComponent && renderComponent()}
        {value && (
          <Typography
            variant="h5"
            className={isBlur ? classes.blurText : classes.clearText}
          >
            {value}
          </Typography>
        )}
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
