import { useTheme, Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import {
  ButtonComp,
  LoginHeaderComp,
  TextInputComponent
} from 'src/components';
import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { TermsAndConditionComp } from './TermsAndConditionComp';
import { useEdit } from 'src/hooks/useEdit';
import { isValidEmail } from 'src/Utils';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(5)
  }
}));

const CreateAccountSignUp = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const [isError, setIsError] = useState(false);
  const { state }: any = useLocation();

  const initialValues = {
    user_type_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    image_url: ''
  };
  const edit = useEdit(initialValues);
  const RequiredFields = ['first_name', 'last_name', 'email'];

  const handleContinueClick = () => {
    if (
      !edit.allFilled(...RequiredFields) ||
      !isValidEmail(edit.getValue('email'))
    ) {
      setIsError(true);
      return;
    }
    navigateTo('/dustman-home/choose-user-type', {
      state: {
        formEdits: { ...initialValues, ...edit.edits },
        customerId: state?.customerId
      }
    });
  };

  return (
    <Grid>
      <LoginHeaderComp
        title={t('LOGIN.signUp')}
        subText={t('LOGIN.userProfile')}
      />
      <Grid className={classes.container}>
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.firstName')}
          value={edit.getValue('first_name')}
          onChange={(e) => edit.update({ first_name: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            isError &&
            !edit.allFilled('first_name') &&
            'Please Enter your first name'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.lastName')}
          value={edit.getValue('last_name')}
          onChange={(e) => edit.update({ last_name: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            isError &&
            !edit.allFilled('last_name') &&
            'Please Enter your last name'
          }
        />
        <TextInputComponent
          inputHeight={66}
          placeholderText={t('LOGIN.email')}
          value={edit.getValue('email')}
          onChange={(e) => edit.update({ email: e.target.value })}
          inputBorderRadius={0}
          textColor={theme.Colors.primary}
          helperText={
            ((isError && !edit.allFilled('email')) ||
              (isError && !isValidEmail(edit.getValue('email')))) &&
            'Please Enter your valid email address'
          }
        />
        <ButtonComp
          buttonText={t('LOGIN.continue')}
          backgroundColor={theme.Colors.secondary}
          btnBorderRadius={theme.MetricsSizes.tiny}
          onClickButton={handleContinueClick}
          style={{ margin: theme.spacing(2, 0) }}
        />
        <TermsAndConditionComp />
      </Grid>
    </Grid>
  );
};

export default CreateAccountSignUp;
