// State argument is not application state (only the state that this reducer is responsible for)
// Redux won't allow you to return an undefined state; set default to null if undefined
export default function(state = null, action) {
  switch(action.type) {
    case 'CATEGORY_SELECTED':
      return action.payload;
  }

  return state;
}