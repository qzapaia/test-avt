import React from 'react';
import PropTypes from 'prop-types';

import Chart from '../Chart';
import Slider from '../Slider';

import moment from 'moment';
import { map, groupBy, minBy } from "lodash";

import ContainerMonth from './containerMonthHistogram.styled';

const groupByArrivalDate = flights => (
  groupBy(flights, 'month')
)

const addMinPriceFlag = flights => (
  minBy(flights, 'price').price
)

const calculateBestPriceByMoths = flights => (
  map(flights, (flightsByMonth, index) => ({
    flights: flightsByMonth,
    month: index,
    bestPrice: addMinPriceFlag(flightsByMonth)
  }))
)

const prepateData = flights => (
  map(flights, flight => {
    flight['month'] = moment(flight.date).month()
    flight['label'] = moment(flight.date).format('DD dd');
    return flight;
  })
)

const PriceTrendCalendar = ({
  data,
  selectedMonth,
  disclaimer,
  onClick,
  onChange
}) => {

  data = calculateBestPriceByMoths(groupByArrivalDate(prepateData(data)));

  selectedMonth = selectedMonth || moment().month();
  const flightBySelectedMonth = data[selectedMonth];

  return (
    <ContainerMonth>
      <div>
        {data.length && <Chart
          data={flightBySelectedMonth.flights}
          value="price"
          label="label"
          onClick={onClick}/>
        }
      </div>
      <div>
        <Slider
          initialSlide={selectedMonth}
          dots="false"
          slidesToShow="5" >
          { map(data, dataByMonth => (
            <div>
              <div
                key= { "month" + dataByMonth.month }
                onClick= { e => (
                  onChange(dataByMonth.month)
                )}>
                <div>
                  {moment.months(Number(dataByMonth.month))}
                </div>
                <div>
                  Desde
                </div>
                <div>
                  {dataByMonth.bestPrice}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div>
        {disclaimer &&
          <div>
            {disclaimer}
          </div>
        }
      </div>
    </ContainerMonth>
  )
}

PriceTrendCalendar.propTypes = {
  data: PropTypes.array.isRequired,
  disclaimer: PropTypes.string,
  onClick: PropTypes.func
}

export default PriceTrendCalendar;
