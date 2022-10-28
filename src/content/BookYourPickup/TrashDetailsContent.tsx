import {
  Box,
  Grid,
  InputAdornment,
  makeStyles,
  TextareaAutosize,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import React from 'react';
import { TextInputComponent } from 'src/components';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  textStyle: {
    color: theme.Colors.deepGrey
  },
  optionStyle: {
    color: theme.Colors.primary,
    fontSize: theme.MetricsSizes.small_x
  },
  textAreaStyle: {
    fontSize: theme.MetricsSizes.small_x,
    fontWeight: theme.fontWeight.regular,
    fontFamily: 'DM Sans',
    padding: theme.spacing(1),
    width: '100%',
    color: theme.Colors.lightBlack,
    borderColor: theme.Colors.lightWhiteGrey,
    backgroundColor: theme.Colors.lightWhiteGrey,
    borderRadius: theme.MetricsSizes.tiny_x,
    '&:focus': {
      outline: 'none !important',
      borderWidth: '1px',
      borderColor: theme.Colors.lightWhiteGrey
    }
  },
  textarea: {
    resize: 'both',
    marginTop: '-50px'
  }
}));

export const LeftContent = ({ edit, trashData }) => {
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();

  const getTrashValue = () => {
    const data =
      edit.getValue('order_items').length &&
      edit.getValue('order_items').map((element) => {
        return (
          trashData.length &&
          trashData.filter((list) => list.id === element)[0].name
        );
      });
    return data.length ? data.toString() : '';
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel={t('category')}
          labelColor={theme.Colors.deepGrey}
          textColor={theme.Colors.darkGrey}
          backgroundColor={theme.Colors.lightWhiteGrey}
          // value={edit.getValue('order_items')}
          value={getTrashValue()}
          borderColor={theme.Colors.lightWhiteGrey}
          inputHeight={theme.MetricsSizes.large_xxx}
          inputBorderRadius={theme.MetricsSizes.tiny_x}
          inputTextSize={theme.MetricsSizes.small_xx}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel={t('PICKUP.weight')}
          placeholderText={t('PICKUP.approxWeight')}
          value={edit.getValue('quantity_kg')}
          onChange={(e) =>
            edit.update({ quantity_kg: parseInt(e.target.value) })
          }
          labelColor={theme.Colors.deepGrey}
          textColor={theme.Colors.lightBlack}
          backgroundColor={theme.Colors.lightWhiteGrey}
          borderColor={theme.Colors.lightWhiteGrey}
          inputHeight={theme.MetricsSizes.large_xxx}
          InputProps={{
            endAdornment: <InputAdornment position="start">kg.</InputAdornment>,
            style: {
              backgroundColor: theme.Colors.lightWhiteGrey
            }
          }}
          inputBorderRadius={theme.MetricsSizes.tiny_x}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.textStyle}>
          {t('PICKUP.description')}
          <label className={classes.optionStyle}>(Optional)</label>
        </Typography>
        <TextareaAutosize
          minRows={5}
          value={edit.getValue('description')}
          onChange={(e) => edit.update({ description: e.target.value })}
          placeholder={t('PICKUP.anyInstructionsForOurPickupExecutive')}
          className={classes.textAreaStyle}
        />
      </Grid>
    </Grid>
  );
};
