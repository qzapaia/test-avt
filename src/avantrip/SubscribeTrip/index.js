import React from 'react';
import PropTypes from 'prop-types';
import Container from './container.styled';

const ERROR_STATE = 'error';
const SUCCESS_STATE = 'success';

const preventFormatAndContinueWith = next => e => {
  e.preventDefault();
  next({
    email:e.target.email.value,
    city:e.target.city.value
  })
}

const SubscribeTrip = ({onSubscribe, state, city}) => (
  <div>
    {!state &&
      <Container>
        <h4>
          <span>Icono Alerta</span>
          {`Te avisamos cuando tengamos los precios
            más bajos a ${city}.`}
        </h4>
        <form onSubmit={preventFormatAndContinueWith(onSubscribe)}>
          <input type="HIDDEN" name="city" value={city}/>
          <input
            type="email"
            name="email"
            placeholder="Ingresá tu email"
            required
          />
          <button type="submit">Crear Alerta</button>
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

SubscribeTrip.propTypes = {
  onSubscribe:PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  state:PropTypes.oneOf(['', SUCCESS_STATE, ERROR_STATE])
}

SubscribeTrip.defaultProps = {
  state:''
}

export default SubscribeTrip;
