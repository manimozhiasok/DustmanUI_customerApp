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
import useVendorInfo from 'src/hooks/useVendorInfo';
import { setCustomerId, setVendorId } from 'src/Utils';

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
  const { updateVendorInfo } = useVendorInfo();

  const handleContinueClick = async () => {
    // if (!edit.allFilled('user_type_id')) {
    //   return toast.error('Please select any one of the user type!');
    // }
    let data = { ...state?.formEdits, ...edit.edits };
    console.log(data, 'choose user type data');
    const response: any = await API_SERVICES.vendorProfileService.create(
      state?.vendorId,
      { data, successMessage: 'Customer profile created successfully!' }
    );
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.vendorProfile?.vendor_id) {
        updateVendorInfo(response.data.vendorProfile.vendor_id);
        setVendorId(response.data.vendorProfile.vendor_id);
        navigateTo('/dustman/vendor-home', { replace: true });
      }
    }
    // navigateTo('/vendor-home/vendor-info', { replace: true });
    // navigateTo('/dustman/vendor-login/vendor-approval', {});
  };

  const fetchData = async () => {
    const response: any = await API_SERVICES.generalService.getAllVehicles();
    console.log(response, 'vechile response');
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.vehicles) {
        setUserTypes(response.data.vehicles);
      }
    }
  };

  const onClickRadioButton = (val: number) => {
    edit.update({
      vehicle_owned: val
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
        userTypeItems={userTypes}
        selectedVal={edit.getValue('vehicle_owned')}
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
