import React from "react";
import { connect } from "react-redux";
import { addContact } from "../store/reducers/contactReducer";
import ContactForm from "./ContactForm";
import { Contact } from "../store/reducers/contactReducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
interface AddContactProps {
  addContact: typeof addContact;
}

const initialValues: Contact = { id: 4, name: "", email: "" };

const AddContact:React.ComponentType<AddContactProps> = ({ addContact }) => {
  const navigate = useNavigate();
  const handleSubmit = (values: Contact) => {
    if (values.name && values.email && values.mobileNo) {
      const id = new Date().getTime();
      addContact({ ...values, id });
      toast.success("Contact added successfully");
      navigate("/");
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <ContactForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      heading="Add Contact Form"
      buttonLabel="Add Contact"
    />
  );
};

export default connect(null, { addContact })(AddContact);
