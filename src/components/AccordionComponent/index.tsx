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
import AccordionIcon from './AccordionIcon';

type Props = {
  bgColor: string;
  height: string;
  NumOfTabs: number;
  withBorder?: boolean;
  summaryPadding?: any;
  accBorderColor?: any;
  summaryMargin?: any;
  expandIcon?: boolean;
  accordionDetailPadding?: any;
  accordionPadding?: any;
  background?: any;
};

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& .MuiAccordionSummary-root': {
        transition: 'none'
      },
      '& .MuiAccordionSummary-root.Mui-expanded': {
        padding: (props) => props.accordionPadding || 'none'
      },
      '& .MuiAccordion-root.Mui-expanded:last-child': {
        margin: theme.spacing(2.5, 0)
      }
    },
    eachAccordionOuterContainer: {
      position: 'relative',
      border: (props) => (props.withBorder ? '0.5px solid' : 'none'),
      borderColor: (props) => props.accBorderColor || theme.Colors.secondary
    },
    accordionSummaryStyle: {
      padding: (props) => props.summaryPadding || 0,
      '& .MuiAccordionSummary-expandIcon.Mui-expanded': {
        display: (props) => (props.expandIcon ? 'flex' : 'none')
      }
    },
    accordionDetailStyle: {
      padding: (props) => props.accordionDetailPadding || 0,
      display: 'block'
    },
    accordionStyle: {
      margin: (props) => props.summaryMargin || 0,
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
    }
  })
);

const AccordionComponent = ({
  backgroundColor,
  height,
  displayContent,
  withBorder,
  isProfile,
  summaryPadding,
  accBorderColor,
  expandMoreIcon,
  summaryMargin,
  accordionDetailPadding,
  isMyAccount,
  expandIcon,
  accordionPadding,
  background
}: {
  backgroundColor?: string;
  height?: string;
  displayContent?: {
    summaryHeading: string;
    content: any;
    displayIcon?: any;
    profileIcon?: any;
    userName?: string;
    userEmail?: string;
    background?: any;
  }[];
  background?: any;
  onTabChange?: any;
  withBorder?: boolean;
  isProfile?: boolean;
  accordionDetailPadding?: any;
  summaryPadding?: any;
  accBorderColor?: any;
  expandMoreIcon?: any;
  summaryMargin?: any;
  isMyAccount?: boolean;
  expandIcon?: boolean;
  accordionPadding?: any;
  accordionExpanded?: number;
}) => {
  const classes = useStyles({
    bgColor: backgroundColor,
    height,
    NumOfTabs: displayContent.length,
    withBorder,
    summaryPadding,
    accBorderColor,
    summaryMargin,
    expandIcon,
    accordionPadding,
    accordionDetailPadding,
    background
  });

  return (
    <Grid>
      {displayContent.map((item, index) => {
        return (
          <Grid
            key={index}
            container
            className={classes.eachAccordionOuterContainer}
          >
            {!isProfile && displayContent.length > index + 1 && (
              <Grid item className={classes.line} />
            )}
            <Grid item className={classes.root}>
              <Accordion key={index} className={classes.accordionStyle}>
                <AccordionSummary
                  className={classes.accordionSummaryStyle}
                  expandIcon={expandMoreIcon ? expandMoreIcon : ''}
                >
                  {!isProfile && (
                    <IconTileComponent
                      background={item.background}
                      iconToDisplay={item.displayIcon}
                    />
                  )}
                  {isMyAccount && (
                    <AccordionIcon
                      profileIcon={item.profileIcon}
                      userName={item.userName}
                      userEmail={item.userEmail}
                    />
                  )}
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
