import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../images/tigerlab-logo.png'
import Button from '../ui/Button'

/* style-compontent */
import styled from 'styled-components';

const HeaderWapper = styled.header`
  display: block;
  grid-template-columns: 6fr 6fr;
  align-items: center;
  width: 100%;
  height: 95px;
  box-shadow: 20px 20px 60px #c8c9cc, -20px -20px 60px #ffffff;
  padding: 0.5rem;

  .header__inner {
    display: grid;
    grid-template-columns: 6fr 6fr;
    align-items: center;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    padding: 0.7rem;

    .logo__wapper {
      width: 50%;

      img {
        width: 50%;
      }
    }

    .title__wapper {
      text-align: right;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;

      h1 {
        margin-top: 13px;
      }

      .log__btn {
        width: 65px;
        height: 65px;
        border-radius: 20%;
        padding: 0.3rem;

        a {
          color: #ae1100;
          font-size: 9px;
          font-weight: 900;
          font-family: 'Lato', 'sans-serif';
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    height: 75px;

    .header__inner {
      padding: 0.5rem;
      grid-template-columns: 4fr 8fr;

      .logo__wapper {
        width: 100%;
      }

      .title__wapper {
        h1 {
          font-size: 20px;
          margin-top: 0;
        }
        .log__btn {
          width: 40px;
          height: 40px;

          a {
            font-size: 8px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    height: 70px;

    .header__inner {
      padding: 0.3rem;
      grid-template-columns: 3fr 9fr;

      .logo__wapper {
        width: 100%;

        img {
          width: 60%;
        }
      }

      .title__wapper {
        h1 {
          font-size: 18px;
          margin-top: 0;
        }

        .log__btn {
          width: 40px;
          height: 40px;

          a {
            font-size: 8px;
          }
        }
      }
    }
  }
`;

const Header = () => {
    const [personName, setPersonName] = useState('')

    useEffect(() => {
      if (localStorage.getItem('userName') !== null) {
        const name = localStorage.getItem('userName');
        setPersonName(name);
      }
    }, [personName]);

    return (
      <HeaderWapper>
        <div className="header__inner">
          <div className="logo__wapper">
            <Link to="/dashboard">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="title__wapper">
            <h1>Welcome {personName || 'admin'} 👋</h1>
            <Button className="log__btn">
              <Link to="/">Logout!</Link>
            </Button>
          </div>
        </div>
      </HeaderWapper>
    );
}

export default Header
