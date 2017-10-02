import React from 'react';
import PropTypes from 'prop-types';
import Container from './styled';
import InputText from '../InputText';

const ERROR_STATE = 'error';
const SUCCESS_STATE = 'success';

const Subscribe = ({onSubscribe, onChange, title, subscriptionStatus, email}) => (
  <div>
    {!subscriptionStatus &&
      <Container>
        <h4>{title}</h4>
        <form onSubmit={ (e) => {
          e.preventDefault()
          onSubscribe(email)
        }} >
          
          <InputText
            onChange = {
              (value) => onChange({ email:value })
            }
            value={email}
            requiresExistingValue={false}
            placeholder="Ingresá tu dirección de email"
          />
          <button>Enviar</button>
        </form>
      </Container>
    }
    {subscriptionStatus == SUCCESS_STATE &&
      <div>Todo joya</div>
    }
    {subscriptionStatus == ERROR_STATE &&
      <div>Todo mal</div>
    }
  </div>
)

Subscribe.propTypes = {
  onSubscribe:PropTypes.func.isRequired,
  email:PropTypes.string,
  title:PropTypes.string.isRequired,
  subscriptionStatus:PropTypes.oneOf([SUCCESS_STATE, ERROR_STATE])
}

export default Subscribe;
