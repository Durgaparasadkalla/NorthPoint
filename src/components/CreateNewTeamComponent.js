import * as yup from "yup";

import { Button, Container, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import React from 'react';
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  teamName: yup.string().required('Team name is required'),
  projectName: yup.string().required('Project name is required'),
});

export default function CreateNewTeamComponent({ handleClose }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      teamName: 'sample1',
    },
  });

  const onSubmitForm = async (data) => {
    try {
      console.log("Data:", data.teamName);
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Form.Group className="mb-3" controlId="teamName">
          <Form.Label>Team Name *</Form.Label>
          <Controller
            control={control}
            name="teamName"
            render={({ field }) => (
              <Form.Control
                {...field}
                type="text"
                placeholder="Team Name"
                className={`custom-border ${errors.teamName ? "is-invalid" : ""}`}
              />
            )}
          />
          {errors.teamName && (
            <div className="invalid-feedback">{errors.teamName.message}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="projectName">
          <Form.Label>Project Name *</Form.Label>
          <Controller
            control={control}
            name="projectName"
            render={({ field }) => (
              <Form.Control
                {...field}
                type="text"
                placeholder="Project Name"
                className={`custom-border ${errors.projectName ? "is-invalid" : ""}`}
              />
            )}
          />
          {errors.projectName && (
            <div className="invalid-feedback">{errors.projectName.message}</div>
          )}
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