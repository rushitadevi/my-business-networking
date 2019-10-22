import React from 'react'
import { Link } from "react-router-dom"

class navBar extends React.Component {
    render() {
        return (
            <>
            <div>
            
            </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10"
                        aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10" style={{height:"40px"}}>
                        <ul className="navbar-nav">
                            <Link to={"/"} className="nav-item text-center" ><li className="nav-item active">
                            <a href="#" className="nav-link" ><i className="fa fa-home" ></i><br/>Home</a>               
                            </li></Link>
                            <li className="nav-item text-center">                                
                                <a href="#" className="nav-link" ><i className="fa fa-network"></i><br/>My Network</a>               
                            </li>
                            <li className="nav-item text-center">                                
                                <a href="#" className="nav-link" ><i className="fa fa-comments" ></i><br/>Messaging</a>               
                            </li>
                            <li className="nav-item text-center"> 
                                 <a href="#" className="nav-link" ><i className="fa fa-bell" ></i><br/>Notifications</a>               
                            </li>
                            <Link className="nav-item text-center" to={"/user"}><li className="nav-item">
                            <a href="#" className="nav-link center" ><i className="fa fa-bell" ></i><br/>Me</a>               
                                </li></Link>
                        </ul>
                    </div>
                </nav>

            </>
        );
    }
}

export default navBar;
