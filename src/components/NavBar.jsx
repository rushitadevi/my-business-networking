import React from 'react'
import { Link } from "react-router-dom"
class navBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
           
            token: null
        }
    }

    componentDidMount= () =>{
        this.setState({token: localStorage.getItem("accessToken")})
    }

    Logout=() =>{
        localStorage.removeItem("accessToken");
        window.location.href='/'
      
      }

    render() {
        console.log("toke",this.props.token)
        return (
            <>
                <div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10"
                        aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10" style={{ height: "40px" }}>
                        <ul className="navbar-nav">
                            <Link to={"/info/home"} className="nav-item text-center" ><li className="nav-item active">
                                <a href="https://github.com/reactstrap/reactstrap" className="nav-link" ><i className="fa fa-home" ></i><br />Home</a>
                            </li></Link>
                            <Link to={"/"} className="nav-item text-center" >
                            <li className="nav-item text-center">
                                <a href="https://github.com/reactstrap/reactstrap" className="nav-link" >
                                    <i className="fa fa-sign-out-alt"></i><br />Log Out</a>
                            </li>
                            </Link>
                            <li className="nav-item text-center">
                                <a href="https://github.com/reactstrap/reactstrap" className="nav-link" ><i className="fa fa-comments" ></i><br />Messaging</a>
                            </li>
                            <li className="nav-item text-center">
                                <a href="https://github.com/reactstrap/reactstrap" className="nav-link" ><i className="fa fa-bell" ></i><br />Notifications</a>
                            </li>
                            <Link className="nav-item text-center" to={"/info/user"}><li className="nav-item dropdown">
                                <a href="https://github.com/reactstrap/reactstrap" data-toggle="dropdown" 
                                className="nav-link center dropdown-toggle"  aria-haspopup="true" id="navbarDropdown" aria-expanded="false" >
                                    <i className="fa fa-bell" ></i><br />Me</a>                                
                            </li>
                             </Link>
                            
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default navBar;
