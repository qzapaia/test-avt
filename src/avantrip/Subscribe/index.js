import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const preventFormatAndContinueWith = next => e => {
  e.preventDefault();
  next({
    email:e.target.email.value
  })
}

const PlaceholderContainer = styled.div`
  display: flex;
  background-color: #ff0012;
`

const Subscribe = ({onSubscribe, title, state}) => (
  <div>
    {!state &&
      <PlaceholderContainer>
        <h4>{title}</h4>
        <form onSubmit={preventFormatAndContinueWith(onSubscribe)}>
          <input
            type="email"
            name="email"
            placeholder="Ingresá tu dirección de email"
          />
          <button>Enviar</button>
        </form>
      </PlaceholderContainer>
    }
    {state =='success' &&
      <div>Todo joya</div>
    }
    {state =='error' &&
      <div>Todo mal</div>
    }
  </div>
)

Subscribe.propTypes = {
  onSubscribe:PropTypes.func.isRequired,
  title:PropTypes.string.isRequired,
  state:PropTypes.string
}

Subscribe.defaultProps = {
  title:'',
  state:''
}

export default Subscribe;
