import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


const itemStyle = {
	display:'flex',
}

const itemStyle2 = {
	width: '80px',
  padding: '10px',
  backgroundColor: 'white',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid grey',
  flexDirection: 'column'
}

const addColumnTitle = flightDates => {
	return _.map(flightDates, ( fRow, key ) => {
		//Unshift no devuelve el mismo array
		fRow.unshift({
			'rowTitle': 'VUELTA',
			'day': moment(key).format('dddd'),
			'date': moment(key).format('DD/MM/YYYY')
		});
		return fRow; 
	})
} 

const groupByDepartureDate = flightDates => {
	//return _.groupBy(flightDates, 'vuelta'); para una agrupación rara
	return _.groupBy(flightDates, 'ida');
} 

const PriceTrendTableByDate = ({flightDates, selectedReturnDate, selectedDepartureDate, onClick}) => {

	const flightDatesRow = groupByDepartureDate(flightDates);

	return (
	  <div>
	  	{
	  		_.map(flightDatesRow, fRow => (
					<div style={itemStyle}>
	  				{
		  				fRow.map( fColumn => (
		  						<div>
		  							{ fColumn.rowTitle && 
		  								<div style={itemStyle2}>
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
				  						<div style={itemStyle2}>
				  							{fColumn.price}
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
