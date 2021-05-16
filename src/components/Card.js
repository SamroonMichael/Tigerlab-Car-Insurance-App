import React from 'react'

/* style-compontent */
import styled from 'styled-components';

const CardWapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: 300px;
  box-shadow: 0 30px 60px 0 rgb(90 116 148 / 20%);
  border-radius: 10px;
  padding: 2.2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .card__title,
  .card__detials {
    color: #1a3b5d;
    width: 100%;
    display: block;
    padding: 0.5rem;
    font-weight: 500;

    h3 {
        margin-bottom: 0.5rem;
    }

  }


`;

const Card = ({
    firstName,
    lastName,
    email,
    plateNumber,
    carMake,
    carModel,
    carManufactureDate,
}) => {
  return (
    <>
      <CardWapper>
        <div className="card__title">
          <h3>Person Details</h3>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>{email}</p>
        </div>
        <div className="card__detials">
          <h3>Car Details</h3>
          <p>Car Make: {carMake}</p>
          <p>Car Model: {carModel}</p>
          <p>Plate Number: {plateNumber}</p>
          <p>Car Manufacture Date: {carManufactureDate}</p>
        </div>
      </CardWapper>
    </>
  );
};


export default Card;
