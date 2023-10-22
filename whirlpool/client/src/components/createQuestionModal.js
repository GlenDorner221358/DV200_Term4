import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios'

const MyModal = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    question: '',
    tag1: '',
    tag2: '',
    tag3: '',
    image: null,
    imagePreview: null, // Add a new state variable for image preview
  });

  let qname = sessionStorage.getItem('username')

  const handleFormChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData); // Replace with your logic to handle the form data

    let payload = new FormData(); // Create a new FormData object
    payload.append('name', qname);
    payload.append('title', formData['title']);
    payload.append('question', formData['question']);
    payload.append('tagOne', formData['tag1']);
    payload.append('tagTwo', formData['tag2']);
    payload.append('tagThree', formData['tag3']);
    payload.append('image', formData['image']); // Append the image file to the payload

    axios.post("http://localhost:5001/api/newQuestion", payload)
      .then((res) => {
        if (res) {
          console.log("Item Added");
        }
      })
      .catch(err => console.log(err))

    handleClose(); // Close the modal after submission if needed
  };

  const tagOptions = [
    'HTML',
    'Javascript',
    'CSS',
    'Axios',
    'UseState',
    'Reactjs',
    'MERN',
    'LAMP',
    'SQL',
    'NoSQL',
    'Kotlin',
    'Xcode',
  ];

  const getImage = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], // Update the image field in formData state with the selected file
      imagePreview: URL.createObjectURL(e.target.files[0]), // Create a preview URL for the selected image
    });
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a New Question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title of your question"
              value={formData.title}
              onChange={(e) => handleFormChange(e, 'title')}
            />
          </Form.Group>

          <Form.Group controlId="formQuestion">
            <Form.Label style={{ marginTop: "3%" }}>Question</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Type out your question"
              value={formData.question}
              onChange={(e) => handleFormChange(e, 'question')}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3" style={{ display: "inline-block", width: "100%", marginTop: "4%" }}>
            <Form.Control type="file" style={{ marginBottom: "2%" }} onChange={getImage} />
            <div>
                <p>{formData.image ? formData.image.name : ''}</p>
            </div>
            <div>
                {formData.imagePreview && ( // Render the image preview if it exists
                  <img src={formData.imagePreview} alt="Image Preview" style={{ backgroundColor: "lightgrey", height: "200px", width: "200px", float: "left" }} />
                )}
            </div>
        </Form.Group>

          {[1, 2, 3].map((tagNum) => (
            <Form.Group key={tagNum} controlId={`formTag${tagNum}`}>
              <Form.Label style={{ marginTop: "3%" }}>{`Tag ${tagNum}`}</Form.Label>
              <Form.Control
                as="select"
                value={formData[`tag${tagNum}`]}
                onChange={(e) => handleFormChange(e, `tag${tagNum}`)}
              >
                <option value="">Select Tag</option>
                {tagOptions.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          ))}

          <Button variant="primary" type="submit" style={{ marginTop: "5%" }}>
            Post Question
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
