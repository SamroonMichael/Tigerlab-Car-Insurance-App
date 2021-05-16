import { createContext, useState } from 'react';

export const FormContext = createContext();

export const MultiFormContext = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    plateNumber: '',
    fiveYearClaims: '',
    drivingLicenseYears: '',
    carMake: '',
    carModel: '',
    carManufactureDate: '',
  });

  const [formSubmissionData, setFormSubmissionData] = useState([]);

  return (
    <FormContext.Provider
      value={[formData, setFormData, formSubmissionData, setFormSubmissionData]}
    >
      {children}
    </FormContext.Provider>
  );
};
