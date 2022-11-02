import { useTheme, Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { ButtonComp, LoginHeaderComp } from 'src/components';
import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { TermsAndConditionComp } from './TermsAndConditionComp';
import SelectUserComp from './SelectUserComp';
import { useEffect, useState } from 'react';
import { API_SERVICES } from 'src/Services';
import { HTTP_STATUSES } from 'src/Config/constant';
import { useEdit } from 'src/hooks/useEdit';
import toast from 'react-hot-toast';
import useUserInfo from 'src/hooks/useUserInfo';
import { vehicleImage } from 'src/Assets';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(5)
  }
}));
const displayElement = [
  {
    image: vehicleImage,
    text: 'Two wheeler',
    id: 1
  },
  {
    image: vehicleImage,
    text: 'Two wheeler',
    id: 2
  },
  {
    image: vehicleImage,
    text: 'Two wheeler',
    id: 3
  }
];

const VendorChooseUserType = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { state }: any = useLocation();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const [userTypes, setUserTypes] = useState([]);
  const edit = useEdit(state?.formEdits);
  const { updateUserInfo } = useUserInfo();

  const handleContinueClick = async () => {
    if (!edit.allFilled('user_type_id')) {
      return toast.error('Please select any one of the user type!');
    }
    let data = { ...state?.formEdits, ...edit.edits };
    const response: any = await API_SERVICES.vendorProfileService.create(
      state?.customerId,
      { data, successMessage: 'Customer profile created successfully!' }
    );
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.customerProfile?.customer_id) {
        await updateUserInfo(response?.data?.customerProfile?.customer_id);
        navigateTo('/vendor-home', { replace: true });
      }
    }
    navigateTo('/vendor-home/vendor-info', { replace: true });
    navigateTo('/dustman/vendor-login/vendor-approval', {});
  };

  const fetchData = async () => {
    const response: any = await API_SERVICES.generalService.getAllUserTypes();
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.user) {
        setUserTypes(response.data.user.slice(0, 3));
      }
    }
  };

  const onClickRadioButton = (val: number) => {
    edit.update({
      user_type_id: val
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid>
      <LoginHeaderComp
        title={t('LOGIN.signUp')}
        subText={t('LOGIN.vehicleOwned')}
      />
      <SelectUserComp
        userTypeItems={displayElement}
        selectedVal={edit.getValue('user_type_id')}
        onClickRadioButton={onClickRadioButton}
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

export default VendorChooseUserType;
