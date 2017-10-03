import React from 'react';
import PropTypes from 'prop-types';
import RadiosGroup from '../RadioGroup';
import NumberGroup from '../NumberGroup';
import InputText from '../InputText';
import InputDate from '../InputDate';
import InputCheckbox from '../InputCheckbox';
import Button from '../Button';
import {Container} from './styled';

const onCustomSearch = (next, value) => {
  next(value)
}

const customOnChange = (next, name) => value => {
  next({
    [name]:value
  })
}

const FlightSearchBox = ({title, onChange, onSearch, value}) => {
  return (<Container>
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
        value= {value.leg}
      />
    </div>
    <div>
      <InputText
        onChange={customOnChange(onChange, 'originCity')}
        placeholder= 'Ingresá el nombre de la ciudad de origen'
        label='Desde'
        value={value.originCity}
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
        value={value.destinationCity}
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
      <InputDate
        range={true}
        onChange={customOnChange(onChange, 'dates')}
        dates={value.dates}
      />
    </div>

    <div>
      <InputCheckbox
        value='flexibleDate'
        onChange={customOnChange(onChange, "flexibleDate")}
        type='checkbox'
        label='Mis fechas son flexibles'
        checked={value.flexibleDate? true: false}
      />
    </div>
    <div>
      <NumberGroup
        options={[
          {
            label:'Adultos',
            id:'adults',
            value: value.amountTraveller.adults,
            min: '1',
            max: '9'
          },
          {
            label:'Niños',
            id:'children',
            value: value.amountTraveller.children || 0,
            min: '0',
            max: '9'
          },
          {
            label:'Bebés',
            id:'infant',
            value: value.amountTraveller.infant || 0,
            min: '0',
            max: '9'
          }
        ]}
        onChangeKeyValue={customOnChange(onChange, 'amountTraveller')}
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
        value= {value.class}
      />
    </div>
    <div>
      <Button onClick={() => onCustomSearch(onSearch, value)}>Buscar</Button>

    </div>
  </Container>)
}

FlightSearchBox.propTypes = {
  text: PropTypes.node.isRequired
}

FlightSearchBox.defaultProps = {
  value:{
    leg: 1,
    amountTraveller:{
      adults: 1
    },
    class: 1
  }
}

export default FlightSearchBox;
