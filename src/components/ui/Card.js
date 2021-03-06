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

  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 300px;
    flex-flow: column nowrap;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    flex-flow: column nowrap;
    padding: 1rem;

    .card__title,
    .card__detials {
      font-size: 14px;
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
          <p>Make: {carMake}</p>
          <p>Model: {carModel}</p>
          <p>Plate Num: {plateNumber === 'hi' ? null : plateNumber}</p>
          <p>Manufacture: {carManufactureDate}</p>
        </div>
      </CardWapper>
    </>
  );
};


export default Card;
