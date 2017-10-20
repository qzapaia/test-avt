import React from 'react';
import PropTypes from 'prop-types';

import {Container, ScalesButton, Column, ColumnCenter, PriceContainer, AirlinesSlider, FlightItem, ListItem, FlightItemContainer, Title, AirlineLogoName} from './styled';
import Text from '../Text';
import Price from '../Price';
import Icon from '../Icon';
import Slider from '../Slider';
import AirlineLogo from "../AirlineLogo";

import {
  map,
  orderBy,
  groupBy,
  minBy,
  reduce,
  filter
} from 'lodash';

const onHandlerStop = (next, value) =>{
  next({
    type:"stop",
    value
  });
}

const onHandlerPrice = (next, value) =>{
  next({
    type:"price",
    value
  });
}

const groupByAirlineName = flights => groupBy(flights, 'airline.name');

const getBestPriceByStop = flights =>{
  const temp = [];
  for (var i = 0; i < 3; i++) {
    temp.push({
   		'stopType' : i,
   		'price' : flights[i] ? minBy(flights[i],'price').price : ""
		});
  }
  return temp;
}

const getBestPricesByStop = groupedFlightsByAirline =>
	map(groupedFlightsByAirline, flights => {
    return {
    	...flights[0],
    	stops: orderBy(getBestPriceByStop(groupBy( flights , 'stopType')), 'stopType')
    }
  })


const getBestPricesByStopWithGroupedFlights = groupedFlights => {

	const stopsAndPrices = reduce(groupedFlights, ( acc, current ) =>
		acc.concat(current.stops), [])

	const groupedByStops = groupBy(stopsAndPrices, 'stopType');

	return map(groupedByStops, f => minBy(filter(f, fl =>( fl.price != "")), 'price'));
}

const sliderSettings = {
  autoplay: false,
  dots: false,
  infinite: false,
  slidesToShow: 3,
};
const mobileSliderSettings = {
  ...sliderSettings,
  slidesToShow: 2,
  centerMode: true
};

const FlightsComparisonTable = ({ flights, media, onSearch }) => {
  const groupedFlightsByAirlines = getBestPricesByStop(
    groupByAirlineName(flights)
  );

  const groupedBestFlightsByPrice = getBestPricesByStopWithGroupedFlights(
    groupedFlightsByAirlines
  );

  return(
    <Container>
      <Column>
        <Title tag='h2'>
          Precio más bajo por adulto
        </Title>
        <ScalesButton onClick={e => onHandlerStop(onSearch, 0)} tag='p'>
          Vuelo directo
        </ScalesButton>
        <ScalesButton onClick={e => onHandlerStop(onSearch, 1)} tag='p'>
          1 escala
        </ScalesButton>
        <ScalesButton onClick={e => onHandlerStop(onSearch, 2)} tag='p'>
          2 o más escalas
        </ScalesButton>
      </Column>

      <ColumnCenter>
        <Title tag='h2' color='success'>
					<Icon id='Pass' width='16px' height='14px' color='success' />
          Mejor precio
        </Title>

        {map(groupedBestFlightsByPrice, f =>

          <PriceContainer>
            {f && f.price != "" &&
              <Price price={f.price} color='primary' onClick={e => onHandlerPrice(onSearch, f.price)} />
            }
            {f && f.price == "" && "-" }
            {!f && "-"}
          </PriceContainer>

        )}
      </ColumnCenter>
      <AirlinesSlider layout={media.size}>
        <Slider settings={media.size < 2 ? mobileSliderSettings:sliderSettings}>
	  {map(groupedFlightsByAirlines, flights => (
	            <FlightItem>
								<FlightItemContainer>
	                <ListItem>
										<AirlineLogoName>
											<AirlineLogo width="24px" code={flights.airline.code} />
											<Text type='xs'>
												{flights.airline.name}
											</Text>
										</AirlineLogoName>
	                </ListItem>
		              {map(flights.stops, f =>
		                <ListItem>
				  {f.price != "" &&
                  <Price price={f.price} color='primary' onClick={e => onHandlerPrice(onSearch, f.price)}/>}
                  {f.price == "" && "-" }
		                </ListItem>
		              )}
								</FlightItemContainer>
	            </FlightItem>
	          )
	        )}
				</Slider>
      </AirlinesSlider>
    </Container>
  )
}

FlightsComparisonTable.propTypes = {
  flights: PropTypes.array.isRequired,
  onSearch: PropTypes.func
}

FlightsComparisonTable.defaultProps = {
  flights: [],
  media: {}
}

export default FlightsComparisonTable;
