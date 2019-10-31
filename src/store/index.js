import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import profileReduder from "../reducers/profile"
import PostReducer from "../reducers/posts"
import experienceReducer from "../reducers/experience"
import userReducer from "../reducers/users"
import userLoginReducer from "../reducers/userLogin"
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  post:[],
  profile: [],  
  experience :[],
  users:[],
  userLoginList: []  
}
  const combReducer = combineReducers({profile: profileReduder,post:PostReducer,experience:experienceReducer,
    users:userReducer,
    userLoginList:userLoginReducer });

  export default function configureStore() {
    return createStore(
      combReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    );
  }