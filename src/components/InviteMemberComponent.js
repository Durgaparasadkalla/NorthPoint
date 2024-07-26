// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { Button, Container, Form } from "react-bootstrap";
// import { ReactMultiEmailInput } from "react-multi-email-input";
// import * as yup from "yup";
// import "react-multi-email-input/dist/style.css";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup.object().shape({
//     inviteMembers: yup
//       .array()
//       .of(
//         yup
//           .string()
//           .email("Invalid email")
//           .required("Email is required")
//       )
//       .min(1, "Enter at least one email")
//       .required("Enter at least one email"),
//   });

//   export default function InviteMemberComponent({ handleClose }) {
//     const { control, handleSubmit, formState } = useForm({
//       resolver: yupResolver(schema),
//     });
//     const { errors } = formState;
//     const [emailList, setEmailList] = useState([]);

//     const onSubmit = (data) => {
//       console.log("Submitted email list:", emailList);
//       handleClose(); // Close modal or perform other actions
//     };

//     return (
//       <Container>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <Form.Group controlId="inviteMembers">
//             <Form.Label>Invite multiple Users *</Form.Label>
//             <ReactMultiEmailInput
//               placeholder="Enter emails"
//               emails={emailList}
//               setEmails={setEmailList}
//             />
//             {errors.inviteMembers && (
//               <Form.Text className="text-danger">
//                 {errors.inviteMembers.message}
//               </Form.Text>
//             )}
//           </Form.Group>

//           <div className="d-flex justify-content-end">
//             <Button variant="secondary" onClick={handleClose}>
//               Cancel
//             </Button>
//             <Button variant="primary" type="submit" className="ml-2">
//               Add
//             </Button>
//           </div>
//         </Form>
//       </Container>
//     );
//   }


import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import * as yup from "yup";
import "react-multi-email-input/dist/style.css";
import { yupResolver } from "@hookform/resolvers/yup";

export default function InviteMemberComponent({ handleClose }) {
  // Define validation schema using yup
  const emailSchema = yup.string().email('Invalid email address');
  const schema = yup.object().shape({
    // emailList: yup.array().of(yup.string()
    //       .email("Invalid email")
    //       .required("Email is required")
    //   )
    //   .min(1, "Enter at least one email")
    //   .required("Enter at least one email"),
    emailList: yup.array().of(emailSchema.required("Email is required")).min(1, "Enter at least one email")
  });

  // teamMembers: yup.array().min(1, "Select at least one member").required("Select at least one member"),
  // Initialize useForm hook with resolver and default values
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      emailList: [],
    },
  });

  const { errors } = formState;
  // const [emailList, setEmailList] = useState([]);

  const onSubmit = (data) => {
    console.log("Submitted email list:", data.emailList);
    handleClose(); // Close modal or perform other actions
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="inviteMembers">
          <Form.Label>Invite multiple Users *</Form.Label>
          <Controller
            name="emailList"
            control={control}
            render={({ field }) => (
              <ReactMultiEmail
                {...field}
                placeholder="Enter emails"
                emails={field.value}
                onChange={(_emails) => field.onChange(_emails)}
                className={`custom-border ${errors.emailLists ? "is-invalid" : ""}`}
                getLabel={(email, index, removeEmail) => {
                  return (
                    <div data-tag key={index}>
                      <div data-tag-item>{email}</div>
                      <span data-tag-handle onClick={() => removeEmail(index)}>
                        ×
                      </span>
                    </div>
                  );
                }}
              />
            )}
          />
          {errors.emailList && (
            <Form.Text className="text-danger">
              {errors.emailList.message}
            </Form.Text>
          )}
        </Form.Group>
        {/* {emailList && <p id="result">{emailList.join(', ') || 'empty'}</p>} */}

        <div className="d-flex justify-content-end">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="ml-2">
            Add
          </Button>
        </div>
      </Form>
    </Container>
  );
}
