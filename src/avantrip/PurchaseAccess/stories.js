import React from "react";
import PurchaseAccess from "./";
import PurchaseAccessWithData from "./withData";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withState, withHandlers, compose } from "recompose";

import generalDecorator from "../../stories.decorator.js";

import theme from "../styled.theme";
import readme from "./README.md";
import reducer from "./reducer";

const enhace = compose(
  withState("formValue", "updateFormValue", {
    purchaseId: "",
    purchaseEmail: ""
  })
);
const PurchaseAccessWithState = enhace(props => {
  const { errorMessage, formValue, updateFormValue } = props;

  const onSubmit = () => {
    action("submitForm")(formValue);
  };

  const onChange = value => {
    defaultsDeep(value, formValue);
    updateFormValue(value);
  };

  return (
    <PurchaseAccess
      {...props}
      value={formValue}
      onSubmit={onSubmit}
      onChange={onChange}
      errorMessage={errorMessage}
    />
  );
});

storiesOf("avantrip/PurchaseAccess", module)
  .addDecorator(
    generalDecorator({
      readme,
      theme,
      reducer: {
        purchaseAccess: reducer
      }
    })
  )
  .add("Success", () => <PurchaseAccessWithState />)
  .add("Fail", () => (
    <PurchaseAccessWithState errorMessage="No se ha encontrado una compra asociada. Por favor ingresá tus datos de nuevo." />
  ))
  .add("Con estado 'cargando'", () => (
    <PurchaseAccessWithState state="loading" />
  ))
  .add("With Data", () => <PurchaseAccessWithData />);
