import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextContainer, InputContainer, FormChildsContainer }  from './styled';
import InputText from '../InputText';
import Text from '../Text';
import Button from '../Button';

const ERROR_STATE = 'error';
const SUCCESS_STATE = 'success';

const Subscribe = ({onSubscribe, onChange, title, subscriptionStatus, email}) => (
  <div>
    {!subscriptionStatus &&
      <Container>

        <TextContainer>
          <Text color='brand' tag='h4' type='l'>
            {title}
          </Text>
        </TextContainer>

        <InputContainer>

          <form onSubmit={ (e) => {
            e.preventDefault()
            onSubscribe(email)
          }} >

            <FormChildsContainer>
              <InputText
                onChange = {
                  (value) => onChange({ email:value })
                }
                value={email}
                requiresExistingValue={false}
                placeholder="Ingresá tu dirección de email"
              />
              <Button>Enviar</Button>
            </FormChildsContainer>
          </form>
        </InputContainer>
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
