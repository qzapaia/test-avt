import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Text from '../Text/index';
import Icon from '../Icon/index';
import {DateContainer, DateTitle, DateContent, CitiesContainer, Separator, IconContainer, City, FlightClusterRouteContainer, FlightInfo} from './styled'

// TODO: Resolver locales

const FORMAT_DATE = 'ddd. DD MMM [de] YYYY';

const parseDate = date => {
  return Moment(date).format(FORMAT_DATE);

}

const FlightClusterRoute = ({title,date,departureCity,arrivalCity, children}) => (
  <FlightInfo>
    <FlightClusterRouteContainer>
      <DateContainer>
      	<DateTitle>
          <IconContainer>
            <Icon
              id='Back'
              height='16px'
            />
          </IconContainer>
          <Text type='s'>
            {title}
          </Text>
      	</DateTitle>
      	<DateContent>
          <Text type='s'>
      		    {parseDate(date)}
          </Text>
      	</DateContent>
      </DateContainer>
      <CitiesContainer>
      	<City>
      		{departureCity}
      	</City>
      	<Separator />
      	<City>
      		{arrivalCity}
      	</City>
      </CitiesContainer>
    </FlightClusterRouteContainer>
    {children}
  </FlightInfo>

)

FlightClusterRoute.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  departureCity: PropTypes.string.isRequired,
  arrivalCity: PropTypes.string.isRequired
}

export default FlightClusterRoute;
