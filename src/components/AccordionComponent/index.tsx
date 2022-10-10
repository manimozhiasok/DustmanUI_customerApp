import React from 'react';
import {
  makeStyles,
  Grid,
  Theme,
  Typography,
  createStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import IconTileComponent from '../IconTileComponent';


type Props = {
  bgColor: string;
  height: string;
  NumOfTabs: number;
  withBorder: boolean;
  summaryPadding?: any;
  accBorderColor?: any;
};

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    eachAccordianOuterContainer: {
      position:"relative",
      border: (props)=> props.withBorder ? '0.5px solid' : 'none',
      borderColor: (props) => {return props.accBorderColor ? props.accBorderColor : theme.Colors.black}
    },
    titleContainerStyle: {
      padding: (props)=>{return props.summaryPadding} //theme.spacing(3, 3, 3, 4)
    },
    eachAccordionStyle: {
      margin: theme.spacing(2.5, 0, 2.5, 0),
      boxShadow: 'none'
    },
    line:{
      borderRight: "2px dashed",
      borderColor: theme.Colors.primary,
      height: "100%",
      position: "absolute",
      left: '-25px',
      top: '50px'

    }
  })
);

const AccordionComponent = ({
  backgroundColor,
  height,
  displayContent,
  onTabChange,
  withBorder,
  isProfile,
  summaryPadding,
  accBorderColor,
  expandMoreIcon
}: {
  backgroundColor?: string;
  height?: string;
  displayContent?: {
    summaryHeading: string;
    content: any;
    displayIcon: any;
  }[];
  onTabChange?: any;
  withBorder?: boolean;
  isProfile?: boolean;
  summaryPadding?: any;
  accBorderColor?: any;
  expandMoreIcon?:any;
}) => {
  const classes = useStyles({
    bgColor: backgroundColor,
    height,
    NumOfTabs: displayContent.length,
    withBorder,
    summaryPadding,
    accBorderColor
  });

  return (
    
    
    <Grid>
      {displayContent.map((item, index) => {
        return (
          <Grid key={index} container direction='row' className={classes.eachAccordianOuterContainer}>
          { !isProfile && (displayContent.length>index+1) && <Grid item className={classes.line} />}
          <Grid item style={{width:'100%'}}>
          <Accordion key={index} className={classes.eachAccordionStyle}>
            <AccordionSummary
              className={classes.titleContainerStyle}
              expandIcon={expandMoreIcon ? expandMoreIcon : ''}
            >
              { !isProfile && <IconTileComponent iconToDisplay={item.displayIcon} /> }
              <Typography className={classes.titleStyle}>
                {item.summaryHeading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid>{item.content}</Grid>
            </AccordionDetails>
          </Accordion>
          </Grid>
    </Grid>
        );
      })}
   </Grid> 
  );
};

export default AccordionComponent;
