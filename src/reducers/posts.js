export default function(state = {}, action) {
  switch (action.type) {
    case "ADD_POSTS":
      return {
        ...state,
        post: action.payload
      };
    case "GET_POSTS":
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
}
