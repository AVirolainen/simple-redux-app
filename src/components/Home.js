import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact has been deleted sucessfully");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-4 text-right">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => {
                return (
                  <tr key={id}>
                    <td className="align-middle text-center">{id + 1}</td>
                    <td className="align-middle text-center">{contact.name}</td>
                    <td className="align-middle text-center">
                      {contact.email}
                    </td>
                    <td className="align-middle text-center">
                      {contact.number}
                    </td>
                    <td className="d-flex align-middle">
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-small btn-primary mx-auto"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        className="btn btn-small btn-danger mx-auto"
                        onClick={() => {
                          deleteContact(contact.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
