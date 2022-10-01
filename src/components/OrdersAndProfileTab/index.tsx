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
import DividerLine from 'src/components/DividerLine';

type Props = {
  bgColor: string;
  height: string;
  NumOfTabs: number;
};

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    selectedTab: {
     
    },
    tabContent: {
        textTransform: 'capitalize',
        color: theme.Colors.primary,
        fontSize: theme.MetricsSizes.regular,
        fontWeight: theme.fontWeight.bold,
      },
      tabOptionsContainer:{
        border: '0.5px solid',
        borderColor: theme.Colors.greyDark,
      }

  })
);

const OrdersAndProfileTab = ({
  backgroundColor,
  height,
  displayContent,
  onTabChange,
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
    <>
       <Tabs
          value={tabToDisplay}
          onChange={handleTabChange}
          orientation="vertical"
          className={classes.tabOptionsContainer}
        >
          {displayContent.map((item, index) => {
            return (
              <Tab
                key={index}
                value={index}
                label={
                  <div className={classes.contentContainer}>
                    <Typography className={classes.textStyle}>
                      {item}
                    </Typography>
                  </div>
                }
                className={classes.tabContent}
              />
            );
          })}
        </Tabs>
        <Divider className={classes.horizontalDivider} />
        </>
  );
};

export default OrdersAndProfileTab;
 