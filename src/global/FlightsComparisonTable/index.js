import React from 'react';
import PropTypes from 'prop-types';
import {Container, ScalesButton, Column, ColumnCenter, PriceContainer, AirlinesSlider} from './styled';
import Text from '../Text';
import Price from '../Price';
import Icon from '../Icon';
import Slider from '../Slider';

const groupByAirlineName = flights => _.groupBy(flights, 'airlineName');


const getBestPriceByStop = flights =>
	_.map(flights, (flightData, stopType) => {
		return {
   		'stopType' : stopType,
   		'price' : _.minBy(flightData,'price').price
		}
	})


const getBestPricesByStop = groupedFlightsByAirline =>
	_.map(groupedFlightsByAirline, ( flights , airlineName ) => {
    return {
    	airlineName: airlineName,
    	label:flights[0].label,
    	logo: flights[0].logo,
    	stops: _.orderBy(getBestPriceByStop(_.groupBy( flights , 'stopType')), 'stopType')
    }
  })


const getBestPricesByStopWithGroupedFlights = groupedFlights => {

	const stopsAndPrices = _.reduce(groupedFlights, ( acc, current ) =>
		acc.concat(current.stops), [])

	const groupedByStops = _.groupBy(stopsAndPrices, 'stopType');

	const bestPricesByStops = _.map(groupedByStops, f => _.minBy(f, 'price'))

	return bestPricesByStops;
}


const flightGroupStyle = {
	display: 'flex',
	flexDirection: 'column',
	margin:'10px'
}

const sliderSettings = {
  dots: false,
  slidesToShow: 5,
  infinite: false,
};
const mobileSliderSettings = {
  dots: false,
  slidesToShow: 2,
  infinite: false,
  centerMode: true
};


const FlightsComparisonTable = ({flights, media}) => {
  const groupedFlightsByAirlines = getBestPricesByStop(groupByAirlineName(flights));

  const groupedBestFlightsByPrice = getBestPricesByStopWithGroupedFlights(groupedFlightsByAirlines);

  return(
    <Container>
      <Column>
        <Text tag='h2'>
          Precio más bajo por adulto
        </Text>
        <ScalesButton tag='p'>
          Vuelo directo
        </ScalesButton>
        <ScalesButton tag='p'>
          1 escala
        </ScalesButton>
        <ScalesButton tag='p'>
          2 o más escalas
        </ScalesButton>
      </Column>

      <ColumnCenter>
        <Text tag='strong' color='success'>
					<Icon id='Pass' width='16px' height='14px' color='success' />
          Mejor precio
        </Text>

        {_.map(groupedBestFlightsByPrice, f =>

          <PriceContainer>
						<Price price={f.price} color='primary' />
          </PriceContainer>

        )}
      </ColumnCenter>
      <AirlinesSlider>
        <Slider settings={media.size < 2 ? mobileSliderSettings:sliderSettings}>
					{_.map(groupedFlightsByAirlines, (flights, airlineName) =>
	          (
	            <div style={flightGroupStyle} >
	              <div>
	                <div>
	                  <img src={flights.logo} />
	                </div>
	                <div>
	                  {flights.label}
	                </div>
	              </div>
	              {_.map(flights.stops, f =>
	                <div>
	                  -------------
	                  <br />
	                  {f.price}
	                </div>
	              )}
	            </div>
	          )
	        )}
				</Slider>
      </AirlinesSlider>
    </Container>
  )
}

FlightsComparisonTable.propTypes = {
  flights: PropTypes.array.isRequired
}

FlightsComparisonTable.defaultProps = {

}

export default FlightsComparisonTable;
