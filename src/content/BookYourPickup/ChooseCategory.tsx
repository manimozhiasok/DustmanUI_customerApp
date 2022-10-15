import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ChooseCategoryComponent } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({}));
type CategoryProps = {
  selectedValues?: any[],
  edit: any,
  data: any[]
}
function ChooseCategory({ edit, data, selectedValues }: CategoryProps) {
  const [selectedItems, setSelectedItems] = useState(selectedValues || []);
  const [selectedItemId, setSelectedItemId] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (e: { target: { id: any; value: any } }) => {
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
    if (items.length < selectedItems.length) {
      // setSelectedItems(items);
      setSelectedItems(items);
    } else {
      setSelectedItems([...selectedItems, checkedValue]);
      //selectedItems.push(checkedValue)
      console.log('selectedItems',selectedItems);
      
    }
    edit.update({ order_items: selectedItems });
  };

  useEffect(()=>
  setSelectedItems(selectedItems)
  )

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
