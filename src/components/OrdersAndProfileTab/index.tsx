import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  createStyles,
  Divider,
  Backdrop,
  useTheme
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
    tabContent: {
        textTransform: 'capitalize',
        color: theme.Colors.primary,
        fontSize: theme.MetricsSizes.regular,
        fontWeight: theme.fontWeight.bold,
      },
      tabOptionsContainer:{

      },
      textStyle:{
        paddingLeft: theme.spacing(2)
      },
      tabIndicator:{
        width: '5px',
        left: "0px",
      },
      selectedTab: {
        color: theme.Colors.whitePure,
        background: theme.Colors.secondary,
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
  displayContent?: {
    tabIcon: any,
    tabItem: string,
  }[];
  onTabChange?: any;
  }) => {
  const classes = useStyles({
    bgColor: backgroundColor,
    height,
    NumOfTabs: displayContent.length
  });
  const theme = useTheme();
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
          indicatorColor="primary"
          className={classes.tabOptionsContainer}
          classes={{
            indicator: classes.tabIndicator,
          }}
        >
          {displayContent.map((item, index) => {
            return (
              <Tab
                key={index}
                value={index}
                label={
                  <Grid container direction='row' className={classes.contentContainer}>
                    <img 
                      src={item.tabIcon} 
                      alt="icon" 
                      
                      />
                      
                    <Typography className={classes.textStyle}>
                      {item.tabItem}
                    </Typography>
                  </Grid>
                }
                className={classes.tabContent}
                classes={{
                  selected: classes.selectedTab,
                }}
              />
            );
          })}
        </Tabs>
        <Divider className={classes.horizontalDivider} />
        </>
  );
};

export default OrdersAndProfileTab;
 