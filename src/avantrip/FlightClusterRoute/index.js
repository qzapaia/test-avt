import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// TODO: Resolver locales

const FORMAT_DATE = 'ddd. DD MMM de YYYY'; 

const parseDate = date => {
  return Moment(date).format(FORMAT_DATE);

}

const FlightClusterRoute = ({title,date,departureCity,arrivalCity, children}) => (
  <div>
    <div>
    	<div>
    		{title}
    	</div>
    	<div>
    		{parseDate(date)}
    	</div>
    </div>
    <div>
    	<div>
    		{departureCity}
    	</div>
    	<div>
    		-----------------------
    	</div>
    	<div>
    		{arrivalCity}
    	</div>
    </div>
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
