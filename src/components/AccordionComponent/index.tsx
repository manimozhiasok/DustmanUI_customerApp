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
    titleStyle: {},
    titleContainerStyle: {
      padding: theme.spacing(3, 3, 3, 4)
    },
    eachAccordionStyle: {
      margin: theme.spacing(2.5, 0, 2.5, 0),
      boxShadow: 'none'
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
        );
      })}
    </Grid>
  );
};

export default AccordionComponent;
