import React from "react";
import PropTypes from "prop-types";

import Container from "./styled";
import InputText from "../InputText";
import Text from "../Text";
import Button from "../Button";

const preventFormatAndContinueWith = (next, value) => e => {
  e.preventDefault();
  next(value);
};

const PurchaseAccess = ({
  errorMessage,
  value,
  onSubmit,
  onChange,
  state
 }) => {
  return (
    <Container>
      <form onSubmit={preventFormatAndContinueWith(onSubmit, value)}>
        <Text type="l" color="brand">
          ¿Compraste un vuelo?
        </Text>

        <InputText
          onChange={value => onChange({ purchaseId: value })}
          value={value.purchaseId}
          placeholder="Número de solicitud de compra"
          requiresExistingValue={false}
          disabled={state=="loading"}
        />

        <InputText
          onChange={value => onChange({ purchaseEmail: value })}
          value={value.purchaseEmail}
          placeholder="Ingresá el email de compra"
          requiresExistingValue={false}
          disabled={state=="loading"}
        />

        <Button
          type="cta"
          disabled={state=="loading"}
          >Ingresar</Button>
        {errorMessage !== "" && (
          <div>
            <Text color="brand">{errorMessage}</Text>
          </div>
        )}
      </form>
      <div>
        <Text type="m" color="primary">
          ¿Qué podés hacer en Mi Compra?
        </Text>
        <ul>
          <li>Consultar tu reserva</li>
          <li>Descargar tu Voucher</li>
          <li>Informar tu pago</li>
          <li>Chequear el detalle de tu pago</li>
        </ul>
      </div>
    </Container>
  );
};

PurchaseAccess.propTypes = {
  errorMessage: PropTypes.string,
  value: PropTypes.object,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  state: PropTypes.oneOf(["", "loading"]),
}

PurchaseAccess.defaultProps = {
  value: {},
  state: ""
};

export default PurchaseAccess;
