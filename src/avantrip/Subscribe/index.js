import React from 'react';
import PropTypes from 'prop-types';
import Container from './container.styled';

const ERROR_STATE = 'error';
const SUCCESS_STATE = 'success';

const preventFormatAndContinueWith = next => e => {
  e.preventDefault();
  next({
    email:e.target.email.value
  })
}

const Subscribe = ({onSubscribe, title, state}) => (
  <div>
    {!state &&
      <Container>
        <h4>{title}</h4>
        <form onSubmit={preventFormatAndContinueWith(onSubscribe)}>
          <input
            type="email"
            name="email"
            placeholder="Ingresá tu dirección de email"
          />
          <button>Enviar</button>
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

Subscribe.propTypes = {
  onSubscribe:PropTypes.func.isRequired,
  title:PropTypes.string.isRequired,
  state:PropTypes.oneOf([SUCCESS_STATE, ERROR_STATE])
}

Subscribe.defaultProps = {
  title:'',
  state:''
}

export default Subscribe;