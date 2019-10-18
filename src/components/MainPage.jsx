import React from 'react'
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Posts from "./Posts"
import ChatWindow from "./ChatWindow"
import { Provider } from "react-redux";
import configureStore from "../store";

class MainPage extends React.Component {
    state = {  }
    render() { 
        var RoutedNavigation = withRouter(NavBar);
        return (
            <> 
            <Provider store={configureStore()}>
            
            <Router>
            <RoutedNavigation exact />           
            <Route path="/Me" exact  component={Home}   />
             <Route path="/" exact component={Posts} />
             <ChatWindow/>
            </Router>
            </Provider>
            </>
         );
    }
}
 
export default MainPage;