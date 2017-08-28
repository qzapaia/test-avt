import React from 'react';
import PropTypes from 'prop-types';
import HomeContainer from './HomeContainer.styled'
const HomePage = ({header,
                   banner,
                   offers,
                   offerTwo,
                   offerThree,
                   subscribe,
                   links,
                   footer}) => (
  <HomeContainer>
    la home
    <header></header>
    <banner></banner>

  </HomeContainer>
)

HomePage.propTypes = {
  text: PropTypes.string.isRequired
}

HomePage.defaultProps = {
  text:'HomePage component'
}

export default HomePage;
