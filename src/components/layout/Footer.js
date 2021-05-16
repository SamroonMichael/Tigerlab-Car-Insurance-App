import React from 'react'

/* style-compontent */
import styled from 'styled-components';

const FooterWapper = styled.footer`
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 30px;
  align-items: center;
  padding: 2% 0;
  max-width: 1020px;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  margin-top: 2.5rem;
  text-align: center;
  border-top: 1px #cac7c7 solid;

  @media only screen and (max-width: 640px) {
    font-size: 10pt;
  }
`;

const Footer = () => {
    return (
      <FooterWapper>
        <div>
          <a href="https://www.linkedin.com/in/samroonmichael/">
            Project © 2021 Samroom Michael
          </a>
        </div>
        <div>
          <a href="https://omnilytics.co/">For Tigerlabs Sdn Bhd</a>
        </div>
      </FooterWapper>
    );
}

export default Footer
