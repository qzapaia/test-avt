import React from 'react';
import PropTypes from 'prop-types';

const preventFormatAndContinueWith = next => e => {
  e.preventDefault();
  next({
    purchaseId:e.target.purchaseId.value,
    purchaseEmail:e.target.purchaseEmail.value
  })
}

const PurchaseAccess = ({errorMessage, onSubmit, state}) => (
  <div>
    <form onSubmit={preventFormatAndContinueWith(onSubmit)}>
    	<div>¿Compraste un vuelo?</div>

    	<input type="text" 
    		name="purchaseId"
    		placeholder="Número de solicitud de compra" />

    	<input type="email" 
    		name="purchaseEmail" 
    		placeholder="Ingresá el email de compra" />

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
  
}

export default PurchaseAccess;
