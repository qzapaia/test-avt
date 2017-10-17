import React from "react";
import PropTypes from "prop-types";

import { map, sortBy } from "lodash";
import moment from "moment";

import Slider from "../Slider";
import {ContainerMonth, CalendarMonth, Month, CenterText} from "./styled";
import Price from "../Price";
import Text from "../Text";
import Icon from "../Icon";

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
  infinite: false,
};
const mobileSliderSettings = {
  dots: false,
  slidesToShow: 1,
  infinite: false,
  centerMode: true
};

const HistogramMonth = ({ data, selectedMonth, onMonthSelected, layout }) => {
  sliderSettings["initialSlide"] = selectedMonth;
  return (
    <ContainerMonth>
      <Slider settings={layout < 2 ? mobileSliderSettings:sliderSettings}>
        {map(sortBy(data, ["year", "month"]), dataByMonth => (
          <CalendarMonth
            key={"month" + dataByMonth.month + dataByMonth.bestPrice}
            className={getClassNameForMonthSlider(
              dataByMonth.isBestPriceOfYear,
              dataByMonth.month,
              selectedMonth
            )}
            onClick={e => onMonthSelected(dataByMonth.month)}
          >
              <Text type='xs'>
                {moment.months(Number(dataByMonth.month))}
              </Text>
              <CenterText type='xs'>
                {dataByMonth.isBestPriceOfYear ? <Icon id='Price' width='12px' height='12px' color={dataByMonth.month == selectedMonth?'white':dataByMonth.isBestPriceOfYear?'success':'darkergray' } /> : null}
                {dataByMonth.isBestPriceOfYear ? "¡MEJOR PRECIO!" : "Desde"}
              </CenterText>
              <Price
                currency= 'ARS'
                type='xs'
                price={dataByMonth.bestPrice}
                color={dataByMonth.month == selectedMonth?'white':dataByMonth.isBestPriceOfYear?'success':'darkergray' }/>
          </CalendarMonth>
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
