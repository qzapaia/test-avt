import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/withData';
import Footer from '../../global/Footer/withData';

import {
  MainContainer,
  Content
} from './styled'


const MainLayout = ({children}) => (
  <MainContainer>
    <Header phoneText="0810-222-2826" />
    <Content>
      {children}
    </Content>
    <Footer />
  </MainContainer>
)

MainLayout.propTypes = {
  children:PropTypes.node.isRequired
}
MainLayout.defaultProps = {}

export default MainLayout;
