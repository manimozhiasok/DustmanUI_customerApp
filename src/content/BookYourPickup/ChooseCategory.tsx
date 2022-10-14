import React, { useState } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ChooseCategoryComponent } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({}));

function ChooseCategory({ edit, data }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (e: { target: { id: any; value: any } }) => {
    console.log('e from handleChange', e);
    console.log('e from handleChange', e.target);

    let targetId = e.target.id;
    let itemId = selectedItemId.filter((id) => targetId !== id);
    if (itemId.length < selectedItemId.length) {
      setSelectedItemId(itemId);
    } else {
      setSelectedItemId([...selectedItemId, targetId]);
    }
    console.log('selectedItemId from handleChange', selectedItemId);

    const checkedValue = e.target.value;
    const items = selectedItems.filter(
      (selectedItem) => checkedValue !== selectedItem
    );
    console.log('items', items);
    if (items.length < selectedItems.length) {
      setSelectedItems(items);
    } else {
      setSelectedItems([...selectedItems, checkedValue]);
    }
    edit.update({ order_items: selectedItems });
    console.log(edit.edits);
  };

  return (
    <>
      <ChooseCategoryComponent
        onChange={handleChange}
        data={data}
        selectedItemId={selectedItemId}
      />
    </>
  );
}

export default ChooseCategory;
