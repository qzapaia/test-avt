import React from 'react';
import PropTypes from 'prop-types';

const FlightClusterRoute = ({title,date,departureCity,arrivalCity, children}) => (
  <div>
    <div>
    	<div>
    		{title}
    	</div>
    	<div>
    		{date}
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
    		arrivalCity
    	</div>
    </div>
    {children.map(c => c)}
  </div>
)

FlightClusterRoute.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
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
