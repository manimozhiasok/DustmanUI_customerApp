import {
  Avatar,
  Badge,
  Chip,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Create } from '@material-ui/icons';

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
  },
  chipAlign: {
    paddingLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  chipStyle: {
    color: theme.Colors.greyNobel,
    fontSize: theme.MetricsSizes.small_x,
    fontWeight: theme.fontWeight.regular,
    borderColor: theme.Colors.whiteGreyLight,
    border: '1px solid'
  },
  editIconStyle: {
    color: theme.Colors.primary,
    bottom: 0,
    position: 'absolute',
    background: theme.Colors.grey,
    right: 0,
    width: 10,
    height: 10,
    '&:hover': {
      background: theme.Colors.grey
    }
  }
}));
type Props = {
  avatarImg?: string;
  title: string;
  subTitle?: string;
  renderComponent?: () => JSX.Element;
  avatarClassNameStyles?: any;
  titleStyle?: React.CSSProperties;
  isBadgeEnable?: boolean;
  listStyle?: React.CSSProperties;
  subTitleStyle?: React.CSSProperties;
  chipVariant?: any;
  chipSize?: any;
  chipText?: string;
  isEditIcon?: boolean;
  onClickEditIcon?: () => void;
};

const ListItemCell = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();

  const {
    avatarImg,
    subTitle,
    title,
    renderComponent,
    avatarClassNameStyles,
    titleStyle,
    isBadgeEnable = false,
    listStyle,
    subTitleStyle,
    chipVariant,
    chipSize,
    chipText,
    isEditIcon = false,
    onClickEditIcon
  } = props;

  return (
    <Grid
      container
      alignItems="center"
      style={{
        ...listStyle
      }}
    >
      {avatarImg && (
        <Grid
          item
          style={{
            marginRight: theme.MetricsSizes.small_xxx,
            position: 'relative'
          }}
        >
          <Avatar
            src={avatarImg}
            className={`${classes.avatarStyle} ${avatarClassNameStyles}`}
          />
          {isEditIcon && (
            <IconButton
              className={classes.editIconStyle}
              onClick={onClickEditIcon}
            >
              <Create style={{ padding: theme.MetricsSizes.tiny }} />
            </IconButton>
          )}
        </Grid>
      )}
      <Grid item xs>
        <Grid
          style={{
            display: 'flex'
          }}
        >
          <Typography
            style={{
              fontWeight: theme.fontWeight.medium,
              ...titleStyle
            }}
          >
            {title}
          </Typography>
          {chipText && (
            <Grid className={classes.chipAlign}>
              <Chip
                label={chipText}
                size={chipSize || 'small'}
                variant={chipVariant || 'outlined'}
                className={classes.chipStyle}
              />
            </Grid>
          )}
          {isBadgeEnable && (
            <Badge
              overlap="circular"
              badgeContent={'Kgs'}
              className={classes.badgeStyle}
            />
          )}
        </Grid>

        {subTitle && (
          <Typography
            variant="subtitle2"
            className={classes.textStyle}
            style={subTitleStyle}
          >
            {subTitle}
          </Typography>
        )}
        {renderComponent && renderComponent()}
      </Grid>
    </Grid>
  );
};
export default ListItemCell;
