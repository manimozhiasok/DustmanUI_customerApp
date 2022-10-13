import React, { useState } from 'react';
import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ChooseCategoryComponent } from 'src/components';

const useStyles = makeStyles((theme: Theme) => ({}));

function ChooseCategory({ edit, data }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (e) => {
    console.log('e from handleChange',e);
    console.log('e from handleChange',e.target);
    
    let targetId = e.target.id;
    if (selectedItemId.find((id) => id === targetId)) {
      selectedItemId.splice(targetId);
    } else {
      selectedItemId.push(targetId);
    }
    console.log('selectedItemId from handleChange', selectedItemId);
    setSelectedItemId(selectedItemId);

    const checkedValue = e.target.value;
    if (selectedItems.find((val) => val === checkedValue)) {
      selectedItems.splice(checkedValue);
    } else {
      selectedItems.push(checkedValue);
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
