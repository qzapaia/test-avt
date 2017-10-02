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
    <FlightSearchBox
      title='busca tu vuelo'
    />
    <div>Resto del contenido</div>
  </div>
)

Home.propTypes = {}

Home.defaultProps = {}

export default Home;
