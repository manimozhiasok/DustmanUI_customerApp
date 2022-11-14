import React, { useRef, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Theme, Typography, useTheme } from '@material-ui/core';
import {
  VendorHelp,
  VendorAbout,
  VendorSignOut,
  VendorTranslate,
  VendorSwitch,
  pending,
  Completed,
  confirmed,
  confirmedWhite,
  pendingWhite,
  completedWhite,
  AvatarCustomer
} from 'src/Assets';
import { useTranslation } from 'react-i18next';
import {
  HTTP_STATUSES,
  LANGUAGE_ID,
  ORIENTATION,
  PROFILE_TAB_VALUES,
  USER_TYPE_ID
} from 'src/Config/constant';
import {
  ListItemCell,
  UHAccordionComp,
  UHAddressModalComp,
  UHIconTextComp,
  UHSelectComp,
  UHTabComponent
} from 'src/components';
import ProfileContent from './ProfileContent';
import useVendorInfo from 'src/hooks/useVendorInfo';
import { ChevronRight, ExpandLess, ExpandMore } from '@material-ui/icons';
import { UHIconTextProps } from 'src/components/UHIconTextComp';
import { useNavigate } from 'react-router';
import { API_SERVICES } from 'src/dustmanUI/Services';
import toast from 'react-hot-toast';
import { VendorAddressData } from 'src/dustmanUI/Services/vendorAddressService';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    padding: theme.spacing(6.5, 3, 6.5, 3),
    background: theme.Colors.whitePure,
    margin: theme.spacing(1.75, 0, 1.75, 0)
  },
  tabContainer: {
    border: '0.5px solid',
    borderColor: theme.Colors.greyDark,
    paddingTop: theme.spacing(4)
  },
  tabContentEachContainer: {
    border: '0.5px solid',
    borderColor: theme.Colors.greyDark,
    padding: theme.spacing(0, 2.5),
    backgroundColor: theme.Colors.whiteLightGrey
  },
  selectedTabStyle: {
    color: theme.Colors.whitePure,
    background: theme.Colors.orangePrimary,
    fontWeight: theme.fontWeight.medium
  },
  tabContentStyle: {
    maxHeight: 650,
    overflowY: 'scroll'
  },
  tabContentContainer: {
    margin: theme.spacing(0, 2)
  },
  accordionProfileStyle: {
    margin: theme.spacing(0, 0, 3, 0)
  },
  accordionSummaryStyle: {
    padding: theme.spacing(2, 4.5, 2, 1.5)
  },
  accordionSummary: {
    padding: theme.spacing(3, 2, 3, 0)
  },
  accordionDetailStyle: {
    padding: theme.spacing(2, 3.5, 4.5, 2.25)
  },
  accordionSummaryExpanded: { padding: theme.spacing(3, 2, 0, 0) },
  accordionStaticContentStyle: {
    padding: theme.spacing(3, 2, 3, 0),
    backgroundColor: theme.Colors.whiteLightGrey,
    cursor: 'pointer',
    borderBottom: '0.5px solid',
    borderBottomColor: theme.Colors.greyDark
  },
  accordionStaticContentStyle1: {
    padding: theme.spacing(3, 2, 3, 0),
    backgroundColor: theme.Colors.whiteLightGrey,
    cursor: 'pointer'
  },
  accordionClassName: {
    borderBottom: '0.5px solid',
    borderBottomColor: theme.Colors.greyDark
  },
  avatarStyle: {
    height: 64,
    width: 64
  },
  textStyle: {
    fontSize: theme.MetricsSizes.small_xx + 1,
    color: theme.Colors.mediumGrey,
    fontWeight: theme.fontWeight.bold
  }
}));

type RenderIconTextProp = UHIconTextProps & {
  image?: any;
  text?: string;
  renderDetail?: () => JSX.Element;
};

