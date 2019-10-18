export default function(state = {}, action) {
    switch (action.type) {
      case "PROFILE":
        return {
          ...state.profile,
          profile: state.profile.concat(action.payload)
        };
      default:
        return state;
    }
  }