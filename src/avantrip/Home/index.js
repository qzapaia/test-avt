import React from 'react';
import PropTypes from 'prop-types';
// import ProductCard from '../ProductCard';
import FlightSearchBox from '../FlightSearchBox/withData';
import Slider from '../FlightSearchBox/withData';

const Home = ({
  text,
  onClick,
  repos,
  getRepos,
  hoteles,
}) => (
  <div onClick={onClick}>
    La Home
    {/* <Container>
      <Slider Home />
      <FlightSearchBox
        title='busca tu vuelo'
      />
    </Container>
    <ParteCentral>
      <ProductCardList  />
      <ProductCardList  />
    </ParteCentral>
    <Subcribe></Subcribe>

    <Disclaimer></Disclaimer>
    <Offers></Offers> */}

  </div>
)

Home.propTypes = {
  text: PropTypes.node.isRequired,
  hoteles: PropTypes.arr,
  getRepos: PropTypes.func,
  repos: PropTypes.arr,
}

Home.defaultProps = {
  text:'no value yet :(',
  hoteles:[],
  getRepos(){},
  repos:[],
}

export default Home;
