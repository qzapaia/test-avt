import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Text from '../Text/index';
import Icon from '../Icon/index';
import {Container, DateContainer, DateTitle, DateContent, CitiesContainer, Separator, IconContainer} from './containerFlightClusterRoute.styled'

// TODO: Resolver locales

const FORMAT_DATE = 'ddd. DD MMM de YYYY';

const parseDate = date => {
  return Moment(date).format(FORMAT_DATE);

}

const FlightClusterRoute = ({title,date,departureCity,arrivalCity, children}) => (
  <div>
    <Container>
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
      	<Text>
      		{departureCity}
      	</Text>
      	<Separator />
      	<Text>
      		{arrivalCity}
      	</Text>
      </CitiesContainer>
    </Container>
    {children}
  </div>
)

FlightClusterRoute.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  departureCity: PropTypes.string.isRequired,
  arrivalCity: PropTypes.string.isRequired
}

FlightClusterRoute.defaultProps = {
  title: '',
  date: '',
  departureCity: '',
  arrivalCity: ''
}

export default FlightClusterRoute;
