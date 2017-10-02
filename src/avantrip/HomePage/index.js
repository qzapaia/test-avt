import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import {MainContainer} from './styled'


const HomePage = () => (
  <MainContainer>
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </MainContainer>
)

HomePage.propTypes = {}

HomePage.defaultProps = {}

export default HomePage;
