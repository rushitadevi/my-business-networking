import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import profileReduder from "../reducers/profile"
import PostReducer from "../reducers/posts"
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const initialState = {
  post: {
    posts: []
  },
  profile1: {
    profile: []
  }
  };
  const combReducer = combineReducers({profile1: profileReduder,post:PostReducer });

  export default function configureStore() {
    return createStore(
      combReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    );
  }