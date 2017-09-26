import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';
import Select from '../Select';

const CheckoutBillingInfo = ({errorMessage, value, onChange}) => (
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
          <InputText
            label="Email"
            onChange={(value) => onChange({ email:value })}
            value={value.email}
            requiresExistingValue={false}
          />
        </div>
        <div>
          
          <InputText
            label="Nombre"
            onChange={(value) => onChange({ name:value })}
            value={value.name}
            requiresExistingValue={false}
          />

          <InputText
            label="Apellido"
            onChange={(value) => onChange({ lastName:value })}
            value={value.lastName}
            requiresExistingValue={false}
          />

        </div>
        <div>
          <label>
            Teléfono
            <Select 
              onChange={(value) => onChange({ phoneType:value })}
              value={value.phoneType} >
              <option value="0">Celular</option>
              <option value="1">Línea</option>
            </Select>
          </label>
          <InputText
            label="Cod Postal"
            onChange={(value) => onChange({ postalCode:value })}
            value={value.postalCode}
            requiresExistingValue={false}
          />
          <InputText
            label="Número"
            onChange={(value) => onChange({ phoneNumber:value })}
            value={value.phoneNumber}
            requiresExistingValue={false}
          />
        </div>
      </div>
    </div>
  </div>
)

CheckoutBillingInfo.propTypes = {
  errorMessage:PropTypes.string,
  value:PropTypes.object,
  onChange:PropTypes.func
}


export default CheckoutBillingInfo;