const RenderIconText = (props: RenderIconTextProp) => {
  const { image, text, renderDetail, ...rest } = props;
  const classes = useStyles();
  const renderComponent = () => {
    if (renderDetail) {
      return renderDetail();
    }
    return <Typography className={classes.textStyle}>{text}</Typography>;
  };

  return (
    <UHIconTextComp icon={image} renderComponent={renderComponent} {...rest} />
  );
};

type ProfileUpdateProp = {
  user_type?: number;
  language_id?: number;
  name?: string;
  full_address?: string;
  contact_name?: string;
  email_id?: string;
  image_url?: string;
};

const VendorProfile = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { vendorAddressDetails, vendorDetails, updateVendorInfo } =
    useVendorInfo();
  const navigateTo = useNavigate();
  const [selectedTab, setSelectedTab] = useState<number>(
    PROFILE_TAB_VALUES.myAccount
  );
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState<any>({
    open: false
  });
  const fileInputRef = useRef(null);

  const staticContents = [
    { id: 1, text: t('PROFILE.help'), image: VendorHelp },
    { id: 2, text: t('PROFILE.about'), image: VendorAbout },
    { id: 3, text: t('PROFILE.logout'), image: VendorSignOut }
  ];

  const languageData = [
    { label: 'English', value: LANGUAGE_ID.english },
    { label: 'தமிழ்', value: LANGUAGE_ID.tamil },
    { label: 'Hindi', value: LANGUAGE_ID.hindi }
  ];

  const userTypeData = [
    { label: 'Home', value: USER_TYPE_ID.home },
    { label: 'Commercial', value: USER_TYPE_ID.commercial },
    { label: 'Industry', value: USER_TYPE_ID.industry }
  ];

  const OrdersTabItems = [
    {
      tabIcon: () =>
        selectedTab == 1 ? <img src={pendingWhite} /> : <img src={pending} />,
      label: t('PROFILE.account'),
      value: PROFILE_TAB_VALUES.myAccount
    },
    {
      tabIcon: () =>
        selectedTab == 2 ? (
          <img src={confirmedWhite} />
        ) : (
          <img src={confirmed} />
        ),
      label: t('PROFILE.language'),
      value: PROFILE_TAB_VALUES.changeLanguage
    },
    {
      tabIcon: () =>
        selectedTab == 3 ? (
          <img src={completedWhite} />
        ) : (
          <img src={Completed} />
        ),
      label: 'Order Management',
      value: PROFILE_TAB_VALUES.orderManagement
    }
  ];

  const handleUpdateProfileDetails = useCallback(
    async (updatedData: ProfileUpdateProp, sucMessage?: string) => {
      try {
        let successMessage =
          sucMessage ?? 'Account detail updated successfully!';
        const response: any =
          await API_SERVICES.vendorProfileService.updateVendorProfile(
            vendorDetails?.id,
            { data: updatedData, successMessage }
          );
        if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
          if (response?.data?.updatedData) {
            updateVendorInfo(response.data.updatedData.vendor_id);
          }
        }
        return response;
      } catch (e) {
        console.log(e, '--profile update err--');
      }
    },
    []
  );

  const handleAddNewAddress = useCallback(() => {
    setOpenModal({ open: true });
  }, []);
  const handleVerifyOtpNumber = useCallback(
    async (data: any, successMessage: string) => {
      const response: any =
        await API_SERVICES.vendorProfileService.replaceVendor(
          vendorDetails?.vendor_id,
          { data, successMessage }
        );
      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        updateVendorInfo(response?.data?.vendor.id);
      }
      return response;
    },
    []
  );

  const handleChangeFileUpload = async (event) => {
    try {
      const uploadedImg = event.target.files[0];
      let formData = new FormData();
      formData.append('file', uploadedImg);
      const uploadImageRes: any =
        await API_SERVICES.imageUploadService.uploadImage(formData);
      if (uploadImageRes?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (uploadImageRes?.data?.images.length) {
          let data = { image_url: uploadImageRes.data.images[0].Location };
          let successMessage = 'Profile image updated successfully!';
          handleUpdateProfileDetails(data, successMessage);
        }
      }
    } catch (err) {
      toast.error(err);
    }
  };

  const handleAddressSaveButtonClick = async (
    addressData: VendorAddressData,
    modalClose: () => void,
    dialogType: string
  ) => {
    if (dialogType === 'edit') {
      const response: any =
        await API_SERVICES.vendorAddressService.replaceVendorAddress(
          addressData?.id,
          {
            data: addressData,
            successMessage: 'Edit address  successfully',
            failureMessage: 'Failed to add new address'
          }
        );
      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (response?.data) {
          let id = response?.data?.vendor_id;
          updateVendorInfo(id);
          modalClose();
        }
      }
    } else {
      const response: any =
        await API_SERVICES.vendorAddressService.createAddress(
          vendorDetails?.vendor_id,
          {
            data: addressData,
            successMessage: 'New address added successfully',
            failureMessage: 'Failed to add new address'
          }
        );
      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (response?.data?.address) {
          let id = response?.data?.address?.vendor_id;
          updateVendorInfo(id);
          modalClose();
        }
      }
    }
  };

  const handleEditItem = async (item: any) => {
    setOpenModal({ open: true, item: item, dialogType: 'edit' });
  };

  const accordionContent = [
    {
      id: 1,
      accContentDetail: () => (
        <ProfileContent
          handleSaveEdits={handleUpdateProfileDetails}
          handleAddNewAddress={handleAddNewAddress}
          handleVerifyOtpNumber={handleVerifyOtpNumber}
          handleEditListItem={handleEditItem}
        />
      ),
      renderAccordionTitle: () => (
        <>
          <ListItemCell
            isEditIcon
            onClickEditIcon={() => fileInputRef.current.click()}
            avatarImg={
              vendorDetails?.image_url !== ''
                ? vendorDetails?.image_url
                : AvatarCustomer
            }
            title={vendorDetails?.contact_name}
            subTitle={vendorDetails?.email_id}
            avatarClassNameStyles={classes.avatarStyle}
            titleStyle={{
              color: theme.Colors.mediumGrey,
              fontWeight: theme.fontWeight.bold,
              fontSize: theme.MetricsSizes.small_xxx + 1
            }}
            subTitleStyle={{
              fontWeight: theme.fontWeight.regular,
              fontSize: theme.MetricsSizes.tiny_xxx + 1,
              color: theme.Colors.mediumBlack
            }}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            hidden
            onChange={handleChangeFileUpload}
          />
        </>
      )
    }
  ];

  const accordionContentSub = [
    {
      id: 2,
      expanded: selectedTab === PROFILE_TAB_VALUES.changeLanguage,
      accordionSummaryClassName:
        selectedTab === PROFILE_TAB_VALUES.changeLanguage
          ? classes.accordionSummaryExpanded
          : classes.accordionSummary,
      renderAccordionTitle: () =>
        selectedTab === PROFILE_TAB_VALUES.changeLanguage ? (
          <RenderIconText
            image={VendorTranslate}
            renderDetail={() => (
              <UHSelectComp
                initialValue={vendorDetails?.language_id}
                labelData={languageData}
                checkColor={theme.Colors.orangePrimary}
                handleChangeItem={(selectedVal) => {
                  if (selectedVal === vendorDetails?.language_id) {
                    return;
                  }
                  let data: ProfileUpdateProp = {
                    language_id: selectedVal
                  };
                  let successMessage = 'Language updated successfully';
                  handleUpdateProfileDetails(data, successMessage);
                }}
              />
            )}
            style={{ alignItems: 'flex-start' }}
          />
        ) : (
          <RenderIconText
            image={VendorTranslate}
            text={t('PROFILE.language')}
          />
        )
    },
    {
      id: 3,
      accordionSummaryClassName:
        selectedTab === PROFILE_TAB_VALUES.orderManagement
          ? classes.accordionSummaryExpanded
          : classes.accordionSummary,
      expanded: selectedTab === PROFILE_TAB_VALUES.orderManagement,
      renderAccordionTitle: () =>
        selectedTab === PROFILE_TAB_VALUES.orderManagement ? (
          <RenderIconText
            image={VendorSwitch}
            renderDetail={() => (
              <UHSelectComp
                initialValue={vendorDetails?.user_type}
                labelData={userTypeData}
                checkColor={theme.Colors.orangePrimary}
                handleChangeItem={(selectedVal) => {
                  if (selectedVal === vendorDetails?.user_type) {
                    return;
                  }
                  let data: ProfileUpdateProp = {
                    user_type: selectedVal
                  };
                  let successMessage = 'UserType updated successfully';
                  handleUpdateProfileDetails(data, successMessage);
                }}
              />
            )}
            style={{ alignItems: 'flex-start' }}
          />
        ) : (
          <RenderIconText
            image={VendorSwitch}
            text={t('PROFILE.orderManagement')}
          />
        )
    }
  ];

  const renderMyAccountExpandIcons = (isActiveAccordion: boolean) => {
    if (isActiveAccordion) {
      return <ExpandMore />;
    } else {
      return <ChevronRight />;
    }
  };

  const renderChangeLangUserExpandIcons = (isActiveAccordion: boolean) => {
    if (isActiveAccordion) {
      return <ExpandLess style={{ alignSelf: 'flex-start' }} />;
    } else {
      return <ExpandMore />;
    }
  };

  const handleClick = (id: number) => {
    if (id === 3) {
      localStorage.removeItem('vendorId');
      navigateTo('/dustman', { replace: true });
      toast.success('User logged out successfully!');
    }
  };

  const renderTabContent = () => {
    return (
      <Grid className={classes.tabContentContainer}>
        <UHAccordionComp
          config={accordionContent}
          accordionSummaryClassName={classes.accordionSummaryStyle}
          accordionOuterContainerClassName={classes.accordionProfileStyle}
          accordionDetailClassName={classes.accordionDetailStyle}
          isBorder={true}
          customActiveAccItem={[selectedTab]}
          renderExpandIcons={renderMyAccountExpandIcons}
          expanded={selectedTab === PROFILE_TAB_VALUES.myAccount}
        />
        <Grid className={classes.tabContentEachContainer}>
          <UHAccordionComp
            config={accordionContentSub}
            renderExpandIcons={renderChangeLangUserExpandIcons}
            accordionOuterContainerClassName={classes.accordionClassName}
            customActiveAccItem={[selectedTab]}
          />
          {staticContents.length &&
            staticContents.map((item, index) => {
              return (
                <Grid
                  key={index}
                  className={
                    item.id === staticContents.length
                      ? classes.accordionStaticContentStyle1
                      : classes.accordionStaticContentStyle
                  }
                  onClick={() => handleClick(item?.id)}
                >
                  <RenderIconText image={item?.image} text={item?.text} />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Grid className={classes.mainContainer}>
        <UHTabComponent
          currentTabVal={selectedTab}
          tabContent={OrdersTabItems}
          orientation={ORIENTATION.VERTICAL}
          tabClasses={{ selected: classes.selectedTabStyle }}
          tabIndicatorColor={theme.Colors.primary}
          isDivider={false}
          tabContainerClassName={classes.tabContainer}
          renderTabContent={renderTabContent}
          tabContentClassName={classes.tabContentStyle}
          onTabChange={(tabValue: any) => setSelectedTab(tabValue)}
        />
      </Grid>
      {openModal.open && (
        <UHAddressModalComp
          onClose={() => setOpenModal({ open: false })}
          handleSaveButtonClick={handleAddressSaveButtonClick}
          {...openModal}
        />
      )}
    </>
  );
};

export default VendorProfile;
