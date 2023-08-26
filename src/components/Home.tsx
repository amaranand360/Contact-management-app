import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { deleteContact } from "../store/reducers/contactReducer";
import { toast } from "react-toastify";

interface HomeProps {}

const Home: React.ComponentType<HomeProps> = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteContact({ id }));
    toast.success("Contact added successfully");
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const isMobile = screenWidth <= 620;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <Link
          to="/add"
          className="bg-gray-700 text-white px-4 py-2 my-5 ml-auto rounded  hover:bg-gray-500"
        >
          Add Contact
        </Link>

        <div className="w-full mx-auto my-4">
          {!isMobile && (
            <table className="table-auto w-full border-collapse border">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="px-4 py-2">Id</th>
                  <th className="px-4 py-4">Name</th>
                  <th className="px-4 py-4">Email</th>
                  <th className="px-4 py-4">Phone</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {contacts.contacts.length > 0 ? (
                  contacts.contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="border-t hover:bg-gray-100 transition-colors duration-200 text-center"
                    >
                      <td className="px-4 py-2">{contact.id}</td>
                      <td className="px-4 py-4">{contact.name}</td>
                      <td className="px-4 py-2">{contact.email}</td>
                      <td className="px-4 py-4">{contact.mobileNo}</td>
                      <td className="px-4 py-4 space-x-2">
                        <Link
                          to={`/edit/${contact.id}`}
                          className="bg-blue-500 text-white px-2 py-1 rounded"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(contact.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Delete
                        </button>
                        <Link
                          to={`/details/${contact.id}`}
                          className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-2 text-lg">
                      No Contacts found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}

          {isMobile && (
            <table className="table-auto w-full border-collapse border">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="px-4 py-4">Name</th>
                  <th className="px-4 py-4">Phone</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {contacts.contacts.length > 0 ? (
                  contacts.contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="border-t hover:bg-gray-100 transition-colors duration-200 text-center"
                    >
                      <td className="px-4 py-4">{contact.name}</td>
                      <td className="px-4 py-4">{contact.mobileNo}</td>
                      <td className="px-4 py-4 space-x-2">
                        <Link
                          to={`/details/${contact.id}`}
                          className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-2 text-lg">
                      No Contacts found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
