import React, { useState } from 'react';
import { useTheme, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  boldText: {
    color: theme.Colors.primary,
    fontWeight: theme.fontWeight.bold
  }
}));

export const TermsAndConditionComp = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme: Theme = useTheme();
  return (
    <Typography variant="subtitle2">
      {t('LOGIN.loginAndAccept')}
      <span className={classes.boldText}>{t('LOGIN.termsAndCondition')}</span>&
      <span className={classes.boldText}>{t('LOGIN.privacyAndPolicy')}</span>
    </Typography>
  );
};
