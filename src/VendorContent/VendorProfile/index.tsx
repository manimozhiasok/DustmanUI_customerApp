// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/styles';
// import { Grid, Theme, Typography, useTheme } from '@material-ui/core';
// import {
//   CompletedOrdersIcon,
//   PendingOrdersIcon,
//   ConfirmedOrdersIcon
// } from 'src/Assets/Images';
// import ProfileAddressModel from './profileAddressModel';
// import { useTranslation } from 'react-i18next';
// import { ORIENTATION, PROFILE_TAB_VALUES } from 'src/Config/constant';
// import { ListItemCell, UHAccordionComp, UHTabComponent } from 'src/components';
// import ProfileContent from './profileContent';
// import ChangeLanguage from './ChangeLanguage';
// import ChangeUsertype from './ChangeUsertype';
// import useUserInfo from 'src/hooks/useUserInfo';
// import { Help, Outline, SignOut, Translate, UserSwitch } from 'src/Assets';
// import { ChevronRight, ExpandMore } from '@material-ui/icons';

// const useStyles = makeStyles((theme: Theme) => ({
//   mainContainer: {
//     padding: theme.spacing(6.5, 3, 6.5, 3),
//     background: theme.Colors.whitePure,
//     margin: theme.spacing(1.75, 0, 1.75, 0)
//   },
//   tabContainer: {
//     border: '0.5px solid',
//     borderColor: theme.Colors.greyDark,
//     paddingTop: theme.spacing(4)
//   },
//   tabContentEachContainer: {
//     border: '0.5px solid',
//     borderColor: theme.Colors.greyDark,
//     padding: theme.spacing(0, 2.5),
//     backgroundColor: theme.Colors.whiteLightGrey
//   },
//   selectedTabStyle: {
//     color: theme.Colors.whitePure,
//     background: theme.Colors.secondary,
//     fontWeight: theme.fontWeight.medium
//   },
//   tabContentStyle: {
//     maxHeight: 650,
//     overflowY: 'scroll'
//   },
//   tabContentContainer: {
//     margin: theme.spacing(0, 2)
//   },
//   accordionProfileStyle: {
//     margin: theme.spacing(0, 0, 3, 0)
//   },
//   accordionSummaryStyle: {
//     padding: theme.spacing(2, 4.5, 2, 1.5)
//   },
//   accordionSummary: {
//     padding: theme.spacing(3, 2, 3, 0)
//   },
//   accordionStaticContentStyle: {
//     padding: theme.spacing(3, 2, 3, 0),
//     backgroundColor: theme.Colors.whiteLightGrey,
//     cursor: 'pointer',
//     borderBottom: '0.5px solid',
//     borderBottomColor: theme.Colors.greyDark
//   },
//   accordionClassName: {
//     borderBottom: '0.5px solid',
//     borderBottomColor: theme.Colors.greyDark
//   },
//   avatarStyle: {
//     height: 64,
//     width: 64
//   },
//   textStyle: {
//     marginLeft: theme.spacing(2.5),
//     fontSize: theme.MetricsSizes.small_xx + 1,
//     color: theme.Colors.mediumGrey,
//     fontWeight: theme.fontWeight.bold
//   }
// }));

// const RenderIconText = ({ image, text }) => {
//   const classes = useStyles();
//   return (
//     <Grid container alignItems="center">
//       <img src={image} alt={'image'} />
//       <Typography className={classes.textStyle} component="div">
//         {text}
//       </Typography>
//     </Grid>
//   );
// };

// function VendorProfile() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const { userAddressDetails, userDetails } = useUserInfo();
//   const [selectedTab, setSelectedTab] = useState<number>(
//     PROFILE_TAB_VALUES.myAccount
//   );
//   const { t } = useTranslation();
//   const [openModal, setOpenModal] = useState<any>({
//     open: false
//   });

//   const OrdersTabItems = [
//     {
//       tabIcon: PendingOrdersIcon,
//       label: t('PROFILE.account'),
//       value: PROFILE_TAB_VALUES.myAccount
//     },
//     {
//       tabIcon: ConfirmedOrdersIcon,
//       label: t('PROFILE.language'),
//       value: PROFILE_TAB_VALUES.changeLanguage
//     },
//     {
//       tabIcon: CompletedOrdersIcon,
//       label: t('PROFILE.userType'),
//       value: PROFILE_TAB_VALUES.changeUserType
//     }
//   ];

