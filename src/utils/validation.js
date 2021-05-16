const validation = (value) => {

  let errors = {};
  
  // const ageCovert = value.dob;
  // let ageNow;
  // Age validator
    // const today = new Date();
    // const birthDate = new Date(ageCovert); // create a date object directly from `dob` argument
    // ageNow = today.getFullYear() - birthDate.getFullYear();
    // const m = today.getMonth() - birthDate.getMonth();
    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //   ageNow--;
    //   return ageNow;
    // }


  if (!value.firstName) {
    errors.firstName = 'First Name is required';
  }
  if (!value.lastName) {
    errors.lastName = 'Last Name is required'; 
  }
  if (!value.dob) {
    errors.dob = 'Date of birth is required';
  } else {
    errors.dob = 'Eligibility age above 18';
  }
  if (!value.email) {
    errors.email = 'Email is required';
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      value.email
    )
  ) {
    errors.email = 'Email is invalid';
  }
  if (!value.plateNumber) {
    errors.plateNumber = 'Plate Number is required';
  }
  if (!value.fiveYearClaims) {
    errors.fiveYearClaims = 'Claims are required';
  }
  if (!value.drivingLicenseYears) {
    errors.drivingLicenseYears = 'Driving license is required';
  }
  if (!value.carMake) {
    errors.carMake = 'Car make is required';
  }
  if (!value.carModel) {
    errors.carModel = 'Car Model is required';
  }
  if (!value.carManufactureDate) {
    errors.carManufactureDate = 'Manufacture date is required';
  }

  return errors;
};

export default validation;
