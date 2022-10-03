import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  Typography,
  createStyles,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import IconTileComponent from '../IconTileComponent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
  bgColor: string;
  height: string;
  NumOfTabs: number;
};

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    titleStyle: {
     
    },
    titleContainerStyle:{
      padding: theme.spacing(3,3,3,4),
    },
    eachAccordianStyle:{
      margin:theme.spacing(2.5,0,2.5,0),
    }
    
  })
);

const AccordionComponent = ({
  backgroundColor,
  height,
  displayContent,
  onTabChange,
  }: {
  backgroundColor?: string;
  height?: string;
  displayContent?: {
    summaryHeading: string,
    content: any,
    displayIcon: any
  }[];
  onTabChange?: any;
  }) => {
  const classes = useStyles({
    bgColor: backgroundColor,
    height,
    NumOfTabs: displayContent.length
  });


  return (
    <div>
    {displayContent.map((item, index) => {
        return (
            <Accordion key={index} className={classes.eachAccordianStyle}>
            
            <AccordionSummary 
              className={classes.titleContainerStyle}
              expandIcon={<ExpandMoreIcon />}
              >
              <IconTileComponent 
                iconToDisplay={item.displayIcon}
              />
              <Typography className={classes.titleStyle}> {item.summaryHeading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {item.content}
                </Typography>
            </AccordionDetails>
            </Accordion>
            );
        })}
 </div>
  );
};

export default AccordionComponent;