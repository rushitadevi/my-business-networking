export default function(state = {}, action) {
  switch (action.type) {
    case "LOGIN_DATA":
      return {
        ...state.userLoginList,
        userLoginList: state.userLoginList.concat(action.payload)
      };
    
    default:
      return state;
  }
}
