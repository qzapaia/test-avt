import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { map, groupBy, minBy, reduce } from 'lodash';

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

const addFirstColumnHeader = (returnDateTitle, flights) => (
  map(flights, ( fRow, key ) => {
    //Unshift no devuelve el mismo array
    fRow.unshift({
      'title': returnDateTitle,
      'day': moment(key).format('dddd'),
      'date': moment(key).format('DD/MM/YYYY'),
      'rawDate': key
    });
    return fRow;
  })
)

const addFirstRowHeader = (
  departureDateTitle,
  flightGroupedByDepartureDate ,
  flightsWithColumnHeader
)  => {

  const firstColumnFlightMatrix =
    map(flightGroupedByDepartureDate, ( fCol, key ) => (
      {
        'title': departureDateTitle,
        'day': moment(key).format('dddd'),
        'date': moment(key).format('DD/MM/YYYY'),
        'rawDate': key
      })
    )

  firstColumnFlightMatrix.unshift({}); //Primer item de la matriz vacío

  flightsWithColumnHeader.unshift(firstColumnFlightMatrix);

  return flightsWithColumnHeader;
}

const groupByReturningDate = flights => {
  return groupBy(flights, 'returningDate');
}

const groupByDepartureDate = flights => {
  return groupBy(flights, 'departureDate');
}

const addMinPriceFlag = flights => {
  const flightWithMinPrice = minBy(flights, 'price');
  return reduce(flights, ( acc, f ) => {
    if(!acc){acc=[]};
    //Pregunto de nuevo si hay algún otro vuelo con el precio mínimo
    if(f.price == flightWithMinPrice.price){
      acc.push(f);
    }
    return acc;
  }, [])
}

const getItemStyleBy = (ReturningDate, departureDate, bestFlights, currentFlight) => {
  if(bestFlights.length > 0 && bestFlights[0].price == currentFlight.price){
    return bestDateItemStyle;
  } else if(ReturningDate == currentFlight.returningDate && departureDate == currentFlight.departureDate){
    return selectedDateItemStyle;
  } else if(ReturningDate == currentFlight.rawDate){
    return selectedDateItemStyle;
} else if(departureDate == currentFlight.rawDate){
    return selectedDateItemStyle;
  } else {
    return itemStyle;
  }
}

const PriceTrendTableByDate = ({
  pricesByDates,
  selectedReturningDate,
  selectedDepartureDate,
  onClick,
  departureDateTitle,
  returnDateTitle
}) => {
  const flightDatesWithMinPrices = addMinPriceFlag(pricesByDates);

  const flightDatesMatrix =
    addFirstRowHeader(departureDateTitle,
      groupByDepartureDate(pricesByDates),

      addFirstColumnHeader(returnDateTitle,
        groupByReturningDate(pricesByDates)
      )
    )

  return (
    <div>
      {
        map(flightDatesMatrix, fRow => (
          <div style={{display:'flex'}}>
            {
              map(fRow, fColumn => (
                  <div>
                    { fColumn.title &&
                      <div style={getItemStyleBy(
                          selectedReturningDate,
                          selectedDepartureDate,
                          {},
                          fColumn
                        )}>
                        <div>
                          {fColumn.title}
                        </div>
                        <div>
                          {fColumn.day}
                        </div>
                        <div>
                          {fColumn.date}
                        </div>
                      </div>
                    }

                    { !fColumn.title &&
                      <div onClick={ e => onClick(fColumn)} style={getItemStyleBy(
                          selectedReturningDate,
                          selectedDepartureDate,
                          flightDatesWithMinPrices,
                          fColumn
                        )}>


                        { (fColumn.title || fColumn.price) &&
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
  pricesByDates: PropTypes.array,
  selectedReturningDate: PropTypes.string,
  selectedDepartureDate: PropTypes.string,
  onClick: PropTypes.func,
  departureDateTitle: PropTypes.node,
  returnDateTitle: PropTypes.node
}

PriceTrendTableByDate.defaultProps = {
  departureDateTitle: "IDA",
  returnDateTitle: "VUELTA"
}

export default PriceTrendTableByDate;
