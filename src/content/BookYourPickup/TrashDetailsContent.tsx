import {
  Box,
  Grid,
  InputAdornment,
  makeStyles,
  TextareaAutosize,
  Theme,
  Typography,
  useTheme
} from '@material-ui/core';
import React from 'react';
import { TextInputComponent } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({
  textStyle: {
    color: theme.Colors.deepGrey,
    fontWeight: 400,
    fontSize: '16px'
  },
  optionStyle: {
    color: '#11294C',
    fontSize: '12px'
  },
  textAreaStyle: {
    fontSize: theme.MetricsSizes.small_xxx,
    fontWeight: theme.fontWeight.regular,
    padding: theme.spacing(1),
    color: theme.Colors.lightBlack,
    borderColor: theme.Colors.lightWhiteGrey,
    backgroundColor: theme.Colors.lightWhiteGrey
  },
  imageStyle: {
    borderRadius: '6px',
    width: '80px',
    height: '80px',
  },
  gridStyle: {
    paddingRight: theme.spacing(0.5)
  }
}));

type Prop = {
  imgUrl: any;
  key: number;
  handleClickImage: (e: any) => void;
};
export const Content = ({ imgUrl, key, handleClickImage }: Prop) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.gridStyle}>
        <img
          src={imgUrl}
          alt="image not found"
          key={key}
          className={classes.imageStyle}
          onClick={handleClickImage}
        />
      </Grid>
    </>
  );
};

export const LeftContent = ({ edit }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel="Category"
          labelColor={theme.Colors.deepGrey}
          textColor={theme.Colors.lightBlack}
          backgroundColor={theme.Colors.lightWhiteGrey}
          value={edit.getValue('order_items').toString()}
          borderColor={theme.Colors.lightWhiteGrey}
          inputHeight={theme.MetricsSizes.large_xxx}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInputComponent
          inputLabel="Approximate Weight"
          placeholderText="Enter approx. Weight"
          value={edit.getValue('quantity_kg')}
          labelColor={theme.Colors.deepGrey}
          textColor={theme.Colors.lightBlack}
          backgroundColor={theme.Colors.lightWhiteGrey}
          borderColor={theme.Colors.lightWhiteGrey}
          inputHeight={theme.MetricsSizes.large_xxx}
          InputProps={{
            endAdornment: <InputAdornment position="start">kg.</InputAdornment>,
            style: {
              backgroundColor: theme.Colors.lightWhiteGrey
            }
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.textStyle}>
          Description <label className={classes.optionStyle}>(Optional)</label>
        </Typography>
        <TextareaAutosize
          minRows={5}
          cols={31}
          value={edit.getValue('description')}
          placeholder="Any instructions for our pickup executive"
          className={classes.textAreaStyle}
        />
      </Grid>
    </Grid>
  );
};

// export const imagesForSlide = [
//   {
//     id: 2,
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4bECuQKN8KRcAYPQwE03Vt5CZBWqPCTr9g&usqp=CAU'
//   },
//   {
//     id: 3,
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_cn3Z1iNyocdOSpJ3_tCWyFQ6LZARnznMQ&usqp=CAU'
//   },
//   {
//     id: 3,
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
//   },
//   {
//     id: 4,
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
//   },
//   {
//     id: 5,
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
//   },
//   {
//     id: 6,
//     imageUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
//   }
// ];
