import React, { useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormContext } from '../../MultiFormContext';
import validation from '../../utils/validation';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { IoIosWarning } from 'react-icons/io';

/* firebase */
import firebase from '../../firebase';

/* form-styles */
import './form.css';

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

const CarDetails = () => {
  const [formData, setformData, formSubmissionData, setFormSubmissionData] =
    useContext(FormContext);

  // Handling errors for car details form
  const [errors, setErrors] = useState({});

  // Check valid age
  const [ageCheck, setAgeCheck] = useState(0);

  // Redirect to Compelet page
  const [isCompeleted, setIsCompeleted] = useState(false);

  // Init array to loop select option 
  const [carModelOption, setCarModelOption] = useState([]);

  // Handle full data form submit
  const handleCarSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(formData));
    checkFormValues();
    if (ageCheck < 18 || ageCheck > 100) {
      alert(
        'Eligibility age above 18 less then 100! Please check your age again'
      );
      return;
    } else {
      setFormSubmissionData((formSubmissionData) => [
        ...formSubmissionData,
        formData,
      ]);
      // // Send data to fireStore
      const db = firebase.firestore();
      db.collection('carInsurance')
        .doc()
        .set(formData)
        .then(() => {
          console.log('Data has been saved');
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    // Clear all form fields if completed is true
    {
      isCompeleted
        ? setformData({
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
          })
        : null;
    }
  };

  const checkFormValues = () => {
    //  Destructure car details fields data
    const { plateNumber, carMake, carModel, carManufactureDate } = formData;

    // Check if all fields has vaule
    if (plateNumber === '') {
      return;
    } else if (
      !formData.fiveYearClaims === 'yes' ||
      !formData.fiveYearClaims === 'no' ||
      formData.fiveYearClaims === ''
    ) {
      return;
    } else if (formData.drivingLicenseYears === '') {
      return;
    } else if (carMake === '') {
      return;
    } else if (carModel === '') {
      return;
    } else if (carManufactureDate === '') {
      return;
    } else {
      // Set true for redirecting to completed page
      setIsCompeleted(true);
    }
  };

  // Calculate age from dob value provided on previous step
  useEffect(() => {
    const calcAge = () => {
      const today = new Date();
      const birthDate = new Date(formData.dob);
      let ageNow = today.getFullYear() - birthDate.getFullYear();
      setAgeCheck((ageNow += ageNow));
    };

    calcAge();
    
  }, []);

  useEffect(() => {
    /* Condition for car model based on car make */
    if (formData.carMake === 'audi') {
      setCarModelOption(['A5', 'R8']);
    } else if (formData.carMake === 'bmw') {
      setCarModelOption(['M8', 'X5']);
    } else if (formData.carMake === 'landRover') {
      setCarModelOption(['Defender', 'Range Rover']);
    } else if (formData.carMake === 'mercedesBenz') {
      setCarModelOption(['AMG', 'S']);
    } else if (formData.carMake === 'perodua') {
      setCarModelOption(['Bezza', 'Myvi']);
    } else if (formData.carMake === 'toyota') {
      setCarModelOption(['Camry', 'Vios']);
    } else {
      return;
    }
  }, [formData]);

  // If no error redirect submit successful
  if (isCompeleted === true) {
    return <Redirect to="/completed" />;
  }

  return (
    <Container>
      <SideBarWapper>
        <h1 className="side__bar__title">Car Detail</h1>
        <p className="side__bar__Adcopy">
          You are just one click away to get in of the best car insurace price
          out there!
        </p>
      </SideBarWapper>
      <FormWapper>
        <div className="form__inner">
          <form onSubmit={handleCarSubmit} noValidate autoComplete="off">
            {/* Plate Number Field */}
            <div className="form__input">
              <label className="input__label">Plate Number</label>
              <Input
                type="text"
                name="palteNumber"
                value={formData.plateNumber}
                onChange={(e) =>
                  setformData({ ...formData, plateNumber: e.target.value })
                }
                placeholder="eg: WD1234A"
                className={`${errors.plateNumber ? 'danger__active' : ''}`}
              />
              {errors.plateNumber && (
                <div className="error__wapper">
                  <i>
                    <IoIosWarning />
                  </i>
                  <p className="input__error">{errors.plateNumber}</p>
                </div>
              )}
            </div>

            {/* Claim Field */}
            <div className="form__input">
              <label className="input__label">
                Do you made any Claims in last 5 years
              </label>
              <div className="radio">
                <div className="radio__box">
                  <input
                    type="radio"
                    value="yes"
                    name="clamis"
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        fiveYearClaims: e.target.value,
                      })
                    }
                    checked={formData.fiveYearClaims === 'yes'}
                    className={`radio__input ${
                      errors.fiveYearClaims ? 'danger__active' : ''
                    }`}
                    required
                  />
                </div>
                <span className="radio__text">Yes</span>
              </div>
              <div className="radio">
                <div className="radio__box">
                  <input
                    type="radio"
                    value="no"
                    onChange={(e) =>
                      setformData({
                        ...formData,
                        fiveYearClaims: e.target.value,
                      })
                    }
                    checked={formData.fiveYearClaims === 'no'}
                    className={`radio__input ${
                      errors.fiveYearClaims ? 'danger__active' : ''
                    }`}
                    required
                  />
                </div>
                <span className="radio__text">No</span>
              </div>
              {errors.fiveYearClaims && (
                <div className="error__wapper">
                  <i>
                    <IoIosWarning />
                  </i>
                  <p className="input__error">{errors.fiveYearClaims}</p>
                </div>
              )}
            </div>

            {/* Driving License Field */}
            <div className="form__input">
              <label className="input__label">
                How many Years do you have Driving License?
              </label>
              <select
                name="drivnig license"
                value={formData.drivingLicenseYears}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    drivingLicenseYears: e.target.value,
                  })
                }
                className={`select ${
                  errors.drivingLicenseYears ? 'danger__active' : ''
                }`}
                required
              >
                <option value="">Select</option>
                <option value={'0'}>0</option>
                <option value={'1'}>1</option>
                <option value={'2'}>2</option>
                <option value={'3'}>3</option>
                <option value={'4'}>4</option>
                <option value={'5+'}>5+</option>
              </select>
              {errors.drivingLicenseYears && (
                <div className="error__wapper">
                  <i>
                    <IoIosWarning />
                  </i>
                  <p className="input__error">{errors.drivingLicenseYears}</p>
                </div>
              )}
            </div>

            {/* Car Make Field */}
            <div className="form__input">
              <label className="input__label">Car Make</label>
              <select
                name="car make"
                value={formData.carMake}
                onChange={(e) =>
                  setformData({ ...formData, carMake: e.target.value })
                }
                className={`select ${errors.carMake ? 'danger__active' : ''}`}
              >
                <option value="">Select</option>
                <option value="audi">AUDI</option>
                <option value="bmw">BMW</option>
                <option value="landRover">LAND ROVER</option>
                <option value="mercedesBenz">MERCEDES BENZ</option>
                <option value="perodua">PERODUA</option>
                <option value="toyota">TOYOTA</option>
              </select>
              {errors.carMake && (
                <div className="error__wapper">
                  <i>
                    <IoIosWarning />
                  </i>
                  <p className="input__error">{errors.carMake}</p>
                </div>
              )}
            </div>

            {/* Car Model Field */}
            <div className="form__input">
              <label className="input__label">Car Model</label>
              <select
                name="car model"
                value={formData.carModel}
                onChange={(e) =>
                  setformData({ ...formData, carModel: e.target.value })
                }
                className={`select ${errors.carModel ? 'danger__active' : ''}`}
              >
                <option value="">Select Car Make</option>
                {carModelOption.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
              {errors.carModel && (
                <div className="error__wapper">
                  <i>
                    <IoIosWarning />
                  </i>
                  <p className="input__error">{errors.carModel}</p>
                </div>
              )}
            </div>

            {/* Car Manufacture Field */}
            <div className="form__input">
              <label className="input__label">Car Manufacture Date</label>
              <Input
                type="text"
                name="car manufacture"
                value={formData.carManufactureDate}
                onChange={(e) =>
                  setformData({
                    ...formData,
                    carManufactureDate: e.target.value,
                  })
                }
                placeholder="eg: W124202AMG"
                className={`${
                  errors.carManufactureDate ? 'danger__active' : ''
                }`}
              />
              {errors.carManufactureDate && (
                <div className="error__wapper">
                  <i>
                    <IoIosWarning />
                  </i>
                  <p className="input__error">{errors.carManufactureDate}</p>
                </div>
              )}
            </div>
            <div className="form__btn__wapper">
              <Button
                style={{ marginRight: '1rem' }}
                className="form__button-back"
              >
                <Link to="/personal-details">Back</Link>
              </Button>
              <Button type="submit" className="form__button-car">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </FormWapper>
    </Container>
  );
};

export default CarDetails;
