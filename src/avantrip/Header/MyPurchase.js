import React from "react";
import PropTypes from "prop-types";

import PurchaseAccess from "../PurchaseAccess";
import Icon from "../Icon";

import { MyTicket as MyPurchaseContainer } from "./styled";

import { withState } from "recompose";

const enhace = withState("isVisible", "clickMyPurchase", false);

const MyPurchase = ({ isVisible, clickMyPurchase }) => (
  <MyPurchaseContainer>
    <span onClick={e => clickMyPurchase(!isVisible)}>
      <Icon color='primary' id='Description' width='16px' height='16px' />
      Mi Compra
    </span>
    { isVisible && <PurchaseAccess /> }
  </MyPurchaseContainer>
);

export default enhace(MyPurchase);
