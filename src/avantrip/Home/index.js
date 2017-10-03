import React from 'react';
import PropTypes from 'prop-types';
// import ProductCard from '../ProductCard';
import FlightSearchBox from '../FlightSearchBox/withData';
// import Slider from '../FlightSearchBox/withData';
import Slider from '../Slider';
import {MainSection, MaxWidth, FlightSearchBoxAbsolute} from './styled';

const Home = ({
  text,
  onClick,
  repos,
  getRepos,
  hoteles,
}) => (
  <div onClick={onClick}>
    <MainSection>
      <MaxWidth>
        <FlightSearchBoxAbsolute>
          <FlightSearchBox
            title='busca tu vuelo'
          />
        </FlightSearchBoxAbsolute>
        <Slider>
            <img src="https://placeholdit.co//i/1440x465?&bg=e2432d&fc=fffff&text=Slide" />
            <img src="https://placeholdit.co//i/1440x465?&bg=e2432d&fc=fffff&text=Slide2" />
            <img src="https://placeholdit.co//i/1440x465?&bg=e2432d&fc=fffff&text=Slide3" />
            <img src="https://placeholdit.co//i/1440x465?&bg=e2432d&fc=fffff&text=Slide4" />
            <img src="https://placeholdit.co//i/1440x465?&bg=e2432d&fc=fffff&text=Slide5" />
        </Slider>

      </MaxWidth>
    </MainSection>
    <div>Resto del contenido</div>
  </div>
)

Home.propTypes = {}

Home.defaultProps = {}

export default Home;
