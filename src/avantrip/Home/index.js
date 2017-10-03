import React from 'react';
import PropTypes from 'prop-types';
// import ProductCard from '../ProductCard';
import FlightSearchBox from '../FlightSearchBox/withData';
// import Slider from '../FlightSearchBox/withData';
import Slider from '../Slider';
import Text from '../Text';
import BestDeals from './BestDeals';
import {HomeContainer, MainSection, MaxWidth, FlightSearchBoxAbsolute, AgencyInfo, AgencyTitle, AgencyText, ChooseBestDeals} from './styled';

const Home = ({
  text,
  onClick,
  repos,
  getRepos,
  hoteles,
}) => (
  <HomeContainer onClick={onClick}>
    <MainSection>
      <MaxWidth>
        <FlightSearchBoxAbsolute>
          <FlightSearchBox
            title='busca tu vuelo'
          />
        </FlightSearchBoxAbsolute>

      </MaxWidth>
      <Slider>
        <img src="https://placeholdit.co//i/1440x465?&bg=e2432d&fc=fffff&text=Slide" />
        <img src="https://placeholdit.co//i/1440x465?&bg=e2432d&fc=fffff&text=Slide2" />
        <img src="https://placeholdit.co//i/1440x465?&bg=e2432d&fc=fffff&text=Slide3" />
        <img src="https://placeholdit.co//i/1440x465?&bg=e2432d&fc=fffff&text=Slide4" />
        <img src="https://placeholdit.co//i/1440x465?&bg=e2432d&fc=fffff&text=Slide5" />
      </Slider>
    </MainSection>


    <AgencyInfo>
      <AgencyTitle tag='h1' type='xxl'>
        Avantrip.com: Agencia de turismo y viajes
      </AgencyTitle>
      <AgencyText tag='p'>
        Somos una <strong>agencia de viajes</strong> con años de experiencia en la industria turística. En Avantrip.com podés elegir entre <strong>cientos de vuelos</strong> a destinos de todo el mundo, <strong>encontrar tu hotel ideal, seleccionar paquetes turísticos a medida</strong>, disfrutar de la mejor oferta de <strong>cruceros por el mundo</strong> y mucho más. Experimentá la facilidad de <strong>pagar en cuotas con todos los bancos</strong> y al precio más bajo con la mejor <strong>agencia de turismo</strong> de Argentina! Viví una experiencia de compra rápida, segura, fácil y empezá a disfrutar tus <strong>vacaciones con Avantrip.com</strong>. Ante cualquier duda o inconveniente podés llamar a nuestro centro de atención al cliente y recibir una respuesta rápida y satisfactoria.
      </AgencyText>
    </AgencyInfo>

    <ChooseBestDeals>
      <MaxWidth>
        <Text tag='h2' type='m'>
          Elegí las mejores ofertas...
        </Text>
        <BestDeals />
      </MaxWidth>
    </ChooseBestDeals>

    <div>Resto del contenido</div>
  </HomeContainer>
)

Home.propTypes = {}

Home.defaultProps = {}

export default Home;
