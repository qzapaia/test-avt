import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextContainer, InputContainer, FormChildsContainer, Form }  from './styled';
import InputText from '../InputText';
import Text from '../Text';
import Button from '../Button';

const ERROR_STATE = 'error';
const SUCCESS_STATE = 'success';

const Subscribe = ({onSubscribe, onChange, title, subscriptionStatus, email, buttonText}) => (
  <div>
    {!subscriptionStatus &&
      <Container>

        <TextContainer>
          <Text color='brand' tag='h2' type='l'>
            {title}
          </Text>
        </TextContainer>

        <InputContainer>

          <Form onSubmit={ (e) => {
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
              <Button>
                {buttonText}
              </Button>
            </FormChildsContainer>
          </Form>
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
  buttonText:PropTypes.string.isRequired,
  subscriptionStatus:PropTypes.oneOf([SUCCESS_STATE, ERROR_STATE])
}

Subscribe.defaultProps = {
  buttonText:'Enviar'
}




export default Subscribe;
