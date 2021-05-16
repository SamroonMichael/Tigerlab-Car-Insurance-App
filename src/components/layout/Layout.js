import React from 'react'
import Header from './Header'
import Footer from './Footer'

/* style-compontent */
import styled from 'styled-components';

const Main = styled.main`
  max-width: 1220px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0.6rem;
`;

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}

export default Layout
