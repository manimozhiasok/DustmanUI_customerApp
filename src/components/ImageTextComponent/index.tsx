import React, { useEffect } from 'react';
import {
  makeStyles,
  Theme,
  useTheme,
  Grid,
  Typography,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return {
    outerContainer: {
      // padding: theme.spacing(1.5, 0, 0, 0)
    },
    mapStyle: {
      marginLeft: theme.spacing(6)
    }
  };
});

type Props = {
  icon?: any;
  value?: any;
};

const ImageTextComponent = (props: Props) => {
  const { icon, value } = props;
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid style={{ display: 'flex', alignItems: 'center' }}>
      {icon && <img src={icon} />}
      <Grid>
        {value && (
          <Typography
            style={{
              fontSize: theme.MetricsSizes.tiny_xxx,
              marginLeft: theme.spacing(1)
            }}
          >
            {value}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ImageTextComponent;
