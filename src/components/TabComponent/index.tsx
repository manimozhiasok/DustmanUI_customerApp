import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  createStyles,
  Divider
} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

type Props = {
  bgColor: string;
  height: string;
  NumOfTabs: number;
};

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    selectedTab: {},
    tabContent: {
      textTransform: 'capitalize',
      color: theme.Colors.primary,
      fontSize: theme.MetricsSizes.regular,
      fontWeight: theme.fontWeight.bold
    },
    textStyle: {
      fontSize: theme.MetricsSizes.small_xxx,
      color: theme.Colors.blueMediumDark,
      fontWeight: theme.fontWeight.bold
    }
  })
);

const TabComponent = ({
  backgroundColor,
  height,
  displayContent,
  onTabChange
}: {
  children?: JSX.Element | any;
  backgroundColor?: string;
  height?: string;
  displayContent?: string[];
  onTabChange?: any;
}) => {
  const classes = useStyles({
    bgColor: backgroundColor,
    height,
    NumOfTabs: displayContent.length
  });
  const [tabToDisplay, setTabToDisplay] = useState(0);

  const handleTabChange = (event, value) => {
    setTabToDisplay(value);
    onTabChange(value);
  };

  return (
    <Grid>
      <Tabs value={tabToDisplay} onChange={handleTabChange}>
        {displayContent.map((item, index) => {
          return (
            <Tab
              key={index}
              value={index}
              label={
                <div className={classes.contentContainer}>
                  <Typography className={classes.textStyle}>{item}</Typography>
                </div>
              }
              className={classes.tabContent}
            />
          );
        })}
      </Tabs>
      <Divider className={classes.horizontalDivider} />
    </Grid>
  );
};

export default TabComponent;
