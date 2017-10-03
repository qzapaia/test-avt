import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';

const preventFormatAndContinueWith = next => e => {
  e.preventDefault();
  next()
}

const PurchaseAccess = ({errorMessage, value, onSubmit, onChange}) => (
  <div>

    <form onSubmit={preventFormatAndContinueWith(onSubmit)}>
    	<div>¿Compraste un vuelo?</div>

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


    	<button>Ingresar</button>
      {errorMessage !== '' &&
        <div>{errorMessage}</div>
      }
  	</form>
  	<div>
  		<div>¿Qué podés hacer en Mi Compra?</div>
  		<ul>
  			<li>Consultar tu reserva</li>
  			<li>Descargar tu Voucher</li>
  			<li>Informar tu pago</li>
  			<li>Chequear el detalle de tu pago</li>
  		</ul>
  	</div>
  </div>
)

PurchaseAccess.defaultProps = {
  value:{}
}

export default PurchaseAccess;
