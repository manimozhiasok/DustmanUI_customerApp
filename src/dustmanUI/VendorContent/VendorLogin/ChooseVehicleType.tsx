import { useTheme, Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { ButtonComp, LoginHeaderComp } from 'src/components';
import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import SelectVehicleComp from './SelectVehicleComp';
import { useEffect, useState } from 'react';
import { API_SERVICES } from 'src/dustmanUI/Services';
import { HTTP_STATUSES } from 'src/Config/constant';
import { useEdit } from 'src/hooks/useEdit';
import toast from 'react-hot-toast';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(5)
  }
}));

const ChooseVehicleType = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { state }: any = useLocation();
  const theme = useTheme();
  const navigateTo = useNavigate();
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const edit = useEdit(state?.formEdits);

  const handleContinueClick = async () => {
    if (!edit.allFilled('vehicle_owned')) {
      return toast.error('Please select any one of the vehicle!');
    }
    let data = { ...state?.formEdits, ...edit.edits };
    const response: any = await API_SERVICES.vendorProfileService.create(
      state?.vendorId,
      { data, successMessage: 'Vendor profile created successfully!' }
    );
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      navigateTo('/dustman/vendor/vendor-approval', {
        replace: true
      });
    }
  };

  const fetchData = async () => {
    const response: any = await API_SERVICES.generalService.getAllVehicles();
    if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
      if (response?.data?.vehicles) {
        setVehicleTypes(response.data.vehicles);
      }
    }
  };

  const onClickVehicleCheckbox = (val: any[]) => {
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
        color={theme.Colors.orangePrimary}
      />
      <SelectVehicleComp
        vendorTypeItems={vehicleTypes}
        selectedVal={edit.getValue('vehicle_owned')}
        onClickVehicleCheckbox={onClickVehicleCheckbox}
      />
      <ButtonComp
        buttonText={t('LOGIN.continue')}
        backgroundColor={theme.Colors.orangePrimary}
        btnBorderRadius={theme.MetricsSizes.tiny}
        onClickButton={handleContinueClick}
        style={{ margin: theme.spacing(2, 0) }}
      />
    </Grid>
  );
};

export default ChooseVehicleType;
