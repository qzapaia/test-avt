import React from 'react';
import PropTypes from 'prop-types';
import Container from './container.styled';

import InputText from '../InputText';
import Button from '../Button';

const ERROR_STATE = 'error';
const SUCCESS_STATE = 'success';

const preventFormatAndContinueWith = (next, value) => e => {
  e.preventDefault();
  next({
    email:value.email,
    city:value.city
  })
}

const TripSubscribe = ({title, onSubscribe, onChange, state, value}) => (
  <div>
    {!state &&
      <Container>
        {title}
        <form onSubmit={preventFormatAndContinueWith(onSubscribe, value)}>
          <input type="HIDDEN" name="city" value={value.city}/>
          <InputText
            label={"Email"}
            value={value.email}
            onChange={value => onChange({'email':value})}
          />
          <Button type="scta">Crear Alerta</Button>
        </form>
      </Container>
    }
    {state == SUCCESS_STATE &&
      <div>Todo joya</div>
    }
    {state == ERROR_STATE &&
      <div>Todo mal</div>
    }
  </div>
)

TripSubscribe.propTypes = {
  onSubscribe:PropTypes.func.isRequired,
  value: PropTypes.object,
  state:PropTypes.oneOf(['', SUCCESS_STATE, ERROR_STATE])
}

TripSubscribe.defaultProps = {
  state:''
}

export default TripSubscribe;
