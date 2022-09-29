import React from 'react';
import { Link, useTheme } from '@material-ui/core';

type Props = {
  title: string;
  color?: string;
  disabled?: boolean;
  style?: object;
  underline?: 'none' | 'always' | 'hover';
  onClick?: (title: string) => void;
};

const LinkComp = (props: Props) => {
  const {
    title,
    color,
    disabled,
    style,
    underline = 'always',
    onClick
  } = props;
  const theme = useTheme();

  const handleClick = () => {
    if (disabled) {
      return;
    }
    onClick(title);
  };

  return (
    <Link
      style={{
        opacity: disabled ? 0.3 : 1,
        color: color || '#4285F4',
        cursor: disabled ? 'default' : 'pointer',
        fontSize: theme.MetricsSizes.small_xxx,
        fontWeight: theme.fontWeight.regular,
        ...style
      }}
      onClick={handleClick}
      underline={underline}
    >
      {title}
    </Link>
  );
};
export default LinkComp;
