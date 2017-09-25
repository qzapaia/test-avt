import React from "react";
import PropTypes from "prop-types";

import Chart from "../Chart";
import Slider from "../Slider";

import moment from "moment";
import { map, groupBy, minBy, filter } from "lodash";

import ContainerMonth from "./containerMonthHistogram.styled";

const groupByArrivalDate = flights => groupBy(flights, "month");

const addMinPriceFlag = flights => minBy(flights, "price").price;

const calculateBestPriceInOneYear = flights => {
  if (flights.length > 0) {
    map(
      filter(flights, { bestPrice: minBy(flights, "bestPrice").bestPrice }),
      flight => (flight.isBestPriceOfYear = true)
    );
  }
  return flights;
};

const calculateBestPriceByMoths = flights =>
  map(flights, (flightsByMonth, index) => ({
    flights: flightsByMonth,
    month: index,
    bestPrice: addMinPriceFlag(flightsByMonth),
    isBestPriceOfYear: false
  }));

const prepateData = (flights, departureDate, returnDate) =>
  map(flights, flight => {
    flight["month"] = moment(flight.date).month();
    flight["label"] = moment(flight.date).format("DD dd");
    flight["travelDays"] = moment(returnDate).diff(
      moment(departureDate),
      "days"
    );
    return flight;
  });

const CustomTooltip = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array
  },
  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="departureDate">{`Ida: ${moment(
            payload[0].payload.date
          ).format("dddd DD [de] MMMM")}`}</p>
          <p className="returnDate">{`Vuelta: ${moment(payload[0].payload.date)
            .add(payload[0].payload.travelDays, "days")
            .format("dddd DD [de] MMMM")}`}</p>
          <p className="desc">{payload[0].payload.price}</p>
        </div>
      );
    }

    return null;
  }
});

const sliderSettings = {
  dots: false,
  slidesToShow: 5,
  infinite: false
};

const getClassNameForMonthSlider = (
  isBestPriceOfYear,
  currentMonth,
  selectedMonth
) => {
  let className = "";
  if (isBestPriceOfYear) {
    className = "bestPrice";
  }
  if (currentMonth == selectedMonth) {
    className += " selectedMonth";
  }
  return className;
};

const PriceTrendCalendar = ({
  data,
  selectedMonth,
  disclaimer,
  onDaySelected,
  onMonthSelected,
  departureDate,
  returnDate
}) => {
  data = calculateBestPriceInOneYear(
    calculateBestPriceByMoths(
      groupByArrivalDate(prepateData(data, departureDate, returnDate))
    )
  );

  selectedMonth = selectedMonth || moment().month();
  const flightBySelectedMonth = data[selectedMonth];

  sliderSettings["initialSlide"] = selectedMonth;

  return (
    <ContainerMonth>
      <div>
        {flightBySelectedMonth &&
        flightBySelectedMonth.flights.length && (
          <Chart
            data={flightBySelectedMonth.flights}
            value="price"
            label="label"
            onClick={onDaySelected}
            CustomTooltip={CustomTooltip}
          />
        )}
      </div>
      <div>
        <Slider settings={sliderSettings}>
          {map(data, dataByMonth => (
            <div
              className={getClassNameForMonthSlider(
                dataByMonth.isBestPriceOfYear,
                dataByMonth.month,
                selectedMonth
              )}
            >
              <div
                key={"month" + dataByMonth.month}
                onClick={e => onMonthSelected(dataByMonth.month)}
              >
                <div>{moment.months(Number(dataByMonth.month))}</div>
                <div>
                  {dataByMonth.isBestPriceOfYear ? "¡MEJOR PRECIO!" : "Desde"}
                </div>
                <div>{dataByMonth.bestPrice}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div>{disclaimer && <div>{disclaimer}</div>}</div>
    </ContainerMonth>
  );
};

PriceTrendCalendar.propTypes = {
  data: PropTypes.array.isRequired,
  disclaimer: PropTypes.string,
  onMonthSelected: PropTypes.func,
  onDaySelected: PropTypes.func
};

export default PriceTrendCalendar;
