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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
  bgColor: string;
  height: string;
  NumOfTabs: number;
};

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    eachAccordianOuterContainer: {
      position: 'relative'
    },
    titleContainerStyle: {
      padding: theme.spacing(3, 3, 3, 4)
    },
    eachAccordionStyle: {
      margin: theme.spacing(2.5, 0, 2.5, 0),
      boxShadow: 'none'
    },
    line: {
      borderRight: '2px dashed',
      borderColor: theme.Colors.primary,
      height: '100%',
      position: 'absolute',
      left: '-25px',
      top: '50px'
    }
  })
);

const AccordionComponent = ({
  backgroundColor,
  height,
  displayContent,
  onTabChange
}: {
  backgroundColor?: string;
  height?: string;
  displayContent?: {
    summaryHeading: string;
    content: any;
    displayIcon: any;
  }[];
  onTabChange?: any;
}) => {
  const classes = useStyles({
    bgColor: backgroundColor,
    height,
    NumOfTabs: displayContent.length
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
            {displayContent.length > index + 1 && (
              <Grid item className={classes.line} />
            )}
            <Grid item style={{ width: '100%' }}>
              <Accordion key={index} className={classes.eachAccordionStyle}>
                <AccordionSummary
                  className={classes.titleContainerStyle}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <IconTileComponent iconToDisplay={item.displayIcon} />
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
