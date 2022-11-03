import React, { useEffect } from 'react';
import { useState } from 'react';
import { AccordionCompProps, AccordionItem } from './AccordionItem';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';

type StyleProps = {
  isBorder?: boolean;
  containerBorderColor?: string;
};
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  eachAccordionOuterContainer: {
    position: 'relative',
    border: (props) => (props.isBorder ? '0.5px solid' : 'none'),
    borderColor: (props) => props.containerBorderColor || theme.Colors.greyDark
  },
  dashedLine: {
    borderRight: '2px dashed',
    borderColor: theme.Colors.primary,
    height: '100%',
    position: 'absolute',
    left: '-25px',
    top: '50px',
    bottom: '50px'
  }
}));

export type Config = {
  id: number | string;
  title?: string;
  accContentDetail?: () => React.ReactNode;
  renderAccordionTitle?: () => React.ReactNode;
};

interface Props extends Partial<AccordionCompProps> {
  containerBorderColor?: string;
  isBorder?: boolean;
  isDashedLine?: boolean;
  config: Config[];
  accordionOuterContainerClassName?: any;
  mainContainerStyle?: any;
  customActiveAccItem?: string[] | number[];
}

const UHAccordionComp = (props: Props) => {
  const {
    config,
    isBorder = false,
    containerBorderColor,
    isDashedLine = false,
    accordionOuterContainerClassName,
    mainContainerStyle,
    customActiveAccItem,
    ...rest
  } = props;
  const theme = useTheme();
  const classes = useStyles({ isBorder, containerBorderColor });
  const [activeItemIds, setActiveItemIds] = useState([]);
  let activeItem = customActiveAccItem ?? [];

  const onOpen = (id: string | number) => {
    if (activeItem.length) {
      return;
    }
    setActiveItemIds([...activeItemIds, id]);
  };

  const onClose = (id: string | number) => {
    if (activeItem.length) {
      return;
    }
    if (activeItemIds.includes(id)) {
      const newActiveIds = activeItemIds.filter((activeId) => activeId !== id);
      setActiveItemIds(newActiveIds);
    }
  };

  useEffect(() => {
    if (activeItem.length) {
      setActiveItemIds(activeItem);
    }
  }, [activeItem]);

  return (
    <Grid>
      {config.map((item: Config, index) => {
        return (
          <Grid
            key={index}
            className={`${classes.eachAccordionOuterContainer} ${accordionOuterContainerClassName}`}
          >
            {isDashedLine && config.length > index + 1 && (
              <Grid item className={classes.dashedLine} />
            )}
            <AccordionItem
              accordionTitle={item?.title}
              onOpen={onOpen}
              onClose={onClose}
              activeAccId={item.id}
              activeItemIds={activeItemIds}
              {...item}
              {...rest}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default UHAccordionComp;
