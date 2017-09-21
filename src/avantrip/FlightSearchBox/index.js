import React from 'react';
import PropTypes from 'prop-types';
import RadiosGroup from '../RadiosGroup';
import NumberGroup from '../NumberGroup';


const customOnChange = (next, name) => value => {
  switch (name) {
    case 'amountTraveller':
      const value2 = {}
      value2[value.id] = value.value
      value = {}
      value = value2;
      break
    case 'leg':
  }
  const p = {}
  p[name] = value
  next(p)
}

const FlightSearchBox = ({title, onChange, onSubmit, values}) => (
  <div>
    {title}
    <div>
      <RadiosGroup
        label=''
        onChange={customOnChange(onChange, "leg")}
        options={[
          {
            value: 1,
            label: 'ida y vuelta'
          },
          {
            value: 2,
            label: 'ida'
          },
          {
            value: 3,
            label: 'varios Destinos'
          }
        ]}
        value={values.leg}
      />
    </div>
    <div>
      <NumberGroup
        options={[
          {
            label:'Adultos',
            id:'adults',
            value: values.amountTraveller.adults,
            min: 1,
            max: 9
          },
          {
            label:'Niños',
            id:'children',
            value: (values.amountTraveller.children)? values.amountTraveller.children : 0,
            min: 0,
            max: 9
          },
          {
            label:'Bebes',
            id:'babies',
            value: (values.amountTraveller.babies)? values.amountTraveller.babies : 0,
            min: 0,
            max: 9
          }
        ]}
        onChange={customOnChange(onChange, 'amountTraveller')}
        label=''
      />
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
