import React from 'react';
import PropTypes from 'prop-types';
import RadiosGroup from '../RadioGroup';
import NumberGroup from '../NumberGroup';
import InputText from '../InputText';
import InputCheckbox from '../InputCheckbox';
import Button from '../Button';

const onCustomClick = (next, values) => {
  next(values)
}

const customOnChange = (next, name) => value => {
  switch (name) {
    case 'amountTraveller':
      const newValue = {}
      newValue[value.id] = value.value
      value = {}
      value = newValue;
      break
    case 'originCity':
    case 'destinationCity':
    case 'leg':
    case 'class':
    case 'flexibleDate':
  }
  const p = {}
  p[name] = value
  next(p)
}

const FlightSearchBox = ({title, onChange, onSearch, values}) => (
  <div>
    {title}
    <div>
      <RadiosGroup
        label=''
        onChange={customOnChange(onChange, "leg")}
        options={[
          {
            value: '1',
            label: 'ida y vuelta'
          },
          {
            value: '2',
            label: 'ida'
          },
          {
            value: '3',
            label: 'varios Destinos'
          }
        ]}
        value= {values.leg}
      />
    </div>
    <div>
      <InputText
        onChange={customOnChange(onChange, 'originCity')}
        placeholder= 'Ingresá el nombre de la ciudad de origen' 
        label='Desde'
        value={values.originCity}
        requiresExistingValue='true'
      >
        <option value="bue">Buenos Aires - Argentina</option>
        <option value="mia">Miami - Estados Unidos</option>
        <option value="new">New York - Estados Unidos</option>
        <option value="syd">Sydney (New South Wales) - Australia</option>
        <option value="rio">Río de Janeiro - Brasil</option>
        <option value="flo">Florianópolis - Brasil</option>
        <option value="mad">Madrid - España</option>
        <option value="par">París - Francia</option>
        
      </InputText>
      <InputText
        onChange={customOnChange(onChange, 'destinationCity')}
        placeholder= 'Ingresá el nombre de la ciudad de destino' 
        label='Hacia'
        value={values.destinationCity}
        requiresExistingValue='true'
      >
        <option value="bue">Buenos Aires - Argentina</option>
        <option value="mia">Miami - Estados Unidos</option>
        <option value="new">New York - Estados Unidos</option>
        <option value="syd">Sydney (New South Wales) - Australia</option>
        <option value="rio">Río de Janeiro - Brasil</option>
        <option value="flo">Florianópolis - Brasil</option>
        <option value="mad">Madrid - España</option>
        <option value="par">París - Francia</option>
      </InputText>
    </div>


    <div>
      <InputCheckbox
        value='flexibleDate'
        onChange={customOnChange(onChange, "flexibleDate")}
        type='checkbox'
        label='Mis fechas son flexibles'
        checked={(values.flexibleDate)? true: false}
      />
    </div>
    <div>
      <NumberGroup
        options={[
          {
            label:'Adultos',
            id:'adults',
            value: values.amountTraveller.adults,
            min: '1',
            max: '9'
          },
          {
            label:'Niños',
            id:'children',
            value: (values.amountTraveller.children)? values.amountTraveller.children : 0,
            min: '0',
            max: '9'
          },
          {
            label:'Bebes',
            id:'babies',
            value: (values.amountTraveller.babies)? values.amountTraveller.babies : 0,
            min: '0',
            max: '9'
          }
        ]}
        onChange={customOnChange(onChange, 'amountTraveller')}
        label=''
      />
    </div>
    <div>
      <RadiosGroup
        label='Clase'
        onChange={customOnChange(onChange, "class")}
        options={[
          {
            value: '1',
            label: 'Económica'
          },
          {
            value: '2',
            label: 'Business'
          }
        ]}
        value= {values.class}
      />
    </div>
    <div>
      <Button onClick={() => onCustomClick(onSearch, values)}>Buscar</Button>
    
    </div>
  </div>
)

FlightSearchBox.propTypes = {
  text: PropTypes.node.isRequired
}

FlightSearchBox.defaultProps = {
  text:'no value yet :('
}

export default FlightSearchBox;
