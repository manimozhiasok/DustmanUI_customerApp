import React from 'react';
import {
  makeStyles,
  Grid,
  Theme,
  Typography,
  createStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
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
  expandIcon?: boolean;
  accordionPadding?: boolean;
  accordionDetailPadding?: boolean;
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
        padding: (props) =>
          props.accordionPadding ? theme.spacing(3.25, 6.5, 1, 6.5) : 'none'
      },
      '& .MuiAccordion-root.Mui-expanded:last-child': {
        margin: theme.spacing(2.5, 0)
      }
    },
    eachAccordionOuterContainer: {
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
        display: (props) => (props.expandIcon ? 'flex' : 'none')
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
      padding: (props) =>
        props.accordionDetailPadding ? theme.spacing(0, 6.5, 4.5, 6.5) : 'none',
      display: 'block'
    },
    subText: {
      marginLeft: 20,
      color: ' #343434',
      fontWeight: 700,
      fontSize: '17px'
    },
    userDetails: {
      marginLeft: 20,
      fontWeight: 400,
      fontSize: ' 11px',
      lineHeight: '0px'
    },
    isDivider: {
      padding: theme.spacing(1, 0),
      margin: `5px 0 0 ${theme.spacing(0.5)}px`
    }
  })
);

const AccordionComponent = ({
  backgroundColor,
  height,
  displayContent,
  withBorder,
  isProfile,
  isDivider,
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
    displayIcon: any;
    userName?: string;
    userEmail?: string;
    background?: any;
  }[];
  background?: any;
  onTabChange?: any;
  withBorder?: boolean;
  isProfile?: boolean;
  accordionDetailPadding?: boolean;
  isDivider?: boolean;
  summaryPadding?: any;
  accBorderColor?: any;
  expandMoreIcon?: any;
  summaryMargin?: any;
  isMyAccount?: boolean;
  expandIcon?: boolean;
  accordionPadding?: boolean;

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
            direction="row"
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
                  {isMyAccount && <img src={item.displayIcon} alt={'image'} />}
                  {isMyAccount && (
                    <div>
                      <p className={classes.subText}>{item.userName}</p>
                      <p className={classes.userDetails}>{item.userEmail}</p>
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
              {/* <Grid className={classes.isDivider}>
              <Divider/>
              </Grid> */}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AccordionComponent;
