import React from 'react';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  AccordionProps
} from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import IconTileComponent from '../IconTileComponent';

const useAccordionStyles = makeStyles((theme: Theme) => ({
  summary: {
    position: 'relative',
    backgroundColor: theme.Colors.whiteLightGrey,
    '&:hover': {
      backgroundColor: theme.Colors.whiteLightGrey
    },
    padding: '0 15px',
    '& .MuiAccordionSummary-content': {
      margin: 0
    }
  },
  accordionStyle: {
    margin: 0,
    boxShadow: 'none'
  },
  expandIconLeft: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  expandIconRight: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleStyle: {
    fontSize: theme.MetricsSizes.small_xxx,
    fontWeight: theme.fontWeight.bold,
    color: theme.Colors.primary
  },
  accordionDetailStyle: {
    display: 'block',
    backgroundColor: theme.Colors.whiteLightGrey
  }
}));

export type AccordionCompProps = AccordionProps & {
  accordionTitle?: React.ReactNode;
  disabled?: boolean;
  onOpen?: (id: string | number) => void;
  onClose?: (id: string | number) => void;
  activeAccId?: string | number;
  activeItemIds?: any[];
  activeColor?: string;
  iconPosition?: string;
  renderExpandIcons?: (isActive: boolean) => React.ReactNode;
  accordionClassName?: any;
  accordionSummaryClassName?: any;
  accordionDetailClassName?: any;
  tileIconActiveBgColor?: string;
  isLeftTileIcon?: boolean;
  tileIcon?: any;
  accContentDetail: () => React.ReactNode;
  renderAccordionTitle: () => React.ReactNode;
};

export const AccordionItem = (props) => {
  const {
    accordionTitle,
    disabled = false,
    onOpen,
    onClose,
    activeAccId,
    activeItemIds,
    activeColor,
    iconPosition = 'right',
    renderExpandIcons,
    accordionClassName,
    accordionSummaryClassName,
    accordionDetailClassName,
    isLeftTileIcon = false,
    tileIcon,
    tileIconActiveBgColor,
    accContentDetail,
    renderAccordionTitle,
    ...Rest
  }: AccordionCompProps = props;

  const isActive = activeItemIds.includes(activeAccId);
  const classes = useAccordionStyles();
  const theme = useTheme();

  const handleChange = (event, isExpanded) => {
    if (isExpanded) {
      onOpen(activeAccId);
      return;
    }
    onClose(activeAccId);
  };

  const renderDefaultExpandIcons = () => {
    if (renderExpandIcons) {
      return renderExpandIcons(isActive);
    } else if (isActive) {
      return <ExpandLess />;
    } else {
      return <ExpandMore />;
    }
  };

  const getAccordionSummaryStyle = () => {
    return iconPosition === 'left'
      ? classes.expandIconLeft
      : classes.expandIconRight;
  };

  return (
    <Accordion
      onChange={handleChange}
      expanded={isActive}
      disabled={!!disabled}
      className={`${classes.accordionStyle} ${accordionClassName}`}
      {...Rest}
    >
      <AccordionSummary
        className={`${classes.summary} ${accordionSummaryClassName}`}
        IconButtonProps={null}
      >
        {isLeftTileIcon ? (
          <IconTileComponent
            background={!isActive && theme.Colors.greyAccent}
            iconToDisplay={tileIcon}
          />
        ) : null}
        <Grid className={getAccordionSummaryStyle()}>
          {accordionTitle && (
            <Grid className={classes.titleStyle}>{accordionTitle}</Grid>
          )}
          {renderAccordionTitle && renderAccordionTitle()}
          {renderDefaultExpandIcons()}
        </Grid>
      </AccordionSummary>
      <AccordionDetails
        className={`${classes.accordionDetailStyle} ${accordionDetailClassName}`}
      >
        {accContentDetail && accContentDetail()}
      </AccordionDetails>
    </Accordion>
  );
};
