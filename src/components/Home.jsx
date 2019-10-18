import React from 'react'
import bgImg from "../Img/linkBg.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    //addExperience=(state)=>
  });

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            setExperience: []
        };
    }
    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    addExperience=()=>{

    }

    state = {}
    render() {
        return (
            <>
            {this.props.profile1.profile && this.props.profile1.profile.map((profile,index)=>(
                <div key={index} className="container-fluid bg-light" style={{ paddingBottom: "100px" }} >
                <div className="container"  >
                    <div className="row">
                        <div className="col-md-8 mt-5">
                            <div className="container"  >
                                <div className="row" style={{ height: "150px" }}>
                                    <img src={bgImg} alt="no Imag" style={{ width: "730px", height: "150px" }} />
                                </div>
                                <div className="row shadow-sm p-3 mb-3 bg-white rounded" style={{ height: "150px", backgroundColor: "white" }} >
                                    <div className="col-md-3">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1sGf92NT4eCeCWYexSHnr7yYQu9qmxWe6hPReu3PlZcGvrP3"
                                            alt="no Imahe" style={{
                                                borderRadius: "150px", border: "5px solid white", Width: "100px", height: "100px", position: "absolute",
                                                marginTop: "-60px", marginLeft: "20px"
                                            }} />
                                        <p style={{ color: "black", fontSize: "20px", marginTop: "50px" }} >{profile.name}  {profile.surname}</p>
                                        <p style={{width:"250px"}}>{profile.title} || {profile.area}</p>
                                        <p></p>
                                    </div>
                                    <div className="col-md-8 mt-3" >
                                        <button style={{ float: "right", marginLeft: "10px",padding:"5px" }}>More...</button>
                                        <button style={{ float: "right",padding:"5px", 
                                        backgroundColor: "#2867B2",color:"white",fontWeight:"bold" }}>Add Profile Section</button>
                                    </div>
                                </div>
                                <div className="row mt-2 shadow-sm p-3 mb-5 bg-white rounded" 
                                style={{ backgroundColor: "white", height: "600px" }}>
                                    <div className="col-md-3">
                                        <p style={{fontSize:"20px"}}><b>Experience</b></p>
                                    </div>
                                    <div className="col-md-9 mt-3" >
                                        <button style={{ float: "right", marginLeft: "10px" }}
                                            onClick={() => this.setState({ showModal: true })} >Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5 bg-light">
                            <ul className="list-group ">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            ))
            }   
                <Modal show={this.state.showModal} onHide={this.toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Title"
                        aria-label="Title"
                        onChange={e => this.setState({ title: e.target.value })}
                    />
                </InputGroup>
                 <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Company"
                        aria-label="Company"
                        onChange={e => this.setState({ company: e.target.value })}
                    />
                </InputGroup>
                <InputGroup text="hi" className="mb-3">
                    <FormControl
                    placeholder="Location"
                        aria-label="Location"
                        onChange={e => this.setState({ location: e.target.value })}
                    />
                </InputGroup>
                <InputGroup text="hi" className="mb-3">
                    <FormControl
                    placeholder="Headline"
                        aria-label="Headline"
                        onChange={e => this.setState({ headline: e.target.value })}
                    />
                </InputGroup>
                <InputGroup text="hi" className="mb-3">
                    <FormControl
                    placeholder="Description"
                        aria-label="Description"
                        onChange={e => this.setState({ description: e.target.value })}
                    />
                </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.toggleModal()}>
                        Close
                     </Button>
                    <Button variant="primary" onClick={() => this.toggleModal()}>
                        Save Changes
                   </Button>
                </Modal.Footer>
            </Modal>              
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);