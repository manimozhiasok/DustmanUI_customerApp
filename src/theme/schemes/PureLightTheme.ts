import { createTheme, ThemeOptions } from '@material-ui/core/styles';
import '@mui/lab/themeAugmentation';

const defaultColors = {
  BLUE: {
    900: '#11294C',
    800: '#333333',
    700: '#222222',
    600: '#16192C',
    500: '#7C8DB5',
    400: '#718096',
    300: '#E6EDFF',
    dark: '#263238',
    200: '#010A44',
    a800: '#1C1C1E',
    100: '#103D43'
  },
  GREEN: {
    900: '#6CB044',
    800: '#163C45',
    700: '#6BB043',
    600: '#388E3C'
  },
  WHITE: {
    900: '#FFFF',
    800: '#718096',
    700: '#F5F5F5',
    500: '#EFEFEF',
    300: '#FCFCFC'
  },
  GREY: {
    900: '#667080',
    800: '#D2D2D2',
    700: '#9FA2B4',
    600: '#C5C7CD',
    500: '#EBEBEB',
    400: '#919AA9',
    300: '#696969',
    200: '#E0E0E0',
    100: '#F2F2F2',
    a200: '#CCCCCC',
    a300: '#C4C4C4',
    a700: '#343434',
    a600: '#4B506D',
    a500: '#585858',
    a800: '#4F4F4F',
    a100: '#BDBDBD',
    a900: '#979797',
    a400: '#A5A5A5',
   aa700: '#9D9999',
  },
  BLACK: {
    900: ' #000000',
    800: '#252733',
    700: '#808080',
    500: '#454545',
    100: '#7B6F72'
  },
  ORANGE: {
    900: '#FF3B30',
    800: '#F68B1F'
  },
  RED: {
    900: '#E10600',
    800: '#1D1617'
  }
};
const Colors = {
  primary: defaultColors.BLUE[900],
  secondary: defaultColors.GREEN[900],
  blueMediumDark: defaultColors.BLUE[200],
  blueDark: defaultColors.BLUE[800],
  blueLight: defaultColors.BLUE[500],
  blueMedium: defaultColors.BLUE[700],
  blueGrey: defaultColors.BLUE[600],
  lightBlue: defaultColors.BLUE[300],
  blueGreen: defaultColors.GREEN[800],
  primaryGreen: defaultColors.GREEN[700],
  darkGreen: defaultColors.GREEN[600],
  white: defaultColors.WHITE[900],
  blueAsh: defaultColors.BLUE[400],
  greyDark: defaultColors.GREY[800],
  black: defaultColors.BLACK[900],
  orange: defaultColors.ORANGE[900],
  orangePrimary: defaultColors.ORANGE[800],
  greyLight: defaultColors.GREY[600],
  greyPrimary: defaultColors.GREY[900],
  greyMedium: defaultColors.GREY[700],
  grey: defaultColors.GREY[500],
  greyScaleMedium: defaultColors.GREY['a300'],
  blackPrimary: defaultColors.BLACK[800],
  whitePure: defaultColors.WHITE[900],
  whitePrimary: defaultColors.WHITE[700],
  accentGrey: defaultColors.GREY[400],
  lightShadeGrey: defaultColors.GREY['a200'],
  navBlue: defaultColors.BLUE.dark,
  inputText: defaultColors.GREY[300],
  redPrimary: defaultColors.RED[900],
  rusticRed: defaultColors.RED[800],
  lightGrey: defaultColors.GREY[200],
  mediumGrey: defaultColors.GREY['a700'],
  mediumBlack: defaultColors.BLACK[700],
  greyScale: defaultColors.GREY['a600'],
  deepGrey: defaultColors.GREY['a500'],
  lightWhiteGrey: defaultColors.GREY['100'],
  darkGrey: defaultColors.GREY['a800'],
  darkBlue: defaultColors.BLUE['a800'],
  blackGrey: defaultColors.BLACK[100],
  lightBlack: defaultColors.BLACK[500],
  whiteGrey: defaultColors.WHITE[500],
  lightBlueGrey: defaultColors.BLUE[100],
  whiteLightGrey: defaultColors.WHITE[300],
  lightBlackGrey: defaultColors.GREY['a100'],
  greyAccent: defaultColors.GREY['a900'],
  whiteGreyLight: defaultColors.GREY['a400'],
  greyNobel: defaultColors.GREY['aa700'],
};

const fontWeight = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  mediumBold: 600,
  bold: 700,
  black: 900
};

export const MetricsSizes = {
  tiny: 4,
  tiny_x: 6,
  tiny_xx: 8,
  tiny_xxx: 10,

  small: 13,
  small_x: 12,
  small_xx: 14,
  small_xxx: 16,

  regular: 18,
  regular_x: 20,
  regular_xx: 22,
  regular_xxx: 24,

  medium: 26,
  medium_x: 28,
  medium_xx: 30,
  medium_xxx: 32,

  large: 34,
  large_x: 36,
  large_xx: 40,
  large_xxx: 48,

  x_large: 52,
  xl_large: 54,
  xx_large: 64
};

export const PureLightTheme = (options?: ThemeOptions) =>
  createTheme(
    { ...options },
    {
      MetricsSizes: { ...MetricsSizes },
      Colors: { ...Colors },
      fontWeight: { ...fontWeight },
      general: {
        borderRadiusSm: MetricsSizes.tiny_x,
        borderRadius: MetricsSizes.tiny_xx,
        borderRadiusLg: MetricsSizes.small,
        borderRadiusXl: MetricsSizes.small_xx
      },
      sidebar: {
        width: ' 304px'
      },
      header: {
        appBarHeight: '120px'
      },
      palette: {
        primary: {
          light: Colors.blueLight,
          main: Colors.primary,
          dark: Colors.blueDark
        },
        secondary: {
          light: Colors.darkGreen,
          main: Colors.secondary,
          dark: Colors.blueGreen
        }
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1840
        }
      },
      spacingFac: (factor: any) => `${5 * factor}`,
      typography: {
        fontFamily: 'DM Sans',
        h1: {
          fontSize: 35,
          fontFamily: 'DM Sans'
        },
        h2: {
          fontSize: 30,
          fontFamily: 'DM Sans'
        },
        h3: {
          fontSize: 25,
          fontFamily: 'DM Sans'
        },
        h4: {
          fontSize: 16,
          fontFamily: 'DM Sans'
        },
        h5: {
          fontSize: 18,
          fontFamily: 'DM Sans'
        },
        h6: {
          fontSize: 15,
          fontFamily: 'DM Sans'
        },
        body1: {
          fontSize: 14,
          fontFamily: 'DM Sans'
        },
        body2: {
          fontSize: 12,
          fontWeight: 500,
          fontFamily: 'DM Sans'
        },
        button: {
          fontWeight: 500
        },
        caption: {
          fontSize: 13,
          textTransform: 'uppercase'
        },
        subtitle1: {
          fontSize: 14,
          fontFamily: 'DM Sans'
        },
        subtitle2: {
          fontWeight: 400,
          fontSize: 12,
          fontFamily: 'DM Sans'
        },
        overline: {
          fontSize: 13,
          fontWeight: 700,
          textTransform: 'uppercase'
        }
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            body: {
              scrollbarColor: '#D9D9D9',
              '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 5,
                borderRadius: 30
              },
              '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                border: '1px solid #D9D9D9',
                backgroundColor: '#D9D9D9'
              },
              '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
                {
                  backgroundColor: 'grey'
                }
            }
          }
        }
        ///---> need to move mui components overrides
        // MuiTab: {
        //   root: {
        //   }
        // }
      }
    }
  );
