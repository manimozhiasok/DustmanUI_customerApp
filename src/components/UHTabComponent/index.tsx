import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  makeStyles,
  Divider,
  Theme,
  Grid,
  useTheme,
  TabsProps,
  Typography
} from '@material-ui/core';
import { ORIENTATION } from 'src/Config/constant';

type StyleProps = {
  orientation?: any;
  tabIndicatorColor?: string;
};
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => {
  return {
    tabContainer: {
      backgroundColor: theme.Colors.whiteLightGrey
    },
    wrapper: {
      height: '100%',
      display: 'flex',
      width: '100%',
      flexDirection: (props) =>
        props.orientation === ORIENTATION.VERTICAL ? 'row' : 'column'
    },
    indicator: {
      width: 5,
      backgroundColor: (props) =>
        props.tabIndicatorColor || theme.Colors.secondary,
      left: '0px'
    },
    tabContent: {
      color: theme.Colors.primary,
      fontSize: theme.MetricsSizes.small_xx,
      fontWeight: theme.fontWeight.medium,
      minWidth: 202,
      minHeight: 48,
      textTransform: 'none',
      opacity: 1,
      '& > span > div': {
        '& > svg , path': {
          fill: theme.Colors.navBlue
        },
        color: theme.Colors.navBlue
      },
      '&:active, &.active, &.Mui-selected': {
        '& > span > div': {
          '& > svg , path': {
            fill: theme.Colors.white
          },
          color: theme.Colors.white
        }
      }
    },
    textStyle: {
      marginLeft: theme.spacing(2)
    },
    ContainerStyle: {
      marginRight: theme.MetricsSizes.tiny
    }
  };
});

interface Props extends TabsProps {
  tabContent: any[];
  onTabChange?: (val: any) => void;
  currentTabVal: any;
  renderTabContent?: (currentTabVal: number | string) => React.ReactNode;
  orientation?: any;
  tabIndicatorColor?: string;
  tabClasses?: any;
  isDivider?: boolean;
  tabContainerClassName?: any;
  tabContentClassName?: any;
}

const UHTabComponent = (props: Props) => {
  const {
    tabContent = [],
    onTabChange,
    currentTabVal,
    renderTabContent,
    tabIndicatorColor,
    orientation = ORIENTATION.HORIZONTAL,
    tabClasses,
    isDivider = true,
    tabContainerClassName,
    tabContentClassName,
    ...rest
  } = props;
  const classes = useStyles({
    orientation,
    tabIndicatorColor
  });
  const theme = useTheme();
  const [currentTabValue, setCurrentTabValue] = useState<number | string>(
    currentTabVal || tabContent[0]?.value || 0
  );

  const handleChange = (_: any, val: any) => {
    setCurrentTabValue(val);
    if (onTabChange) onTabChange(val);
  };

  return (
    <Grid container className={classes.wrapper}>
      <Grid item className={`${classes.tabContainer} ${tabContainerClassName}`}>
        <Tabs
          onChange={handleChange}
          value={currentTabValue}
          orientation={orientation}
          classes={{
            indicator: classes.indicator
          }}
          {...rest}
        >
          {tabContent.length &&
            tabContent.map((item, index) => {
              return (
                <Tab
                  label={
                    orientation === ORIENTATION.VERTICAL ? (
                      <Grid container className={classes.ContainerStyle}>
                        {item?.tabIcon ? item.tabIcon() : null}
                        <Typography className={classes.textStyle}>
                          {item?.label}
                        </Typography>
                      </Grid>
                    ) : (
                      item.label
                    )
                  }
                  key={index}
                  value={item?.value || item?.id || index}
                  //  icon={ renderIcon(item.tabIcon)}
                  disabled={!!item?.disabled}
                  className={classes.tabContent}
                  classes={{
                    ...tabClasses
                  }}
                />
              );
            })}
        </Tabs>
        {isDivider && <Divider />}
      </Grid>
      <Grid item xs className={tabContentClassName}>
        {renderTabContent && renderTabContent(currentTabValue)}
      </Grid>
    </Grid>
  );
};

export default UHTabComponent;
