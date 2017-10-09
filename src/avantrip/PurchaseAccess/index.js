import React from "react";
import PropTypes from "prop-types";
import InputText from "../InputText";
import Text from "../Text";
import Button from "../Button";
import Icon from "../Icon";
import {Container, FormTicket, MyTicketContainer, WhatCanIdo, WhatCanIdoList, WhatCanIdoItem} from './styled';

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
      <MyTicketContainer>

        <FormTicket onSubmit={preventFormatAndContinueWith(onSubmit)}>
        	<Text type='m' color='brand' tag='h3'>
            ¿Compraste un vuelo?
          </Text>

          <InputText
            onChange={(value) => onChange({ purchaseId:value })}
            value={value.purchaseId}
            placeholder="Número de solicitud de compra"
            requiresExistingValue={false}
          >
          </InputText>

          <InputText
            onChange={(value) => onChange({ purchaseEmail:value })}
            value={value.purchaseEmail}
            placeholder="Ingresá el email de compra"
            requiresExistingValue={false}
          >
          </InputText>

          <Button type='cta'>
            <Text type='xs'>
              Ingresar
            </Text>
          </Button>

          {errorMessage !== '' &&
            <div>{errorMessage}</div>
          }
      	</FormTicket>
      	<WhatCanIdo>
          <Text type='m' color='primary' tag='h3'>
            ¿Qué podés hacer en Mi Compra?
          </Text>
      		<WhatCanIdoList>
      			<WhatCanIdoItem>
              <Icon id='Check' color='success' width='14px' height='14px' />
              <Text type='s'>
                Consultar tu reserva
              </Text>
            </WhatCanIdoItem>
      			<WhatCanIdoItem>
              <Icon id='Check' color='success' width='14px' height='14px' />
              <Text type='s'>
                Descargar tu Voucher
              </Text>
            </WhatCanIdoItem>
      			<WhatCanIdoItem>
              <Icon id='Check' color='success' width='14px' height='14px' />
              <Text type='s'>
                Informar tu pago
              </Text>
            </WhatCanIdoItem>
      			<WhatCanIdoItem>
              <Icon id='Check' color='success' width='14px' height='14px' />
              <Text type='s'>
                Chequear el detalle de tu pago
              </Text>
            </WhatCanIdoItem>

      		</WhatCanIdoList>
      	</WhatCanIdo>

      </MyTicketContainer>
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
