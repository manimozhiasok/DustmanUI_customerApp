import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { ButtonComp } from 'src/components';
import PendingModal from 'src/content/OrdersPage/PendingModal';

type Props = {
  bgColor: string;
  height: string;
};

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    outerContainer: {
      border: '0.5px solid',
      borderColor: theme.Colors.greyDark,
      width: '100%',
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3.1, 2, 3.8, 2.9)
    },
    imageContainer: { padding: theme.spacing(0, 2, 0, 0) },
    statusContainer: {},
    contentContainer: {
      height: '100%',
      justifyContent: 'space-evenly'
    },
    actionButtonsContainer: {}
  })
);

const OrderListingComponent = ({
  backgroundColor,
  height,
  displayContent
}: {
  backgroundColor?: string;
  height?: string;
  displayContent: {
    displayImage: any;
    orderId: number;
  }[];
}) => {
  const classes = useStyles({
    bgColor: backgroundColor,
    height
  });
  const [modalOpen, setModalOpen] = useState<any>({ open: false });

  const onClickButton = () => {
    setModalOpen({
      open: true,
    });
  };

  return (
    <>
          <ButtonComp
          btnBorderRadius={20}
          buttonText={'Details'}
          buttonFontSize={12}
          btnWidth={50}
          height="25px"
          onClickButton={() => onClickButton()}
        />
      {displayContent.map((item, index) => {
        return (
          <Grid
            key={index}
            container
            direction="row"
            className={classes.outerContainer}
          >
            <Grid item xs={true}>
              <Grid container direction="row">
                <Grid item className={classes.imageContainer}>
                  <img src={item.displayImage} alt="image" />
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    className={classes.contentContainer}
                  >
                    <Grid item>ORDER#{item.orderId}</Grid>
                    <Grid item className={classes.actionButtonsContainer}>
                      Buttons
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.statusContainer}>
              Status
            </Grid>
          </Grid>
        );
      })}
       {modalOpen.open && (
          <PendingModal
            onClose={() => setModalOpen({ open: false })}
            {...modalOpen}
          />
        )}
    </>
  );
};

export default OrderListingComponent;
