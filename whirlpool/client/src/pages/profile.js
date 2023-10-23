import React from "react";
import BasicNav from '../components/navbar';
import './css/profile.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PreviousQuestions from "../components/previousQuestions";

import userPic from "../assets/user.png"

// import userData from "../components/userData";

function Profile({ onDeleteAccount }) {
    const [imageName, setImageName] = useState("Name of file")
    const [userImage, setUserImage] = useState()
    const userMail = sessionStorage.getItem("username")
    const [userData, setUserData] = useState();

    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });


    const [userProfile, setuserProfile] = useState()


    useEffect(() => {
        if (userMail) {
            axios.get('http://localhost:5001/api/singleUser/' + userMail)
                .then(res => {
                    let data = res.data;
                    setUserData(data);
                    console.log(data)
                    setuserProfile(data.profilePic)
                })
                .catch(err => console.log(err))
        }
    }, [userMail])

    const getImage = (e) => {
        //This is where Multer comes in
        let imagefile = e.target.files[0];
        setUserImage(imagefile);

        let value = e.target.value;
        let imageName = value.substring(12);
        setImageName(imageName);

        let reader = new FileReader();
        reader.onload = () => {
            let output = document.getElementById('imgPrev');
            output.src = reader.result;
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    const changeImg = (e) => {
        const payloadData = new FormData();

        payloadData.append("image", userImage);

        axios.put("http://localhost:5001/api/users/", payloadData)
            .then((res) => {
                if (res) {
                    console.log("Item Added");
                }
            })
            .catch(err => console.log(err))
    }

    const handleEdit = () => {
        setShowModal(true);
        setEditData({
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            email: userData?.email
        });
    }

    const handleInputChange = (event) => {
        setEditData({
            ...editData,
            [event.target.name]: event.target.value
        });
    }

    const handleSave = () => {
        axios.put(`http://localhost:5001/api/updateUser/${userMail}`, editData)
            .then(res => {
                setUserData(res.data);
                setShowModal(false);
            })
            .catch(err => console.log(err));
    };

    let navigate = useNavigate();

const handleDeleteAccount = () => {
    axios.delete(`http://localhost:5001/api/deleteUser/${userMail}`)
      .then((response) => {
        console.log("User account deleted successfully");
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
};

    return (
        <div id="daBigOne">

            <BasicNav />

            {/* Profile front end provided by bootdey for free use */}
            {/* Code was still tweaked and edited by us of course */}

            <div className="container" id="bababooie">
                <div className="main-body">
                    <h1> Your profile: </h1>
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="cardEspesiale">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img
                                            src={userPic}
                                            alt="User" className="rounded-circle" width="150" height="150px" style={{ marginTop: "5%" }} />
                                        <div className="mt-3">
                                            <h4>
                                                {userData?.firstName}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData?.firstName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Surname</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData?.lastName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData?.email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Form onSubmit={changeImg} style={{ marginTop: "2%", marginLeft: "auto", marginRight: "auto" }}>
                                                <Form.Group controlId="formFile" className="mb-3" style={{ display: "inline-block", width: "100%" }}>
                                                    <Form.Control type="file" style={{ marginBottom: "2%" }} onChange={getImage} />
                                                    <div>
                                                        <p>{imageName}</p>
                                                    </div>
                                                    <div>
                                                        <img id="imgPrev" style={{ backgroundColor: "lightgrey", height: "200px", width: "200px", float: "left" }} />
                                                    </div>
                                                </Form.Group >
                                                <Button variant="warning" type="submit" style={{ color: "black", width: "100%", marginTop: "2%", marginBottom: "2%", backgroundColor: "#FDF5BF" }}>
                                                    Upload image
                                                </Button>
                                            </Form>
                                            <Button onClick={handleEdit} variant="warning" type="submit" style={{ color: "black", width: "100%", marginTop: "2%", marginBottom: "2%", backgroundColor: "#FDF5BF" }}>
                                                Edit Info
                                            </Button>
                                            <Modal show={showModal} onHide={() => setShowModal(false)}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Edit Info</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form>
                                                        <Form.Group>
                                                            <Form.Label>First Name</Form.Label>
                                                            <Form.Control type="text" name="firstName" value={editData.firstName} onChange={handleInputChange} />
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Label>Last Name</Form.Label>
                                                            <Form.Control type="text" name="lastName" value={editData.lastName} onChange={handleInputChange} />
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Label>Email</Form.Label>
                                                            <Form.Control type="email" name="email" value={editData.email} onChange={handleInputChange} />
                                                        </Form.Group>
                                                    </Form>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                                                    <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                                                </Modal.Footer>
                                            </Modal>

                                            <Button onClick={handleDeleteAccount} variant="warning" type="submit" style={{ color: "black", width: "100%", marginTop: "2%", marginBottom: "2%", backgroundColor: "#FDF5BF" }}>
                                                Delete Account
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* previously asked questions */}
            <PreviousQuestions />

        </div>
    )
}

export default Profile