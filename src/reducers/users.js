export default function(state = {}, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state.users,
        users: action.payload
      };
      
    default:
      return state;
  }
}
