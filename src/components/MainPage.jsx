import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from "react-redux"
import NavBar from './NavBar';
import Home from './Home';
import Posts from "./Posts"
import ChatWindow from "./ChatWindow"
import Welcome from './Welcome';
import SignUp from "./SignUp"
import SignInPage from "./SignIn"

const mapStateToProps = reduxStore => {
    console.log(reduxStore)
    return reduxStore;
  };

const mapDispatchToProps = dispatch => ({
    fetchData:()=>
    dispatch(handleFetchData())
})
const handleFetchData= () =>{
return async function(
    dispatch,
    getState
){
    var response = await fetch("https://striveschool.herokuapp.com/api/profiles/",  
    {method: "GET", 
    headers: {
        'Authorization': 'Basic '+btoa('user3:nZ4uFd9hBp3dvKLu'), 
        'Content-Type': 'application/json'
    }
});
    if(response.ok){
        console.log("Product GET Successfully");
            var result= await response.json()
    }else{
        alert("Product NOT GET Successfully");
    }
    dispatch({
        type:"STORE_DATA",
        payload: result
    })
}
}


class MainPage extends React.Component {
    state = {
      
    }
    componentDidMount= async ()=>{
        await this.props.fetchData();
    }
    render() {
        //console.log(,"loca")
      //var RoutedNavigation = withRouter(NavBar);
        return (
            <>            
                    <Router>
                    {/* {this.state.history.location.pathname === '/' || this.state.history.location.pathname === '/signup'
                   ||  this.state.history.location.pathname === '/signin' ? null
      : <RoutedNavigation  path="/home" exact />} */}
                       <Route path="/" exact component={Welcome} />
                        {/* <Route path="/" exact component={NavBar} /> */}
                        {/* <NavBar/>    */}
                        
                      
                      {/* <Route path="/:user" exact component={Home} /> */}
                        {/* <Route path="/posts" exact component={Posts} /> */}
                        <Route path="/signup" exact component={SignUp}/>                       
                        <Route path="/signin" component={SignInPage}/> 
                        <Route path='/info'  render={() => 
                 {
                     return(
                            <>
                         <NavBar/>
                         <Route path="/info/home" exact component={Posts} />
                        <Route path="/info/user" exact component={Home}/>
                         </>
                     )

                 }       
                    }/>
                       
                    </Router>
                    <ChatWindow />                
            </>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainPage);