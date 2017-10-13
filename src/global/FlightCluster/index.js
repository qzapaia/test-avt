import React from "react";
import PropTypes from "prop-types";

import FareDetail from "../FareDetail";
import FlightClusterRoute from "./FlightClusterRoute";
import FlightClusterRouteOption from "./FlightClusterRouteOption";
import JustOne from "../JustOne";
import Text from "../Text";
import Icon from "../Icon";
import Button from "../Button";

import { FareDetailContainer, Container, AdditionalInfo } from "./styled";

import { withState } from "recompose";

import { map, get } from "lodash";

const containerStyle = {
  backgroundColor: "white",
  minWidth: "200px",
  minHeight: "200px",
  display: "flex"
};

const routeContainer = {
  flexGrow: 3
};

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

const enhace = withState("selectedRouteOption", "onSelectedRouteOption");

const FlightClusterWithState = enhace(
  ({ data, selectedRouteOption, onSelectedRouteOption, onCheckout }) => {

    const onSelectedHandler = selectedOption =>
      onSelectedRouteOption({
        ...selectedRouteOption,
        ...selectedOption
      });

    if (!selectedRouteOption) {
      let temp = {};
      if (data.routes.first) {
        temp["firstRouteOptionId"] = get(
          data,
          "routes.first.options[0].summaryInfo.id"
        );
      }
      if (data.routes.second) {
        temp["secondRouteOptionId"] = get(
          data,
          "routes.second.options[0].summaryInfo.id"
        );
      }
      if (data.routes.third) {
        temp["thirdRouteOptionId"] = get(
          data,
          "routes.third.options[0].summaryInfo.id"
        );
      }
      onSelectedHandler(temp);
    }

    return (
      <Container>
        <AdditionalInfo type="s" color="success">
          <Icon id="Mood" color="success" />
          {data.additionalInfo}
        </AdditionalInfo>
        <div style={containerStyle}>
          <div style={routeContainer}>
            {data.routes.first && (
              <FlightClusterRoute
                title={data.routes.first.header.title}
                date={data.routes.first.header.date}
                departureCity={data.routes.first.header.departureCity}
                arrivalCity={data.routes.first.header.arrivalCity}
              >
                <OptionsSelector
                  selectedOption={get(
                    selectedRouteOption,
                    "firstRouteOptionId"
                  )}
                  onChange={selectedOption =>
                    onSelectedHandler({
                      firstRouteOptionId: selectedOption
                    })}
                  options={data.routes.first.options}
                />
              </FlightClusterRoute>
            )}

            {data.routes.second && (
              <div>
                <FlightClusterRoute
                  title={data.routes.second.header.title}
                  date={data.routes.second.header.date}
                  departureCity={data.routes.second.header.departureCity}
                  arrivalCity={data.routes.second.header.arrivalCity}
                >
                  <OptionsSelector
                    selectedOption={get(
                      selectedRouteOption,
                      "secondRouteOptionId"
                    )}
                    onChange={selectedOption =>
                      onSelectedHandler({
                        secondRouteOptionId: selectedOption
                      })}
                    options={data.routes.second.options}
                  />
                </FlightClusterRoute>
              </div>
            )}

            {data.routes.third && (
              <div>
                <FlightClusterRoute
                  title={data.routes.third.header.title}
                  date={data.routes.third.header.date}
                  departureCity={data.routes.third.header.departureCity}
                  arrivalCity={data.routes.third.header.arrivalCity}
                >
                  <OptionsSelector
                    selectedOption={get(
                      selectedRouteOption,
                      "thirdRouteOptionId"
                    )}
                    onChange={selectedOption =>
                      onSelectedHandler({
                        thirdRouteOptionId: selectedOption
                      })}
                    options={data.routes.third.options}
                  />
                </FlightClusterRoute>
              </div>
            )}

            <div style={{ padding: "10px", color: "blue" }}>
              {data.disclaimerText}
            </div>
          </div>
          <FareDetailContainer>
            <FareDetail currency="ARS" detailInfo={data.fareDetail} />
            <Button onClick={()=>onCheckout(selectedRouteOption)} type="cta">
              Comprar
            </Button>
          </FareDetailContainer>
        </div>
      </Container>
    );
  }
);

export default FlightClusterWithState;
