import { Avatar, Badge, Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  textStyle: {
    color: theme.Colors.greyLight
  },
  avatarStyle: {
    height: 42,
    width: 42
  },
  badgeStyle: {
    marginLeft: theme.MetricsSizes.tiny_xxx,
    '& .MuiBadge-badge': {
      background: theme.Colors.redPrimary,
      fontSize: theme.MetricsSizes.tiny_xx,
      fontWeight: theme.fontWeight.regular,
      padding: theme.spacing(1, 0),
      color: theme.Colors.white
    }
  }
}));
type Props = {
  avatarImg?: string;
  title: string;
  subTitle?: string;
  renderComponent?: () => JSX.Element;
  avatarClassNameStyles?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  isBadgeEnable?: boolean;
};

const ListItemCell = (props: Props) => {
  const classes = useStyles();
  const {
    avatarImg,
    subTitle,
    title,
    renderComponent,
    avatarClassNameStyles,
    titleStyle,
    isBadgeEnable = false
  } = props;
  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {avatarImg && (
        <Grid style={{ marginRight: 15 }}>
          <Avatar
            src={avatarImg}
            className={`${classes.avatarStyle} ${avatarClassNameStyles}`}
          />
        </Grid>
      )}
      <Grid>
        <Grid
          style={{
            display: 'flex'
          }}
        >
          <Typography style={{ fontWeight: 500, ...titleStyle }}>
            {title}
          </Typography>
          {isBadgeEnable && (
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent={'Kgs'}
              className={classes.badgeStyle}
            />
          )}
        </Grid>

        {subTitle && (
          <Typography variant="subtitle2" className={classes.textStyle}>
            {subTitle}
          </Typography>
        )}
        {renderComponent && renderComponent()}
      </Grid>
    </Box>
  );
};
export default ListItemCell;
