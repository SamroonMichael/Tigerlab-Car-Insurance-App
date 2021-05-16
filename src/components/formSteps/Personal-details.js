import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FormContext } from '../../MultiFormContext';
import validation from '../../utils/validation';
import Button from '../ui/Button';
import Input from '../ui/Input'
import { IoIosWarning } from 'react-icons/io';

/* form-styles */
import './form.css'

/* style-compontent */
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 12fr;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

const SideBarWapper = styled.div`
  position: relative;
`;

const FormWapper = styled.div`
  max-width: 570px;
  margin: auto;
  width: 100%;

  /* Error style */
  .error__wapper {
    display: flex;
    margin-top: 0.5rem;
    color: #ae1100;
  }
  .input__error {
    font-size: 12px;
    margin-bottom: 5px;
    font-weight: 900;
    color: #ae1100;
    width: 100%;
  }
  .danger__active {
    border: 0.186rem solid #ae1100;
  }
`;

const PersonalDetails = () => {
  // Destructuring props from FormContext
  const [formData, setformData] = useContext(FormContext);

  // Handling errors for personal details form
  const [errors, setErrors] = useState({});

  // Check is it redirecting to car page 
  const [isCarPage, setIsCarPage] = useState(false);

  // Handle onSubmit form data
  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    setValidation();
    checkFormValues();
  };

  // Set all fields validation errors
  const setValidation = () => {
    setErrors(validation(formData));
  };

  const checkFormValues = () => {
    //  Destructure personal fields data
    const { firstName, lastName, dob, underAge, email } = formData;

    // Check if all fields has vaule
    if (firstName === '') {
      return;
    } else if (lastName === '') {
      return;
    } else if (dob === '') {
      return;
    } else if (underAge < 18 && underAge > 100) {
      return;
    } else if (email === '') {
      return;
    } else {
      // Set true for redirecting to car detial page
      setIsCarPage(true);
    }
  };

  // If no error redirect to car details page
  if (isCarPage === true) {
    return <Redirect to="/car-details" />;
  }

  return (
    <Container>
      <SideBarWapper>
        <h1 className="side__bar__title">Personal Detail</h1>
        <p className="side__bar__Adcopy">
          First step to get lowest car insurace!
        </p>
      </SideBarWapper>
      <FormWapper>
        <div className="form__inner">
          <form onSubmit={handlePersonalSubmit} noValidate>
            
            {/* First Name Field */}
            <div className="form__input">
              <label className="input__label">First Name</label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setformData({ ...formData, firstName: e.target.value })
                }
                placeholder="Enter your first name"
                className={`${errors.firstName ? 'danger__active' : ''}`}
              />
              {errors.firstName && (
                <div className="error__wapper">
                  <i>
                    <IoIosWarning />
                  </i>
                  <p className="input__error">{errors.firstName}</p>
                </div>
              )}
            </div>
           
            {/* Last Name Field */}
            <div className="form__input">
              <label className="input__label">Last Name</label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setformData({ ...formData, lastName: e.target.value })
                }
                placeholder="Enter your last name"
                className={`${errors.lastName ? 'danger__active' : ''}`}
              />
              {errors.lastName && (
                <div className="error__wapper">
                  <i>
                    <IoIosWarning />
                  </i>
                  <p className="input__error">{errors.lastName}</p>
                </div>
              )}
            </div>
            {/* Date Of Birth Field */}
            <div className="form__input">
              <label className="input__label">Date of brith</label>
              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={(e) =>
                  setformData({ ...formData, dob: e.target.value })
                }
                className={`${errors.dob ? 'danger__active' : ''}`}
              />
              {errors.dob && (
                <div className="error__wapper">
                  <i>
                    <IoIosWarning />
                  </i>
                  <p className="input__error">{errors.dob}</p>
                </div>
              )}
            </div>
            {/* Email Field */}
            <div className="form__input">
              <label className="input__label">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setformData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email-address"
                className={`${errors.email ? 'danger__active' : ''}`}
              />
              {errors.email && (
                <div className="error__wapper">
                  <i>
                    <IoIosWarning />
                  </i>
                  <p className="input__error">{errors.email}</p>
                </div>
              )}
            </div>

            <div className="form__btn__wapper">
              <Button type="submit" className="form__btn-personal">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </FormWapper>
    </Container>
  );
};

export default PersonalDetails;
