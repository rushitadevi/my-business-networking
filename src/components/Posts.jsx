import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import bgImg from "../Img/linkBg.jpg";
import FormControl from "react-bootstrap/FormControl";
import { AddPost, FetchPosts } from "../actions"
import { handleProfile } from "../actions/index";

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    addPostThunk: state => dispatch(AddPost(state)),
    fetchPosts: () => dispatch(FetchPosts()),
    profileThunk: () => dispatch(handleProfile())
});

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            text1: ''
        };
    }

    componentDidMount = () => {
        this.props.fetchPosts()
        this.props.profileThunk()
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    handleMessage = e => {
        this.setState({
            text1: e.target.value
        });
    };

    render() {
        return (
            <>
                <div className="container-fluid p-4 bg-light" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 mr-4 ">
                                <div className="row  mt-2 shadow-sm p-3 mb-3 bg-white rounded border  "
                                    style={{ height: "300px" }} >
                                    <div className="row" >
                                        <img src={bgImg} alt="no Imag" style={{ width: "185px", height: "100px" }} />
                                    </div>
                                    <div >
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1sGf92NT4eCeCWYexSHnr7yYQu9qmxWe6hPReu3PlZcGvrP3"
                                            alt="no Imahe" style={{
                                                borderRadius: "150px", border: "2px solid white", Width: "100px", height: "100px", position: "absolute",
                                                marginTop: "-110px", marginLeft: "20px"
                                            }} />
                                        {this.props.profile1.profile && this.props.profile1.profile.map((profile, index) => (
                                            <>
                                            <p key={index} style={{ color: "black", fontSize: "20px", marginTop: "-10px" }} >
                                            {profile.name}  {profile.surname}</p>
                                            <p style={{width:"250px"}}>{profile.area}</p>
                                            </>
                                            ))}
                                    </div>
                                </div>
                                <div className="row  mt-2 shadow-sm p-3 mb-3 bg-white rounded border  "
                                    style={{ height: "300px" }} >
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row  mt-2 shadow-sm p-3 mb-3 bg-white rounded border  "
                                    style={{ height: "100px" }} >
                                    <button className="btn btn-info mt-4 ml-4" style={{ width: "20px", height: "20px" }}
                                        onClick={() => this.setState({ showModal: true })}  >
                                        <span className="glyphicon glyphicon-pencil"></span>
                                    </button>
                                    <p className="mt-4 ml-4" style={{ color: "grey", fontWeight: "bold", fontSize: "15px" }} >Start a Post</p>
                                </div>
                                {this.props.post.posts && this.props.post.posts.map((post, index) => (
                                    <div key={index} className="row  mt-2 shadow-sm p-3 mb-3 bg-white rounded border  ">
                                        <div> <p style={{ fontWeight: "bold" }} >
                                            <a href="#" className="ml-4" role="button" aria-pressed="true">{post.username}</a>
                                        </p></div>
                                        <div className="alert alert-light" role="alert">
                                            {post.text}
                                        </div>
                                    </div>
                                ))}

                                <div className="row  mt-2 shadow-sm p-3 mb-3 bg-white rounded border  "
                                    style={{ height: "100px" }} >
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row ml-1 mt-2 shadow-sm p-3 mb-3 bg-white rounded border  "
                                    style={{ height: "300px" }} >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showModal} onHide={this.toggleModal}>
                    <Modal.Header style={{ backgroundColor: "#2867B2" }} closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="What you want to talk about"
                                as="textarea" style={{ height: "100px" }}
                                aria-label="text1"
                                onChange={this.handleMessage}
                            />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.toggleModal()}>
                            Close
                     </Button>
                        <Button variant="primary" style={{ backgroundColor: "#2867B2" }}
                            onClick={() => { this.toggleModal(); this.props.addPostThunk(this.state.text1) }}>
                            Post
                   </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
