// src/components/RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ setUsers }) => {
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
    },
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/users', formData)
      .then(function (response) {
        console.log(response);
        setUsers((users) => [...users, formData]);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          age: '',
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='container form-box py-5'>
      <h3 className='mb-4'>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6 mb-4'>
            <label htmlFor='firstName' className='form-label'>
              First Name
            </label>
            <input
              type='text'
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              value={formData.firstName}
              className='form-control'
              id='firstName'
            />
          </div>
          <div className='col-md-6 mb-4'>
            <label htmlFor='lastName' className='form-label'>
              Last Name
            </label>
            <input
              type='text'
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              value={formData.lastName}
              className='form-control'
              id='email'
            />
          </div>
          <div className='col-md-6 mb-4'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              className='form-control'
              id='email'
            />
          </div>
          <div className='col-md-6 mb-4'>
            <label htmlFor='age' className='form-label'>
              Age
            </label>
            <input
              type='number'
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              value={formData.age}
              className='form-control'
              id='age'
            />
          </div>
        </div>
        {/*more forms */}
        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
