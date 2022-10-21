import { useTheme, Grid, Typography, Box } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { ButtonComp, LoginHeaderComp } from 'src/components';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { TermsAndConditionComp } from './TermsAndConditionComp';
import SelectUserComp from './SelectUserComp';
import { useEffect, useState } from 'react';
import { API_SERVICES } from 'src/Services';
import { HTTP_STATUSES } from 'src/Config/constant';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(5)
  }
}));

const ChooseUserType = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const [userTypes, setUserTypes] = useState([]);
  const handleContinueClick = () => {
    navigateTo('/homepage/customer-info', { replace: true });
  };

  const fetchData = async () => {
    const response: any = await API_SERVICES.generalService.getAllUserTypes();
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.user) {
        setUserTypes(response.data.user.slice(0, 3));
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid>
      <LoginHeaderComp
        title={t('LOGIN.signUp')}
        subText={t('LOGIN.chooseUserType')}
      />
      <SelectUserComp
        userTypeItems={userTypes}
        selectedVal={undefined}
        onClickRadioButton={undefined}
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
  );
};

export default ChooseUserType;
