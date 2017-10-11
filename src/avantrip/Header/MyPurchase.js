import React from "react";
import PropTypes from "prop-types";

import PurchaseAccess from "../PurchaseAccess";
import Icon from "../Icon";
import Text from "../Text";

import { MyPurchaseContainer, MyPurchaseButton } from "./styled";

import { withState } from "recompose";

const enhace = withState("isVisible", "clickMyPurchase", false);

const MyPurchase = ({ isVisible, clickMyPurchase }) => (
  <MyPurchaseContainer>
    <MyPurchaseButton onClick={e => clickMyPurchase(!isVisible)}>
      <Icon color='primary' id='Description' width='16px' height='16px' />
      <Text>
        Mi Compra
      </Text>
    </MyPurchaseButton>
    { isVisible && <PurchaseAccess /> }
  </MyPurchaseContainer>
);

export default enhace(MyPurchase);
