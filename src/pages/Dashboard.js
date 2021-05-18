import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Card from '../components/ui/Card';
import PropTypes from 'prop-types';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom'

/* style-compontent */
import styled from 'styled-components';

const ContentWapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  .add__insurance {
    width: 100%;
    border-bottom: 1px #cac7c7 solid;

    .insurance__wapper {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 0 auto;
      background-color: #efefef;
      padding: 0.5rem;
      text-align: center;
      box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      margin-bottom: 1rem;
      position: relative;

      &:hover {
        box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
      }

      &:active {
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
      }

      a {
        position: absolute;
        top: 30px;
        left: 10px;
        color: #ae1100;
        font-weight: 900;
      }
    }
  }
  .card__inner {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-right: 3rem;

    .loader {
      height: 200px;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .card__inner {
      margin-right: 0;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .card__inner {
      margin-right: 0;
      text-align: center;
    }
  }
`;

const Dashboard = () => {
  const [carData, setCarData] = useState([]);
  // Loading data from firestore
  const [isLoading, setIsLoading] = useState(false);

  // Fetch car insurance form data from firebase
  const fetchData = () => {
    const db = firebase.firestore();
    const response = db.collection('carInsurance');
    response
      .get()
      .then((item) => {
        setIsLoading(true);
        const items = item.docs.map((doc) =>  doc.data())
        setCarData(items);
        
      })
      .catch((error) => {
        console.log(error.message);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContentWapper>
      <div className="add__insurance">
        <div className="insurance__wapper">
          <Link to="/personal-details">
            <FaPen />
            <h2>Register here!</h2>
          </Link>
        </div>
      </div>
      <div className="card__inner">
        {!isLoading ? (
          <h1 className="loader">Data Loading...</h1>
        ) : (
          carData.map((list, key) => {
            return (
              <Card
                key={key}
                firstName={list.firstName}
                lastName={list.lastName}
                dob={list.dob}
                email={list.email}
                plateNumber={list.plateNumber}
                drivingLicenseYears={list.drivingLicenseYears}
                carMake={list.carMake}
                carModel={list.carModel}
                carManufactureDate={list.carManufactureDate}
              />
            );
          })
        )}
      </div>
    </ContentWapper>
  );
};

Dashboard.proptypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  plateNumber: PropTypes.string.isRequired,
  drivingLicenseYears: PropTypes.string.isRequired,
  carMake: PropTypes.string.isRequired,
  carModel: PropTypes.string.isRequired,
  carManufactureDate: PropTypes.string.isRequired,
};

export default Dashboard;
