import React, { useState } from 'react';
import { Contact } from '../store/reducers/contactReducer';

interface ContactFormProps {
  initialValues: Contact;
  onSubmit: (values: any) => void;
  heading: string;
  buttonLabel: string;
}

const ContactForm:React.ComponentType<ContactFormProps> = ({ initialValues, onSubmit, heading, buttonLabel }) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues:typeof values) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(values);
    setValues(initialValues);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-gray-800 py-3 text-4xl font-extrabold">{heading}</h1>
      <div className="flex justify-center">
        <div className="w-3/5 p-5 bg-white shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Full name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="number"
                placeholder="Phone"
                name="mobileNo"
                value={values.mobileNo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 cursor-pointer"
                type="submit"
                value={buttonLabel}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
