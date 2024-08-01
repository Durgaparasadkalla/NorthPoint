import * as yup from "yup";

import { Button, Container, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

import Select from 'react-select';
import { getProjects } from "../services/ProjectService";
import { getUsers } from '../services/Users';
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  teamName: yup.string().required('Team name is required'),
  projectName: yup.string().required('Project name is required'),
  teamMembers: yup.array().min(1, "Select at least one member").required("Select at least one member"),
});

export default function CreateNewTeamComponent({ handleClose }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      teamMembers: [],
      teamName: '',
    },
  });

  const onSubmitForm = async (data) => {
    try {
      console.log("Data:", data.teamName);
      console.log("projectName:", data.projectName);
      console.log("teamMembers:", data.teamMembers);
      // handleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
      console.log(usersData);

      const projectsData = await getProjects();
      setProjects(projectsData);
      console.log("sample;", projectsData);
    }
    catch (error) {
      console.error('Error fetching data:', error);
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
                style={{ width: "50%" }}
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
          <Form.Label>Project Name*</Form.Label>
          <Controller
            name="projectName"
            control={control}
            render={({ field }) => (
              <Form.Select
                {...field}
                onChange={(e) => field.onChange(e.target.value)}
                value={field.value || ''} // Ensure value is set correctly
                style={{ width: "50%" }}
                isInvalid={!!errors.projectName}
              >
                <option value="" disabled>Select the Project</option>
                {projects.map((project) => (
                  <option key={project.projectId} value={project.projectId}>
                    {project.projectName}
                  </option>
                ))}
              </Form.Select>
            )}
          />
          {errors.projectName && (
            <div className="invalid-feedback">{errors.projectName.message}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="teamMembers">
          <Form.Label>Add Members*</Form.Label>
          <Controller
            name="teamMembers"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                style={{ width: "50%" }}  // Apply style directly to Select component
                value={field.value}
                onChange={(selectedOptions) => field.onChange(selectedOptions)}
                options={users}
                getOptionValue={(option) => option.userId}
                getOptionLabel={(option) => option.userName}
                placeholder="Select Team Members"
                maxSelectedLabels={10}
                className="basic-multi-select w-50"
                classNamePrefix="select"
              />
            )}
          />
          {errors.teamMembers && (
            <div className="invalid-feedback" style={{ color: 'red' }}>
              {errors.teamMembers.message}
            </div>
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