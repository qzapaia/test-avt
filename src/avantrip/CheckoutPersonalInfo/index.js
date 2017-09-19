import React from 'react';
import PropTypes from 'prop-types';

import InputBirthday from '../InputBirthday';
import InputNumber from '../InputNumber';
import Select from '../Select';
import CheckboxGroup from '../CheckboxGroup';

const customOnChange = (next, name) => value => {
  switch (name) {
    case 'gender':
      value = value.value;
      break;
    case 'firstname':
    case 'lastname':
      value = value.target.value;
  }
  const p = {}
  p[name] = value
  next(p);
}

const CheckoutPersonalInfo = ({
  onChange,
  firstname,
  lastname,
  docType,
  docNumber,
  birthday,
  residencePlace,
  gender }) => (

  <div>
    <label>
      Nombre
      <input
        value={firstname}
        type="text"
        placeholder="Como figura en el documento de viaje"
        onChange={customOnChange(onChange, 'firstname')}
        required
      />
    </label>
    <label>
      Apellido
      <input
        value={lastname}
        type="text"
        placeholder="Como figura en el documento de viaje"
        onChange={customOnChange(onChange, 'lastname')}
        required
      />
    </label>
    <label>
      Tipo de Documento
      <Select
        onChange={customOnChange(onChange, 'docType')}
        value={docType}>
        <option value="dni">DNI</option>
        <option value="passport">Pasaporte</option>
      </Select>
    </label>
    <label>
      Residencia
      <Select
        onChange={customOnChange(onChange, 'residencePlace')}
        value={residencePlace}>
        <option value="AR">Argentina</option>
        <option value="BR">Brasil</option>
      </Select>
    </label>
    <InputNumber
      value={docNumber}
      label={"Número"}
      step={"1"}
      min={"10000"}
      max={"99999999"}
      onChange={customOnChange(onChange, 'docNumber')} />
    <InputBirthday
      label={"Fecha de nacimiento"}
      value={birthday}
      onChange={customOnChange(onChange, 'birthday')} />
    <CheckboxGroup
      options={[{
        value: 'F',
        label:'Femenino'
      },{
        value: 'M',
        label:<span>Masculino</span>
      }]}
      onChange={customOnChange(onChange, 'gender')}
      label={<span>Sexo</span>}
      values={[gender]} />
  </div>
)

CheckoutPersonalInfo.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  docType: PropTypes.string,
  docNumber: PropTypes.number,
  birthday: PropTypes.number,
  residencePlace: PropTypes.string,
  gender: PropTypes.string,
  onChange: PropTypes.func
}

export default CheckoutPersonalInfo;
