import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteContact } from '../store/reducers/contactReducer'; 

interface ContactDetailsProps {}

const ContactDetails:React.ComponentType<ContactDetailsProps> = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>(); 
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const contact = contacts.find(contact => contact.id.toString() === id);

  if (!contact) {
    toast.error('something went wrong');
    return <div>Contact not found.</div>;
  }

  const handleDelete = (id: number) => {
    dispatch(deleteContact({ id }));
    toast.success("Contact deleted successfully");
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-5/6 p-5 bg-white shadow-md">
          <h1 className="text-3xl font-semibold mb-3">Contact Details</h1>
          <div className="border-t border-gray-300 py-3">
            <p className="text-gray-600">ID: {contact.id}</p>
            <p className="text-gray-600">Name: {contact.name}</p>
            <p className="text-gray-600">Email: {contact.email}</p>
            <p className="text-gray-600">Phone: {contact.mobileNo}</p>
          </div>
          <div className="mt-4 flex flex-wrap mb-2 gap-2">
            <Link
              to={`/edit/${contact.id}`}
              className="bg-blue-500 text-white px-4 py-2 mt-1  rounded hover:bg-blue-600"
            >
              Edit Contact
            </Link>
            <Link
              to="/"
              className="bg-gray-500 text-white px-4 py-2 mt-1  rounded hover:bg-gray-600"
            >
              Back to List
            </Link>
            <Link
              to={`/`}
              className="bg-red-500 text-white px-4 py-2  mt-1  rounded hover:bg-red-600"
            >
              <button  onClick={() => handleDelete(contact.id)}>
              Delete Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
