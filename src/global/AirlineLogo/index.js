import React from "react";
import PropTypes from "prop-types";

import { Logo } from "./styled";

const AirlineLogo = ({ code, height, width }) => (
  <Logo
    height={height}
    width={width}
    src={`https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/${code}.png?adq-20171009-0`}
  />
);

AirlineLogo.propTypes = {
  code: PropTypes.node.isRequired,
  height: PropTypes.node,
  width: PropTypes.node
};

export default AirlineLogo;
