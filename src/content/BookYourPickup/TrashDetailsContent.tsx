import {
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
    color: theme.Colors.secondaryBlack,
    borderColor: theme.Colors.lightWhiteGrey,
    backgroundColor: theme.Colors.lightWhiteGrey
  },
  imageStyle: {
    borderRadius: '6px',
    width: '80px',
    height: '80px'
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
      <div style={{ paddingRight: '5px' }}>
        <img
          src={imgUrl}
          alt="image not found"
          key={key}
          className={classes.imageStyle}
          onClick={handleClickImage}
        />
      </div>
    </>
  );
};

export const LeftContent = ({edit,handleData}) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <TextInputComponent
        inputLabel="Category"
        labelColor={theme.Colors.deepGrey}
        txtColor={theme.Colors.secondaryBlack}
        backgroundColor={theme.Colors.lightWhiteGrey}
        value={edit.getValue('order_items').toString()}
        borderColor={theme.Colors.lightWhiteGrey}
        inputHeight={theme.MetricsSizes.large_xxx}
        //onChange={handleData}
      />
      <TextInputComponent
        inputLabel="Approximate Weight"
        placeholderText="Enter approx. Weight"
        value={edit.getValue('quantity_kg')}
        labelColor={theme.Colors.deepGrey}
        txtColor={theme.Colors.secondaryBlack}
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
      <Typography className={classes.textStyle}>
        Description <label className={classes.optionStyle}>(Optional)</label>
      </Typography>
      <TextareaAutosize
        minRows={5}
        cols={30}
        value={edit.getValue('description')}
        placeholder="Any instructions for our pickup executive"
        className={classes.textAreaStyle}
      />
    </>
  );
};

export const imagesForSlide = [
    {
      id: 2,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4bECuQKN8KRcAYPQwE03Vt5CZBWqPCTr9g&usqp=CAU'
    },

    {
      id: 3,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_cn3Z1iNyocdOSpJ3_tCWyFQ6LZARnznMQ&usqp=CAU'
    },
    {
      id: 3,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
    },
    {
      id: 4,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
    },
    {
      id: 5,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
    },
    {
      id: 6,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqQttpKeNfOLaBMaxVrdFHij2HMXNDBorcg&usqp=CAU'
    }
  ];