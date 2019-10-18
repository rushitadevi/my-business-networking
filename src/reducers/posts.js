export default function(state = {}, action) {
    switch (action.type) {
      case "ADD_POSTS":
        return {
          ...state.posts,
          posts: state.posts.concat(action.payload)
         
        };
        case "GET_POSTS" :
          return{
            ...state.posts,
            posts: state.posts.concat(action.payload)
          }
      default:
        return state;
    }
  }