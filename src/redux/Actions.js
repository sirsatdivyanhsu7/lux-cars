export const selectedListItem = selectedItemKey => {
  return {
    type: 'selected_item',
    payload: selectedItemKey,
  };
};
