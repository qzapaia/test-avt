import React from 'react';
import PropTypes from 'prop-types';

import { groupby } from 'lodash';

const groupByAirlineName = flights => {
  return _.groupBy(flights, 'name');
}

const getBestPricesByScale = groupedFlights => {

  let bestPriceByScale = [];

  _.forEach(groupedFlights, ( groupedFlightsData, airlineName ) => {

    //Agrupo por escala
    let flightsGroupedByScale = _.groupBy(groupedFlightsData, 'scaleType');
    let scales = [];

    //Busco el más barato por escala
    _.forEach(flightsGroupedByScale, ( groudedByScaleData, scaleType ) => {  

      let smallestPrice = groudedByScaleData.reduce( (price, currentFlight) => {
        if(currentFlight){
          price = price < currentFlight.price ? price : currentFlight.price;
        }
        return price;
      });

			scales.push({
				'scaleType':scaleType,
				'price':smallestPrice
			})
    })  

    //Ordeno las escalas para un render más prolijo
    scales = _.orderBy(scales, 'scaleType');

    bestPriceByScale.push({
    	scales:scales,
    	name: airlineName,
    	label:groupedFlightsData[0].label,
    	logo: groupedFlightsData[0].logo
    });
  })

  return bestPriceByScale;
}

const getBestPricesByScaleWithGroupedFlights = groupedFlights => {
	const scalesAndPrices = _.reduce(groupedFlights, ( acc, current ) => {
		return acc.concat(current.scales)
	}, [])
 
	let bestPricesGroupedByScales = _.groupBy(scalesAndPrices, 'scaleType');

	bestPricesGroupedByScales = _.map(bestPricesGroupedByScales, function( f ){
		return (_.minBy(f, 'price'))
	})

	return bestPricesGroupedByScales;
} 

const containerStyle = {
	backgroundColor : 'white',
	display : 'flex',
	alignItems: 'center'
};
const firstColumnStyle = {
	display : 'flex',
	flexDirection : 'column',
	margin:'20px'
}
const secondColumnStyle = {
	display : 'flex',
	flexDirection : 'column',
	margin:'20px'
}
const thirdColumnStyle = {
	display : 'flex',
	flexDirection : 'row',
	alignItems: 'center',
	margin:'20px'
}

const flightGroupStyle = {
	display: 'flex',
	flexDirection: 'column',
	margin:'10px'
}

const FlightsComparisonTable = ({flights}) => {

	const groupedFlightsByAirlines = getBestPricesByScale(groupByAirlineName(flights));

	const groupedBestFlightsByPrice = getBestPricesByScaleWithGroupedFlights(groupedFlightsByAirlines);

	return(
	  <div style={containerStyle}>
	    <div style={firstColumnStyle}>
	    	<div>
	    		Precio más bajo por adulto
	    	</div>
	    	<div>
	    		<div>------------------</div>
	    		<div>
	    			Vuelo directo
	    		</div>
	    		<div>------------------</div>
	    		<div>
	    			1 escala
	    		</div>
	    		<div>------------------</div>
	    		<div>
	    			2 o más escalas
	    		</div>
	    	</div>
	    </div>

	    <div style={secondColumnStyle}>
				<div>
		    	<div>
		    		Mejor precio
		    	</div>
    		</div>

				{_.map(groupedBestFlightsByPrice, f =>

					<div>
	    			-------------
	    			<br />
	    			{f.price}
					</div>

				)}
	    </div>

	    <div style={thirdColumnStyle}>
	    	<div>
	    		--------Izquierda
	    	</div>

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

	    				{_.map(flights.scales, f =>

	    					<div>
				    			-------------
				    			<br />
				    			{f.price}
	    					</div>

	    				)}

	    			</div>

	    		)
	    	)}

	    	<div>
	    		--------Derecha
	    	</div>
	    </div>


	  </div>
	)
}

FlightsComparisonTable.propTypes = {
  //flights: PropTypes.array.isRequired
}

FlightsComparisonTable.defaultProps = {

}

export default FlightsComparisonTable;
