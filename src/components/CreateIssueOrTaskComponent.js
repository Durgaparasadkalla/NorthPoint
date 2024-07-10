import { Controller, useForm } from 'react-hook-form';
import React, { useEffect, useState } from "react";
import { createIssue, getProjects, getReporters } from '../services/Users';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function CreateIssueOrTaskComponent({ handleClose }) {
  const { control, handleSubmit, formState: { errors }, setError, getValues } = useForm({
    defaultValues: {
      selectedProjectValue: '',
      selectedIssueValue: '',
      selectedStatusValue: '',
      summary: '',
      description: '',
      reporter: '',
      selectedPriorityValue: '',
      attachments: [],
      selectedIssueLinkTypeValue: '',
      selectedLinkIssueValue: '',
      assignee: '',
      // startDate: '',
      // endDate: ''
    }
  });
  const options2 = [
    { value: 'Epic', label: 'Epic' },
    { value: 'Story', label: 'Story' },
    { value: 'Task', label: 'Task' },
    { value: 'Bug', label: 'Bug' },
  ];

  const options3 = [
    { value: 'To Do', label: 'TODO' },
    { value: 'In Progress', label: 'STORY' },
    { value: 'Done', label: 'DONE' },
  ];

  const options5 = [
    { value: 'Highest', label: 'Highest' },
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' },
    { value: 'Lowest', label: 'Lowest' },
  ];

  // const [selectedLinkIssueValue, setSelectedLinkIssueValue] = useState('');
  // const [selectedIssueLinkTypeValue, setSelectedIssueLinkTypeValue] = useState('');
  const options6 = [
    { value: 'blocks', label: 'blocks' },
    { value: 'is blocked by', label: 'is blocked by' },
    { value: 'clones', label: 'clones' },
    { value: 'is cloned by', label: 'is cloned by' },
    { value: 'duplicates', label: 'duplicates' },
    { value: 'is duplicated by', label: 'is duplicated by' },
  ];

  const options7 = [ ];

  const [reporters, setReporters] = useState([]);
  const [assignees, setAssignees] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reportersData = await getReporters();
        setReporters(reportersData);
        setAssignees(reportersData);

        console.log(reportersData);

        const projectsData = await getProjects();
        setProjects(projectsData);

        console.log(projectsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const validateFields = (data) => {
    let hasErrors = false;

    if (!data.selectedProjectValue) {
      setError("selectedProjectValue", {
        type: "manual",
        message: "Please select a project",
      });
      hasErrors = true;
    }
    if (!data.selectedIssueValue) {
      setError("selectedIssueValue", {
        type: "manual",
        message: "Please select an issue type",
      });
      hasErrors = true;
    }
    if (!data.selectedStatusValue) {
      setError("selectedStatusValue", {
        type: "manual",
        message: "Please select a status",
      });
      hasErrors = true;
    }
    if (!data.summary) {
      setError("summary", {
        type: "manual",
        message: "Please enter a summary",
      });
      hasErrors = true;
    }
    if (!data.description) {
      setError("description", {
        type: "manual",
        message: "Please enter a description",
      });
      hasErrors = true;
    }
    if (!data.reporter) {
      setError("reporter", {
        type: "manual",
        message: "Please select a reporter",
      });
      hasErrors = true;
    }
    if (!data.selectedPriorityValue) {
      setError("selectedPriorityValue", {
        type: "manual",
        message: "Please select a priority",
      });
      hasErrors = true;
    }
    if (data.attachments.length === 0) {
      setError("attachments", {
        type: "manual",
        message: "Please upload at least one attachment",
      });
      hasErrors = true;
    }
    if (!data.assignee) {
      setError("assignee", {
        type: "manual",
        message: "Please select an assignee",
      });
      hasErrors = true;
    }
    // if (!data.startDate) {
    //   setError("startDate", {
    //     type: "manual",
    //     message: "Please select a start date",
    //   });
    //   hasErrors = true;
    // }
    // if (!data.endDate) {
    //   setError("endDate", {
    //     type: "manual",
    //     message: "Please select an end date",
    //   });
    //   hasErrors = true;
    // }

    return hasErrors;
  };

  const onSubmit = async (data) => {
    const hasErrors = validateFields(data);
    if (hasErrors) {
      return;
    }
    console.log("attachments " + data.attachments);
    console.log("EnteredData " + JSON.stringify(data));

    const issueData = {
      issueId: "JAK-5",
      projectId: data.selectedProjectValue,
      reporterUserId: data.reporter,
      assigneeUserId: data.assignee,
      title: data.summary,
      description: data.description,
      status: data.selectedStatusValue,
      priority: data.selectedPriorityValue,
      issueType: data.selectedIssueValue,
    };

    console.log("issueData " + issueData);
    try {
      const response = await createIssue(issueData);
      alert('Issue created successfully:', response);
      handleClose();
    } catch (error) {
      alert('Error creating issue:', error);
      console.error('Error creating issue:', error);
    }
  };

  // const handleCancel = () => {
  //   handleClose();
  // };

  return (
    <div className="create-issue-modal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Project*</Form.Label>
          <Controller
            name="selectedProjectValue"
            control={control}
            render={({ field }) => (
              <Form.Select
                {...field}
                style={{ width: "50%" }}
                isInvalid={!!errors.selectedProjectValue}
              >
                <option value="" disabled>Select your Project</option>
                {projects.map((project) => (
                  <option key={project.projectId} value={project.projectId}>
                    {project.projectName}
                  </option>
                ))}
              </Form.Select>
            )}
          />
          {errors.selectedProjectValue && <div style={{ color: 'red' }}>{errors.selectedProjectValue.message}</div>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Issue type*</Form.Label>
          <Controller
            name="selectedIssueValue"
            control={control}
            render={({ field }) => (
              <Form.Select
                {...field}
                style={{ width: "50%" }}
                isInvalid={!!errors.selectedIssueValue}
              >
                <option value="" disabled>Select your Issue Type</option>
                {options2.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            )}
          />
          {errors.selectedIssueValue && <div style={{ color: 'red' }}>{errors.selectedIssueValue.message}</div>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status*</Form.Label>
          <Controller
            name="selectedStatusValue"
            control={control}
            render={({ field }) => (
              <Form.Select
                {...field}
                style={{ width: "50%" }}
                isInvalid={!!errors.selectedStatusValue}
              >
                <option value="" disabled>Select Status</option>
                {options3.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            )}
          />
          {errors.selectedStatusValue && <div style={{ color: 'red' }}>{errors.selectedStatusValue.message}</div>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Summary*</Form.Label>
          <Controller
            name="summary"
            control={control}
            render={({ field }) => (
              <InputGroup>
                <Form.Control
                  {...field}
                  placeholder="Enter Summary"
                  aria-label="summary"
                  isInvalid={!!errors.summary}
                />
              </InputGroup>
            )}
          />
          {errors.summary && <div style={{ color: 'red' }}>{errors.summary.message}</div>}
        </Form.Group>        

        <Form.Group className="mb-3">
          <Form.Label>Parent</Form.Label>
          <Controller
            name="selectedParentValue" // This should match the name used in useForm and the name you want to store the value as
            control={control}
            render={({ field }) => (
              <Form.Select
                {...field}
                style={{ width: "50%" }}
                aria-label="Select Parent Issue"
                defaultValue="" // Ensure defaultValue is set to an empty string or the initial value you want
              >
                <option value="" disabled>Select Parent Issue</option>
                {options7.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            )}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description*</Form.Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <InputGroup>
                <Form.Control
                  {...field}
                  as="textarea"
                  rows={3}
                  placeholder="Enter Description"
                  aria-label="description"
                  isInvalid={!!errors.description}
                />
              </InputGroup>
            )}
          />
          {errors.description && <div style={{ color: 'red' }}>{errors.description.message}</div>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Reporter*</Form.Label>
          <Controller
            name="reporter"
            control={control}
            render={({ field }) => (
              <Form.Select
                {...field}
                style={{ width: "50%" }}
                isInvalid={!!errors.reporter}
              >
                <option value="" disabled>Select Reporter</option>
                {reporters.map((reporter) => (
                  <option key={reporter.userId} value={reporter.userId}>
                    {reporter.userName}
                  </option>
                ))}
              </Form.Select>
            )}
          />
          {errors.reporter && <div style={{ color: 'red' }}>{errors.reporter.message}</div>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Priority*</Form.Label>
          <Controller
            name="selectedPriorityValue"
            control={control}
            render={({ field }) => (
              <Form.Select
                {...field}
                style={{ width: "50%" }}
                isInvalid={!!errors.selectedPriorityValue}
              >
                <option value="" disabled>Select your Priority</option>
                {options5.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            )}
          />
          {errors.selectedPriorityValue && <div style={{ color: 'red' }}>{errors.selectedPriorityValue.message}</div>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Multiple Attachments*</Form.Label>
          <Controller
            name="attachments"
            control={control}
            render={({ field }) => (
              <Form.Control
                type="file"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files);
                  field.onChange(files);
                }}
                isInvalid={!!errors.attachments}
              />
            )}
          />
          {errors.attachments && <div style={{ color: 'red' }}>{errors.attachments.message}</div>}
        </Form.Group>      


        <Form.Group className="mb-3">
          <Form.Label>Issue Links</Form.Label>
          <Controller
            name="selectedIssueLinkTypeValue"
            control={control}
            render={({ field }) => (
              <Form.Select
                {...field}
                style={{ width: "50%" }}
                isInvalid={!!errors.selectedIssueLinkTypeValue}
              >
                <option value="" disabled>Select your Issue Link Type</option>
                {options6.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            )}
          />
          {errors.selectedIssueLinkTypeValue && <div style={{ color: 'red' }}>{errors.selectedIssueLinkTypeValue.message}</div>}
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label>Issue Key</Form.Label> */}
          <Controller
            name="selectedLinkIssueValue"
            control={control}
            render={({ field }) => (
              <InputGroup style={{ width: "50%" }}>
                <Form.Control
                  {...field}
                  
                  placeholder="Select Options"
                  aria-label="selectedLinkIssueValue"
                  isInvalid={!!errors.selectedLinkIssueValue}
                />
              </InputGroup>
            )}
          />
          {errors.selectedLinkIssueValue && <div style={{ color: 'red' }}>{errors.selectedLinkIssueValue.message}</div>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Assignee*</Form.Label>
          <Controller
            name="assignee"
            control={control}
            render={({ field }) => (
              <Form.Select
                {...field}
                style={{ width: "50%" }}
                isInvalid={!!errors.assignee}
              >
                <option value="" disabled>Select Assignee</option>
                {assignees.map((assignee) => (
                  <option key={assignee.userId} value={assignee.userId}>
                    {assignee.userName}
                  </option>
                ))}
              </Form.Select>
            )}
          />
          {errors.assignee && <div style={{ color: 'red' }}>{errors.assignee.message}</div>}
        </Form.Group>

        {/* <Form.Group className="mb-3">
          <Form.Label>Start Date*</Form.Label>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <InputGroup style={{ width: "50%" }}>
                <Form.Control
                  {...field}
                  type="date"
                  style={{ width: "50%" }}
                  placeholder="Enter Start Date"
                  aria-label="startDate"
                  isInvalid={!!errors.startDate}
                />
              </InputGroup>
            )}
          />
          {errors.startDate && <div style={{ color: 'red' }}>{errors.startDate.message}</div>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>End Date*</Form.Label>
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <InputGroup style={{ width: "50%" }}>
                <Form.Control
                  {...field}
                  type="date"
                  style={{ width: "50%" }}
                  placeholder="Enter End Date"
                  aria-label="endDate"
                  isInvalid={!!errors.endDate}
                />
              </InputGroup>
            )}
          />
          {errors.endDate && <div style={{ color: 'red' }}>{errors.endDate.message}</div>}
        </Form.Group> */}

        <Button variant="link" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" type="submit">Submit</Button>
      </form>
    </div>
  );
}