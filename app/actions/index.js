export function selectCategory(category) {
  // selectCategory is an action creator; it needs to return an action (an object w/ type property)
  console.log('selected category: ', category.title);
  return {
    type: 'CATEGORY_SELECTED',
    payload: category
  };
}