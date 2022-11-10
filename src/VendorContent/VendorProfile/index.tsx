import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Theme, Typography, useTheme } from '@material-ui/core';
import {
  CompletedOrdersIcon,
  PendingOrdersIcon,
  ConfirmedOrdersIcon,
  AvatarCustomer
} from 'src/Assets/Images';
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
import { Help, Outline, SignOut, Translate, UserSwitch } from 'src/Assets';
import { ChevronRight, ExpandLess, ExpandMore } from '@material-ui/icons';
import { UHIconTextProps } from 'src/components/UHIconTextComp';
import { useNavigate } from 'react-router';
import { API_SERVICES } from 'src/Services';
import useVendorInfo from 'src/hooks/useVendorInfo';
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

const VendorProfile = () => {
  const classes = useStyles();
  const theme = useTheme();
  // const { vendorDetails, updateVendorInfo } = useVendorInfo();
  const navigateTo = useNavigate();
  const [selectedTab, setSelectedTab] = useState<number>(
    PROFILE_TAB_VALUES.myAccount
  );
  const { t } = useTranslation();

  const staticContents = [
    { id: 1, text: t('PROFILE.help'), image: Help },
    { id: 2, text: t('PROFILE.about'), image: Outline },
    { id: 3, text: t('PROFILE.logout'), image: SignOut }
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
      label: t('PROFILE.orderManagement'),
      value: PROFILE_TAB_VALUES.orderManagement
    }
  ];

  const onTabChange = (tabValue: any) => {
    setSelectedTab(tabValue);
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
        <Grid className={classes.tabContentEachContainer}>
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
  );
};

export default VendorProfile;
