import { Box } from '@material-ui/core';
import logo from '../../Assets/Images/Logo.svg';

function Logo() {
  return (
    <Box
      style={{
        display: 'flex',
        flex: 1
      }}
    >
      <img
        style={{
          display: 'flex',
          height: '100%',
          width: 'inherit'
        }}
        src={logo}
      />
    </Box>
  );
}

export default Logo;
