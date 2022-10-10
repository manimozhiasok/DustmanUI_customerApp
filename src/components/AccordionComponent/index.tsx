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
    root: {
      width: '100%',
      '& .MuiAccordionSummary-root': {
        transition: 'none'
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        padding: theme.spacing(3.25, 6.5, 1, 6.5)
      },
      '& .MuiAccordion-root.Mui-expanded:last-child': {
        margin: theme.spacing(2.5, 0)
      }
    },
    eachAccordionOuterContainer: {
      position: 'relative'
    },
    accordionSummaryStyle: {
      padding: theme.spacing(4.25, 6.5),
      '& .MuiAccordionSummary-expandIcon.Mui-expanded': {
        display: 'none'
      }
    },
    accordionStyle: {
      margin: theme.spacing(2.5, 0),
      boxShadow: 'none'
    },
    line: {
      borderRight: '2px dashed',
      borderColor: theme.Colors.primary,
      height: '100%',
      position: 'absolute',
      left: '-25px',
      top: '50px'
    },
    titleStyle: {
      fontSize: theme.MetricsSizes.small_xxx,
      fontWeight: theme.fontWeight.bold,
      color: theme.Colors.primary
    },
    accordionDetailStyle: {
      padding: theme.spacing(0, 6.5, 4.5, 6.5)
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
          <Grid
            key={index}
            container
            direction="row"
            className={classes.eachAccordionOuterContainer}
          >
            {displayContent.length > index + 1 && (
              <Grid item className={classes.line} />
            )}
            <Grid item className={classes.root}>
              <Accordion key={index} className={classes.accordionStyle}>
                <AccordionSummary
                  className={classes.accordionSummaryStyle}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <IconTileComponent iconToDisplay={item.displayIcon} />
                  <Typography className={classes.titleStyle}>
                    {item.summaryHeading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetailStyle}>
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
