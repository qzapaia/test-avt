import React from 'react';
import PropTypes from 'prop-types';
import FlightSearchBox from '../FlightSearchBox/withData';
import FeaturedDeals from '../FeaturedDeals/withData';
import Text from '../Text';
import Subscribe from '../Subscribe';
import BestDeals from './BestDeals';
import Link from '../Link';
import FinancingPromotion from '../FinancingPromotion/withData';
import {HomeContainer, MainSection, MaxWidth, FlightSearchBoxAbsolute, FeaturedSection, CardsContainer, FlightsBestSellers, FlightsBestSellersTitle, ListContainer, FinancePromo, SubscribeSection, SubscribeForm, AgencyInfo, AgencyTitle, AgencyText, ChooseBestDeals} from './styled';
import FeaturedProducts from '../FeaturedProducts/withData';

const Home = ({
  text,
  onClick,
  repos,
  getRepos,
  hoteles,
  media
}) => (
  <HomeContainer onClick={onClick}>
    <MainSection>
      <MaxWidth>
        <FlightSearchBoxAbsolute>
          <FlightSearchBox
            title='Buscá tu vuelo'
          />
        </FlightSearchBoxAbsolute>

      </MaxWidth>
      {/* Slider Home: */}
      <FeaturedDeals />
    </MainSection>

    <FeaturedSection>
      <CardsContainer mobile={media.size < 4}>
        <FeaturedProducts
          layout={media.size}
          type="promotionalFlights"
        />
      </CardsContainer>
      <ListContainer layout={media.size}>
        <FinancingPromotion />
        <FlightsBestSellers layout={media.size}>
          <FlightsBestSellersTitle tag='h2' type='l' color='brand'>
            Vuelos más vendidos de la semana
          </FlightsBestSellersTitle>
          <FeaturedProducts
            type="bestSellers"
            listMode={media.size > 0} />
        </FlightsBestSellers>
      </ListContainer>

    </FeaturedSection>



    <SubscribeSection>
      <MaxWidth>
        <Subscribe layout={media.size} buttonText='Suscribirme' title="Recibí nuestras últimas ofertas" />
      </MaxWidth>
    </SubscribeSection>

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
        <BestDeals layout={media.size} />
      </MaxWidth>
    </ChooseBestDeals>

  </HomeContainer>
)

Home.propTypes = {}

Home.defaultProps = {}

export default Home;
