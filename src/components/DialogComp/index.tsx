import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Theme
} from '@material-ui/core';
import React from 'react';
import ListItemCell from '../ListItemCell';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      padding: theme.spacing(1)
    },
    titleStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  };
});

type DialogProp = {
  open: boolean;
  dialogTitle: string;
  avatarImg?: React.ReactNode;
  renderDialogContent?: () => React.ReactNode;
  renderAction?: () => React.ReactNode;
  dialogIcon?: React.ReactNode;
  maxWidth?: any;
  onClose: () => void;
  dialogClasses?: any;
  dialogTitleStyle?: React.CSSProperties;
  rootStyle?: React.CSSProperties;
  children?: React.ReactNode;
  dialogTitleClasses?: any;
};

export const DialogTitleComp = ({
  avatarImg,
  dialogTitle,
  onClose,
  dialogTitleStyle
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.titleStyle}>
      <ListItemCell
        avatarImg={avatarImg}
        title={dialogTitle}
        titleStyle={dialogTitleStyle}
      />
      <Box>
        <CloseIcon onClick={onClose} fontSize="medium" color="disabled" />
      </Box>
    </Box>
  );
};

const DialogComp = ({
  open,
  dialogTitle,
  onClose,
  renderDialogContent,
  maxWidth,
  renderAction,
  avatarImg,
  dialogClasses,
  dialogTitleClasses,

  dialogTitleStyle,
  children
}: DialogProp) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={classes.root}
      maxWidth={maxWidth || 'lg'}
      classes={{ ...dialogClasses }}
    >
      <DialogTitle classes={{ ...dialogTitleClasses }}>
        <DialogTitleComp
          avatarImg={avatarImg}
          dialogTitle={dialogTitle}
          onClose={onClose}
          dialogTitleStyle={dialogTitleStyle}
        />
      </DialogTitle>
      <DialogContent>
        {(renderDialogContent && renderDialogContent()) || children}
      </DialogContent>
      {renderAction && <DialogActions>{renderAction()}</DialogActions>}
    </Dialog>
  );
};

export default DialogComp;
