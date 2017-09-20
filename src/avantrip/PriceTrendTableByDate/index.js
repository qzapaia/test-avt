import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


const itemStyle = {
	width: '90px',
  padding: '10px',
  backgroundColor: 'white',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid grey',
  flexDirection: 'column'
}

const selectedDateItemStyle = {
	width: '90px',
  padding: '10px',
  backgroundColor:'lightblue',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid grey',
  flexDirection: 'column'
}

const bestDateItemStyle = {
	width: '90px',
  padding: '10px',
  backgroundColor:'green',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid grey',
  flexDirection: 'column'
}

const addFirstColumnHeader = flights => (
	_.map(flights, ( fRow, key ) => {
		//Unshift no devuelve el mismo array
		fRow.unshift({
			'rowTitle': 'VUELTA',
			'day': moment(key).format('dddd'),
			'date': moment(key).format('DD/MM/YYYY'),
			'rawDate': key
		});
		return fRow; 
	})
) 

const addFirstRowHeader = ( flightGroupedByDepartureDate , flightsWithColumnHeader )  => {

	const firstColumnFlightMatrix = 
		_.map(flightGroupedByDepartureDate, ( fCol, key ) => (
			{
				'rowTitle': 'IDA',
				'day': moment(key).format('dddd'),
				'date': moment(key).format('DD/MM/YYYY'),
				'rawDate': key
			})
		)

	firstColumnFlightMatrix.unshift({}); //Primer item de la matriz vacío

	flightsWithColumnHeader.unshift(firstColumnFlightMatrix);

	return flightsWithColumnHeader;
}

const groupByDepartureDate = flights => {
	return _.groupBy(flights, 'ida');
} 

const groupByArrivalDate = flights => {
	return _.groupBy(flights, 'vuelta');
} 

const addMinPriceFlag = flights => {
	const flightWithMinPrice = _.minBy(flights, 'price');
	return _.reduce(flights, ( acc, f ) => {
		if(!acc){acc=[]};
		//Pregunto de nuevo si hay algún otro vuelo con el precio mínimo
		if(f.price == flightWithMinPrice.price){
			acc.push(f);
		}
		return acc;
	}, [])
}

const getItemStyleBy = (arrivalDate, departureDate, bestFlights, currentFlight) => {
	if(bestFlights.length > 0 && bestFlights[0].price == currentFlight.price){
		return bestDateItemStyle;
	} else if(arrivalDate == currentFlight.vuelta && departureDate == currentFlight.ida){
		return selectedDateItemStyle; 
	} else if(arrivalDate == currentFlight.rawDate){
		return selectedDateItemStyle; 
} else if(departureDate == currentFlight.rawDate){
		return selectedDateItemStyle; 
	} else {
		return itemStyle;
	}
}

const PriceTrendTableByDate = ({flightDates, selectedArrivalDate, selectedDepartureDate, onClick}) => {

	const flightDatesWithMinPrices = addMinPriceFlag(flightDates);

	const flightDatesMatrix = 
		addFirstRowHeader(
			groupByArrivalDate(flightDates),

			addFirstColumnHeader(
				groupByDepartureDate(flightDates)
			)
		)

	return (
	  <div>
	  	{
	  		_.map(flightDatesMatrix, fRow => (
					<div style={{display:'flex'}}>
	  				{
		  				fRow.map( fColumn => (
		  						<div>
		  							{ fColumn.rowTitle && 
		  								<div style={getItemStyleBy(
		  										selectedArrivalDate,
		  										selectedDepartureDate,
		  										{},
		  										fColumn
		  									)}>
				  							<div>
				  								{fColumn.rowTitle}
				  							</div>
				  							<div>
				  								{fColumn.day}
				  							</div>
												<div>
				  								{fColumn.date}
				  							</div>
				  						</div>
		  							}

		  							{ !fColumn.rowTitle &&	
				  						<div style={getItemStyleBy(
				  								selectedArrivalDate, 
				  								selectedDepartureDate,
				  								flightDatesWithMinPrices,
				  								fColumn
				  							)}>

				  							
				  							{ (fColumn.rowTitle || fColumn.price) &&
				  								<div>
						  							<div>Desde</div>
						  							<div>
						  								<span>ARS</span>&nbsp;<span>{fColumn.price}</span>
						  							</div>
					  							</div>
				  							}

				  						</div>
				  					}
				  				</div>
		  					)
	  					)
		  			}
	  			</div>	
	  		))
	  	}
	  </div>
	  
	)
}

PriceTrendTableByDate.propTypes = {
  //text: PropTypes.node.isRequired
}

PriceTrendTableByDate.defaultProps = {
  //text:'no value yet :('
}

export default PriceTrendTableByDate;
