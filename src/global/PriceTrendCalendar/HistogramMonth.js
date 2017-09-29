import React from "react";
import PropTypes from "prop-types";

import { map, sortBy } from "lodash";
import moment from "moment";

import Slider from "../Slider";
import ContainerMonth from "./containerMonthHistogram.styled";
import Price from "../Price";

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

const sliderSettings = {
  dots: false,
  slidesToShow: 5,
  infinite: false
};

const HistogramMonth = ({ data, selectedMonth, onMonthSelected }) => {
  sliderSettings["initialSlide"] = selectedMonth;
  return (
    <ContainerMonth>
      <Slider settings={sliderSettings}>
        {map(sortBy(data, ["year", "month"]), dataByMonth => (
          <div
            key={"month" + dataByMonth.month + dataByMonth.bestPrice}
            className={getClassNameForMonthSlider(
              dataByMonth.isBestPriceOfYear,
              dataByMonth.month,
              selectedMonth
            )}
          >
            <div
              onClick={e => onMonthSelected(dataByMonth.month)}
            >
              <div>{moment.months(Number(dataByMonth.month))}</div>
              <div>
                {dataByMonth.isBestPriceOfYear ? "¡MEJOR PRECIO!" : "Desde"}
              </div>
              <div>
                <Price
                  currency= 'ARS'
                  price={dataByMonth.bestPrice}/>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </ContainerMonth>
  );
};

HistogramMonth.propTypes = {
  data: PropTypes.array.isRequired,
  selectedMonth: PropTypes.number,
  onMonthSelected: PropTypes.func
};

export default HistogramMonth;
