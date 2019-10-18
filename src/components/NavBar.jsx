import React from 'react'
import { Link } from "react-router-dom"

class navBar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10"
                        aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
                        <ul className="navbar-nav">
                            <Link to={"/"} className="nav-link" ><li className="nav-item active">
                                Home
                                <span style={{ color: "white", marginTop: "20px" }}>
                                    <i className="fad fa-home"></i>
                                </span>
                            </li></Link>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Network</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" tabIndex="-1" >Messaging</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Notifications</a>
                            </li>
                            <Link className="nav-link" to={"/Me"}><li className="nav-item">
                                Me</li></Link>
                        </ul>
                    </div>
                </nav>

            </>
        );
    }
}

export default navBar;
