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
  withBorder?: boolean;
  summaryPadding?: any;
  accBorderColor?: any;
  summaryMargin?: any;
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
    eachAccordianOuterContainer: {
      position: 'relative',
      border: (props) => (props.withBorder ? '0.5px solid' : 'none'),
      borderColor: (props) => {
        return props.accBorderColor ? props.accBorderColor : theme.Colors.black;
      }
    },
    titleContainerStyle: {
      //padding: (props)=>{return props.summaryPadding} //theme.spacing(3, 3, 3, 4)
    },
    accordionSummaryStyle: {
      padding: (props) => {
        return props.summaryPadding;
      },
      '& .MuiAccordionSummary-expandIcon.Mui-expanded': {
        display: 'none'
      }
    },
    accordionStyle: {
      margin: (props) => {
        return props.summaryMargin;
      },
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
  expandMoreIcon,
  summaryMargin,
  isMyAccount,
  accordionExpanded
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
  expandMoreIcon?: any;
  summaryMargin?: any;
  isMyAccount?: boolean;
  accordionExpanded?: number;
}) => {
  const classes = useStyles({
    bgColor: backgroundColor,
    height,
    NumOfTabs: displayContent.length,
    withBorder,
    summaryPadding,
    accBorderColor,
    summaryMargin
  });

  return (
    <Grid>
      {displayContent.map((item, index) => {
        return (
          <Grid
            key={index}
            container
            direction="row"
            className={classes.eachAccordianOuterContainer}
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
                    <IconTileComponent iconToDisplay={item.displayIcon} />
                  )}
                  {isMyAccount && <img src={item.displayIcon} alt="image" />}
                  {isMyAccount && (
                    <div>
                      <p
                        style={{
                          marginLeft: 20,
                          color: ' #343434',
                          fontWeight: '700',
                          fontSize: '17px'
                        }}
                      >
                        Viji{' '}
                      </p>
                      <p
                        style={{
                          marginLeft: 20,
                          fontWeight: 400,
                          fontSize: ' 11px',
                          lineHeight: '0px'
                        }}
                      >
                        {' '}
                        prabu@dustman.com{' '}
                      </p>
                    </div>
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
