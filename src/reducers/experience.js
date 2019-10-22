export default function(state = {}, action) {
    switch (action.type) {
      case "GET_EXPERIENCE":
        return {
          ...state.experience,
          experience: action.payload         
        };
        default:
        return state;
    }
  }