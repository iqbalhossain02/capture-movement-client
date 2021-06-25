import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";

const AddServices = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (event) => {
    const newInfo = { ...info };
    newInfo[event.target.name] = event.target.value;
    setInfo(newInfo);
  };
  const handleChangeFile = (event) => {
    const imageData = new FormData();
    imageData.set("key", "07945127d96230e24a48010e87b1a758");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setFile(response.data.data.display_url);
      })
      .catch(function (error) {
        swal("Opppsss!", `${error}`, "error");
      });
  };

  const handleSubmit = (event) => {
    const eventData = {
      name: info.name,
      price: info.price,
      description: info.description,
      img: file,
    };

    fetch("https://powerful-badlands-46047.herokuapp.com/addServices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal("Nice Work!", "Service successfully added!", "success");
        }
      });
    event.preventDefault();
  };

  return (
    <div>
      <h3 className="text-center mt-4">Add Service</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>Service Name</Form.Label>
            <Form.Control
              type="text"
              onBlur={handleBlur}
              name="name"
              placeholder="Enter the service name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              onBlur={handleBlur}
              name="price"
              placeholder="Enter the service price"
            />
          </Form.Group>

        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTextArea">
            <Form.Label>Write the service description</Form.Label>
            <textarea
              onBlur={handleBlur}
              name="description"
              className="form-control"
              placeholder="description"
              aria-label="With textarea"
            ></textarea>
          </Form.Group>

          <Form.Group className="mt-2" as={Col} controlId="formGridFile">
            <Form.Label>Upload Service Photos</Form.Label>
            <Form.Control name="file" onChange={handleChangeFile} type="file" />
            <small>Please wait a few second before submit for upload image</small>
          </Form.Group>
        </Form.Row>
        <Button variant="primary mb-5" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddServices;
