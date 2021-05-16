import React from 'react'
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { FaCheckCircle } from 'react-icons/fa';

/* style-compontent */
import styled from 'styled-components';

const CompletedWapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 70vh;
  justify-content: center;
  align-items: center;
  align-content: center;

  span {
    svg {
      color: green;
      font-size: 4.5rem;
    }
  }

  .content {
    padding: 1.5rem;
    line-height: 1.6;
    text-align: center;

    h1 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  .btn__comp {
    margin-top: 2rem;
    width: 30%;
    font-size: 1.2rem;

    @media screen and (max-width: 920px) {
      width: 55%;
    }
  }
`;

const Completed = () => {

    return (
      <CompletedWapper>
        <span>
          <FaCheckCircle />
        </span>
        <div className="content">
          <h1>Thank you! for completing your submission</h1>
          <p>
            One of our representative will contant you shortly. We appreciate
            your patience. Have a nice one 🍻
          </p>
        </div>
        <Button className="btn__comp">
          <Link to="/dashboard">Go back Home</Link>
        </Button>
      </CompletedWapper>
    );
}

export default Completed

