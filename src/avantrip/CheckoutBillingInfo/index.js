import React from 'react';
import PropTypes from 'prop-types';

const CheckoutBillingInfo = ({) => (
	<div>
		<h2>
			Dónde te enviamos el voucher
		</h2>
		<div>
			Verificá que tu email esté correcto ya que te enviaremos el voucher de la compra
		</div>
		<div>
			<div>
				<div>
					<label>Email</label><input type="email" />
				</div>
				<div>
					<label>Nombre</label><input type="text" />
					<label>Apellido</label><input type="text" />
				</div>
				<div>
					<select>
						<option value="0">Celular</option>
					</select>
					<label>Cód Área</label><input type="text"/>
					<label>Número</label><input type="text"/>
				</div>
			</div>
		</div>
	</div>
)

CheckoutBillingInfo.propTypes = {

}

CheckoutBillingInfo.defaultProps = {

}

export default CheckoutBillingInfo;
