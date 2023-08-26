import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { updateContact } from "../store/reducers/contactReducer";
import ContactForm from "./ContactForm";
import { RootState } from "../store/store";
import { Contact } from "../store/reducers/contactReducer";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
interface EditContactProps {
  updateContact: typeof updateContact;
}

const EditContact: React.ComponentType<EditContactProps> = ({
  updateContact,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const Contacts = useSelector((state: RootState) => state.contacts.contacts);
  const initialContact = Contacts.find(
    (contact) => contact.id.toString() === id
  );

  const handleSubmit = (contact: Contact) => {
    dispatch(updateContact({ id: contact.id, updatedContact: contact }));
    toast.success("Contact updated successfully");
    navigate("/");
  };

  if (!initialContact) {
    toast.error("something went wrong");
    return <div>Contact not found.</div>;
  }

  return (
    <ContactForm
      initialValues={initialContact}
      onSubmit={handleSubmit}
      heading="Edit Contact Form"
      buttonLabel="Update Contact"
    />
  );
};

export default connect(null, { updateContact })(EditContact);
