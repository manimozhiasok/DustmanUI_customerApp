import React, { useState } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ChooseCategoryComponent } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({}));

function ChooseCategory({ edit, data }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (e) => {
    console.log('event', e);
    let targetId = Number(e.target.id);
    const checkedValue = e.target.value;
    console.log(selectedItems.find((itemId) => itemId === targetId));
    if (selectedItems.find((itemId) => itemId === targetId)) {
      console.log('code to remove item');
    } else {
      selectedItems.push(checkedValue);
    }
    edit.update({ order_items: selectedItems });
    console.log(edit.edits);
  };

  return (
    <>
      <ChooseCategoryComponent onChange={handleChange} data={data} />
    </>
  );
}

export default ChooseCategory;
