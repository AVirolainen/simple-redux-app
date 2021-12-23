import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setNumber(currentContact.number);
      setEmail(currentContact.email);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact.id !== parseInt(id)
    );

    const checkNumber = contacts.find(
      (contact) =>
        contact.number === parseInt(number) && contact.id !== parseInt(id)
    );

    if (!email || !name || !number) {
      return toast.warning("Please fill an all fields!");
    }

    if (checkEmail) {
      return toast.warning("This email has already been used");
    }

    if (checkNumber) {
      return toast.warning("This number has already been used");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student updated successfully");
    navigate("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <div className="row">
          <h1 className="display-3 text-center my-5">
            Edit Student {1 + parseInt(id)}
          </h1>
          <div className="col-md-5 shadow mx-auto p-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Phone number"
                  className="form-control mb-3"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Update Student"
                  className="btn btn-dark"
                />
                <Link to="/" className="btn btn-danger ms-3">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Student contact with id {id} is not exist
        </h1>
      )}
    </div>
  );
};

export default EditContact;
