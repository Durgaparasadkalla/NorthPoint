import * as yup from "yup";

import { Button, Container, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  projectName: yup.string().required("Project Name is required"),
  summary: yup.string().required("Summary is required"),
  description: yup.string().required("description is required"),
  file: yup.mixed(),
});

export default function CreateNewProjectComponent({ handleClose }) {
  // const [projectName, setProjectName] = useState("");
  // const [file, setImage] = useState(null);
  // const [summary, setSummary] = useState("");
  // const [description, setDescription] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data) => {
    try {
      console.log(data.projectName);
      console.log(data.image[0]);

      const formData = new FormData();
      formData.append("projectName", data.projectName);
      formData.append("image", data.image[0]);
      formData.append("summary", data.summary);
      formData.append("description", data.description);

      console.log("formData", formData);
      // const response = await fetch("http://127.0.0.1:8080/api/project", {
      //   method: "POST",
      //   body: formData,
      // });
      // const responseData = await response.json();
      // console.log("response:", responseData);
      // if (responseData.ok) {
      //   handleClose();
      // } else {
      //   throw new Error(response.error.message || "Server Error");
      // }

      try {
        const response = await fetch("http://127.0.0.1:8080/api/project", {
          method: "POST",
          body: formData,
        });

        const responseData = await response.json();
        console.log("response", responseData);
        if (response.ok) {
          // Handle success
          console.log("Project created successfully");
          handleClose(); // Close the form
        } else {
          // Handle error
          throw new Error(responseData.message || "Server Error")
    
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Project Name*</Form.Label>
          <Controller
            name="projectName"
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                type="text"
                placeholder="Project Name"
                className={`custom-border ${
                  errors.projectName ? "is-invalid" : ""
                }`}
              />
            )}
          />
          {errors.projectName && (
            <div className="invalid-feedback">{errors.projectName.message}</div>
          )}
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Add Image*</Form.Label>
          <Controller
            name="image"
            control={control}
            render={({ field: { onChange, rest } }) => (
              <Form.Control
                {...rest}
                type="file"
                className={`custom-border ${errors.image ? "is-invalid" : ""}`}
                onChange={(e) => onChange(e.target.files)}
              />
            )}
          />
          {errors.image && (
            <div className="invalid-feedback">{errors.image.message}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="summary">
          <Form.Label>Summary*</Form.Label>
          <Controller
            name="summary"
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                as="textarea"
                rows={3}
                className={`custom-border ${
                  errors.summary ? "is-invalid" : ""
                }`}
              />
            )}
          />
          {errors.summary && (
            <div className="invalid-feedback">{errors.summary.message}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                as="textarea"
                rows={3}
                className="custom-border"
              />
            )}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="ml-2">
            Create
          </Button>
        </div>
      </Form>
    </Container>
  );
}
