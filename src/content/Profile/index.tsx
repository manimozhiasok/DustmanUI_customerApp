import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Theme, Typography, useTheme } from '@material-ui/core';
import {
  CompletedOrdersIcon,
  PendingOrdersIcon,
  ConfirmedOrdersIcon,
  AvatarCustomer
} from 'src/Assets/Images';
import ProfileAddressModel from './profileAddressModel';
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
  UHIconTextComp,
  UHSelectComp,
  UHTabComponent
} from 'src/components';
import ProfileContent from './profileContent';
import useUserInfo from 'src/hooks/useUserInfo';
import { Help, Outline, SignOut, Translate, UserSwitch } from 'src/Assets';
import { ChevronRight, ExpandLess, ExpandMore } from '@material-ui/icons';
import { UHIconTextProps } from 'src/components/UHIconTextComp';
import { useNavigate } from 'react-router';
import { API_SERVICES } from 'src/Services';
import toast from 'react-hot-toast';

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
    background: theme.Colors.secondary,
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

const Profile = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { userAddressDetails, userDetails, updateUserInfo } = useUserInfo();
  const navigateTo = useNavigate();
  const [selectedTab, setSelectedTab] = useState<number>(
    PROFILE_TAB_VALUES.myAccount
  );
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState<any>({
    open: false
  });

  const staticContents = [
    { id: 1, text: t('PROFILE.help'), image: Help },
    { id: 2, text: t('PROFILE.about'), image: Outline },
    { id: 3, text: t('PROFILE.logout'), image: SignOut }
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
      tabIcon: PendingOrdersIcon,
      label: t('PROFILE.account'),
      value: PROFILE_TAB_VALUES.myAccount
    },
    {
      tabIcon: ConfirmedOrdersIcon,
      label: t('PROFILE.language'),
      value: PROFILE_TAB_VALUES.changeLanguage
    },
    {
      tabIcon: CompletedOrdersIcon,
      label: t('PROFILE.userType'),
      value: PROFILE_TAB_VALUES.changeUserType
    }
  ];

  const onTabChange = (tabValue: any) => {
    setSelectedTab(tabValue);
  };

  const handleChangeItem = async (selectedVal: number, type?: string) => {
    try {
      if (
        selectedVal === userDetails?.user_type_id ||
        selectedVal === userDetails?.language_id
      ) {
        return;
      }
      let data: { language_id?: number; user_type_id?: number } = {
        user_type_id: selectedVal
      };
      let successMessage = 'UserType updated successfully';
      if (type === 'language') {
        data = {
          language_id: selectedVal
        };
        successMessage = 'Language updated successfully';
      }
      const response: any =
        await API_SERVICES.customerProfileService.updateCustomerProfile(
          userDetails?.id,
          { data, successMessage }
        );
      if (response?.status < HTTP_STATUSES.BAD_REQUEST) {
        if (response?.data?.profile) {
          updateUserInfo(response.data.profile.customer_id);
        }
      }
    } catch (e) {
      console.log(e, '--profile update err--');
    }
  };

  const onClickEditIcon = () => {};

  const accordionContent = [
    {
      id: 1,
      accContentDetail: () => <ProfileContent />,
      renderAccordionTitle: () => (
        <ListItemCell
          isEditIcon
          onClickEditIcon={onClickEditIcon}
          avatarImg={
            userDetails?.image_url !== ''
              ? userDetails?.image_url
              : AvatarCustomer
          }
          title={userDetails?.first_name}
          subTitle={userDetails?.email}
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
            image={Translate}
            renderDetail={() => (
              <UHSelectComp
                initialValue={userDetails?.language_id}
                labelData={languageData}
                handleChangeItem={(selectedVal) =>
                  handleChangeItem(selectedVal, 'language')
                }
              />
            )}
            style={{ alignItems: 'flex-start' }}
          />
        ) : (
          <RenderIconText image={Translate} text={t('PROFILE.language')} />
        )
    },
    {
      id: 3,
      accordionSummaryClassName:
        selectedTab === PROFILE_TAB_VALUES.changeUserType
          ? classes.accordionSummaryExpanded
          : classes.accordionSummary,
      expanded: selectedTab === PROFILE_TAB_VALUES.changeUserType,
      renderAccordionTitle: () =>
        selectedTab === PROFILE_TAB_VALUES.changeUserType ? (
          <RenderIconText
            image={UserSwitch}
            renderDetail={() => (
              <UHSelectComp
                initialValue={userDetails?.user_type_id}
                labelData={userTypeData}
                handleChangeItem={handleChangeItem}
              />
            )}
            style={{ alignItems: 'flex-start' }}
          />
        ) : (
          <RenderIconText image={UserSwitch} text={t('PROFILE.userType')} />
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
      localStorage.removeItem('customerId');
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
          onTabChange={onTabChange}
        />
      </Grid>
      {openModal && (
        <ProfileAddressModel
          onClose={() => setOpenModal(false)}
          open={openModal}
          {...openModal}
        />
      )}
    </>
  );
};

export default Profile;
