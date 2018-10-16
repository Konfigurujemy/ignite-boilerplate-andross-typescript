
export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle_dark_mode':
      return {...state,isDarkMode:!state.isDarkMode};
    case 'toggle_direction':
      return {...state,isLtr:!state.isLtr};
    default:
      return {...state,isDarkMode:false,isLtr:true};
  }
};