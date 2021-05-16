import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { IoIosArrowRoundForward } from 'react-icons/io';

/* style-compontent */
import styled from 'styled-components';

const LandingPageWapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const CardWapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 6fr 6fr;
  align-items: center;
  position: relative;
  margin-left: auto;
  order: 2;
  background-color: #ebecf0;

  .hero__title {
    padding: 0.5rem;

    h2 {
      font-size: 4.5rem;
      letter-spacing: -6px;
      margin-left: 1.5rem;
      text-decoration: underline;
    }
    p {
      font-size: 1.5rem;
      margin-left: 1.5rem;
      text-decoration: underline;
    }
  }

  .cta__wapper {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    width: 70%;
    height: 400px;
    margin: 0 auto;
    padding: 3.75rem 2.188rem 2.188rem 2.188rem;
    border-radius: 40px;
    background-color: #ebecf0;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
    text-align: center;

    h2 {
      font-size: 1.3rem;
      letter-spacing: 2px;
    }

    form {
      padding: 0.5rem;

      h3 {
          text-align: left;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 16px;
      }

      input {
        width: 100%;
      }

      .home__sub-btn {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        font-size: 1rem;
        margin-top: 1rem;
        color: #ae1100;
        font-family: 'Lato', sans-serif;
        font-weight: 900;
      }

      .icon__forward {
        svg {
          width: 1.5em;
          height: 1.5em;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0.8rem;

    .hero__title {
      h2 {
        margin-left: 0;
        font-size: 2.7rem;
        letter-spacing: -4px;
      }

      p {
        margin-left: 0;
      }
    }

    .cta__wapper {
      width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-flow: column nowrap;
    padding: 0.6rem;

    .hero__title {
      h2 {
        margin-left: 0;
        font-size: 2.5rem;
        letter-spacing: -2px;
        text-decoration: none;
      }

      p {
        margin-left: 0;
        text-decoration: none;
      }
    }

    .cta__wapper {
      width: 100%;
      height: 350px;
      margin-top: 2.7rem;

      h2 {
        font-size: 1.3rem;
        letter-spacing: 1px;
      }

      form {
        .home__sub-btn {
          width: 90%;
        }
      }
    }

    @media screen and (max-width: 320px) {
      .hero__title {
        h2 {
          font-size: 2rem;
        }
      }
    }
  }
`;

const LandingPage = () => {
    const [username, setUserName] = useState('');
    const [isUserName, setIsUserName] = useState(false);
    
    // On Username form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', username);
        setIsUserName(true)
        // Clear username field
        setUserName('');
    }

    if (isUserName === true) {
      return <Redirect to="/dashboard" />;
    }

  return (
    <LandingPageWapper>
      <CardWapper>
        <div className="hero__title">
          <h2>Best Car Insurance</h2>
          <p>For lowest price.</p>
        </div>

        <div className="cta__wapper">
          <h2>Please enter a user name.</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Enter a user name</h3>
              <Input
                required
                label="User Name"
                placeholder="Please enter your preferd username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <Button type="submit" className="home__sub-btn">
                Lets start
                <i className="icon__forward">
                  <IoIosArrowRoundForward />
                </i>
              </Button>
            </div>
          </form>
        </div>
      </CardWapper>
    </LandingPageWapper>
  );
};

export default LandingPage;
