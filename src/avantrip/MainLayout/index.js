import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';

import {
  MainContainer,
  Content
} from './styled'


const MainLayout = ({children}) => (
  <MainContainer>
    <Header phoneText="0810-222-2826"></Header>
    <Content>
      {children}
    </Content>
    <Footer></Footer>
  </MainContainer>
)

MainLayout.propTypes = {
  children:PropTypes.node.isRequired
}
MainLayout.defaultProps = {}

export default MainLayout;
