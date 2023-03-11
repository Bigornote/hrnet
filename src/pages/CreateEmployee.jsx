import React, { useState } from "react";
import { states } from "../services/states";
import { departments } from "../services/departments";
import evaluation from "../assets/evaluation.png";

export const CreateEmployee = () => {
  console.log(departments);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    address: {
      street: "",
      city: "",
      zipCode: "",
      state: "",
    },
    department: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <main className="employee">
      <div className="img-container">
        <img src={evaluation} alt="a valid form drawing" />
      </div>
      <div className="form-container">
        <h1>Create an employee</h1>
        <form onSubmit={handleSubmit}>
          <div className="wrapper">
            <label>
              FirstName
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="wrapper">
            <label>
              LastName
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="wrapper">
            <label>
              Date of Birth
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="wrapper">
            <label>
              Start Date
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="wrapper">
            <h3>Adress</h3>
            <div className="wrapper-adress">
              <label>
                Street
                <input
                  type="text"
                  name="street"
                  value={formData.address.street}
                  onChange={handleAddressChange}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={formData.address.city}
                  onChange={handleAddressChange}
                />
              </label>
            </div>
            <div className="wrapper-adress">
              <label>
                Zip Code
                <input
                  type="text"
                  name="zipCode"
                  value={formData.address.zipCode}
                  onChange={handleAddressChange}
                />
              </label>
              <label>
                State
                <select
                  name="state"
                  value={formData.address.state}
                  onChange={handleAddressChange}
                >
                  {states.map((state, index) => (
                    <option key={state.index} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="wrapper">
            <label>
              Department
              <select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
              >
                {departments.map((department, index) => (
                  <option key={department.index} value={department.name}>
                    {department.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button className="btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};
