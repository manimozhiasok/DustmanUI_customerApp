import { useContext } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs
} from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

type StyleProps = {
  logOutTextColor: string;
};
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  listItem: {
    '& > div': {
      '& > svg , path': {
        fill: theme.Colors.navBlue
      },
      color: theme.Colors.navBlue
    },
    '&:active, &.active, &.Mui-selected': {
      background: theme.Colors.primary,
      '& > div': {
        '& > svg , path': {
          fill: theme.Colors.white
        },
        color: theme.Colors.white
      }
    }
  },
  listItemLogout: {
    '& > div': {
      '& > svg , path': {
        fill: (props) =>
          props.logOutTextColor ? props.logOutTextColor : theme.Colors.navBlue
      },
      color: (props) =>
        props.logOutTextColor ? props.logOutTextColor : theme.Colors.navBlue
    },
    '&:active, &.active, &.Mui-selected': {
      background: theme.Colors.primary,
      '& > div': {
        '& > svg , path': {
          fill: theme.Colors.white
        },
        color: theme.Colors.white
      }
    }
  },
  ListItemGutter: {
    paddingLeft: 56,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.MetricsSizes.large_x
    }
  },
  listItemIcon: {
    paddingRight: theme.MetricsSizes.small_xx,
    minWidth: theme.MetricsSizes.small_xx
  }
}));

type Props = {
  routes: {
    name: string;
    path: string;
  }[];
  containerStyles?: any;
  logOutTextColor?: string;
};
const NavListItem = ({ routes, containerStyles, logOutTextColor }: Props) => {

  const theme: Theme = useTheme();
  const styles = useStyles({ logOutTextColor: logOutTextColor });

  return (
    <Box sx={containerStyles}>

    <Tabs
      value={1}
      //onChange={}
      textColor="primary"
    >
          {routes.map((item, index) => {
            return (
              <Tab
                key={index}
                value={index}              
                label={item.name}
              />
            );
          })}
        </Tabs>
    </Box>
  );
};

export default NavListItem;