//   const onTabChange = (tabValue: any) => {
//     setSelectedTab(tabValue);
//   };

//   const accordionContent = [
//     {
//       id: 1,
//       accContentDetail: () => <ProfileContent />,
//       renderAccordionTitle: () => (
//         <ListItemCell
//           avatarImg={userDetails?.image_url}
//           title={userDetails?.first_name}
//           subTitle={userDetails?.email}
//           avatarClassNameStyles={classes.avatarStyle}
//           titleStyle={{
//             color: theme.Colors.mediumGrey,
//             fontWeight: theme.fontWeight.bold,
//             fontSize: theme.MetricsSizes.small_xxx + 1
//           }}
//           subTitleStyle={{
//             fontWeight: theme.fontWeight.regular,
//             fontSize: theme.MetricsSizes.tiny_xxx + 1,
//             color: theme.Colors.mediumBlack
//           }}
//         />
//       )
//     }
//   ];

//   const accContent = [
//     {
//       id: 2,
//       accContentDetail: () => <ChangeLanguage />,
//       renderAccordionTitle: () => (
//         <RenderIconText image={Translate} text={t('PROFILE.language')} />
//       )
//     },
//     {
//       id: 3,
//       accContentDetail: () => <ChangeUsertype />,
//       renderAccordionTitle: () => (
//         <RenderIconText image={UserSwitch} text={t('PROFILE.userType')} />
//       )
//     }
//   ];

//   const staticContents = [
//     {
//       text: t('PROFILE.help'),
//       image: Help
//     },
//     {
//       text: t('PROFILE.about'),
//       image: Outline
//     },
//     {
//       text: t('PROFILE.logout'),
//       image: SignOut
//     }
//   ];

//   const renderExpandIcons = (isActiveAccordion: boolean) => {
//     if (isActiveAccordion) {
//       return <ExpandMore />;
//     } else {
//       return <ChevronRight />;
//     }
//   };

//   const renderTabContent = () => {
//     return (
//       <Grid className={classes.tabContentContainer}>
//         <UHAccordionComp
//           config={accordionContent}
//           accordionSummaryClassName={classes.accordionSummaryStyle}
//           accordionOuterContainerClassName={classes.accordionProfileStyle}
//           isBorder={true}
//           customActiveAccItem={[selectedTab]}
//           expanded={selectedTab === PROFILE_TAB_VALUES.myAccount}
//           renderExpandIcons={renderExpandIcons}
//         />
//         <Grid className={classes.tabContentEachContainer}>
//           <UHAccordionComp
//             config={accContent}
//             accordionSummaryClassName={classes.accordionSummary}
//             accordionOuterContainerClassName={classes.accordionClassName}
//             customActiveAccItem={[selectedTab]}
//           />
//           {staticContents.map((item, index) => {
//             return (
//               <Grid
//                 key={index}
//                 className={classes.accordionStaticContentStyle}
//                 component="div"
//               >
//                 <RenderIconText image={item?.image} text={item?.text} />
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Grid>
//     );
//   };

//   return (
//     <>
//       <Grid className={classes.mainContainer}>
//         <UHTabComponent
//           currentTabVal={selectedTab}
//           tabContent={OrdersTabItems}
//           orientation={ORIENTATION.VERTICAL}
//           tabClasses={{ selected: classes.selectedTabStyle }}
//           tabIndicatorColor={theme.Colors.primary}
//           isDivider={false}
//           tabContainerClassName={classes.tabContainer}
//           renderTabContent={renderTabContent}
//           tabContentClassName={classes.tabContentStyle}
//           onTabChange={onTabChange}
//         />
//       </Grid>
//       {openModal && (
//         <ProfileAddressModel
//           onClose={() => setOpenModal(false)}
//           open={openModal}
//           {...openModal}
//         />
//       )}
//     </>
//   );
// }

// export default VendorProfile;
function VendorProfile() {
  return <>Profile</>;
}
export default VendorProfile;
