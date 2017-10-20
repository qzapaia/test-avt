import React from "react";
import PropTypes from "prop-types";

import FareDetail from "../FareDetail";
import FlightClusterRoute from "./FlightClusterRoute";
import FlightClusterRouteOption from "./FlightClusterRouteOption";
import JustOne from "../JustOne";
import Text from "../Text";
import Icon from "../Icon";
import Button from "../Button";

import { FareDetailContainer, Container, AdditionalInfo, FlightContainer, DisclaimerPrice, ClusterContainer } from "./styled";

import { withState } from "recompose";

import { map, get } from "lodash";


const Comp = ({ select, selected, options, selectedOption }) => (
  <div>
    {map(options, option => (
      <FlightClusterRouteOption
        key={option.summaryInfo.id}
        data={option}
        onClick={select(option.summaryInfo.id)}
        selected={selectedOption == option.summaryInfo.id ? true : false}
      />
    ))}
  </div>
);

const OptionsSelector = JustOne(Comp);

const enhace = withState("selectedRouteOption", "changeSelectedRouteOption");

const FlightClusterWithState = enhace(({
  data,
  selectedRouteOption,
  changeSelectedRouteOption,
  onBuy
}) => {
    const onSelectedHandler = (selectedOption) =>{
      selectedRouteOption[selectedOption.numberRoute] = selectedOption.value;
      changeSelectedRouteOption(selectedRouteOption);
    }

    if (!selectedRouteOption) {
      selectedRouteOption=[];
      changeSelectedRouteOption(map(data.routes, route => (
        get(route, "options[0].summaryInfo.id")
      )));
    }

    return (
      <Container>
        <AdditionalInfo type="s" color="success">
          <Icon id="Mood" color="success" />
          {data.additionalInfo}
        </AdditionalInfo>
        <ClusterContainer>
          <FlightContainer>
            {map(data.routes, (route, index) => (
              <FlightClusterRoute
                key={route.header.departureCity+route.header.arrivalCity+route.header.date}
                title={route.header.title}
                date={route.header.date}
                departureCity={route.header.departureCity}
                arrivalCity={route.header.arrivalCity}
              >
                <OptionsSelector
                  selectedOption={selectedRouteOption[index]}
                  onChange={selectedOption =>
                    onSelectedHandler({
                      numberRoute: index,
                      value: selectedOption
                    })}
                  options={route.options}
                />
              </FlightClusterRoute>
            ))}
            <DisclaimerPrice>
              {data.disclaimerText}
            </DisclaimerPrice>
          </FlightContainer>
          <FareDetailContainer>
            <FareDetail currency="ARS" detailInfo={data.fareDetail} />
            <Button onClick={()=>onBuy(selectedRouteOption)} type="cta">
              Comprar
            </Button>
          </FareDetailContainer>
        </ClusterContainer>
      </Container>
    );
  }
);

export default FlightClusterWithState;
