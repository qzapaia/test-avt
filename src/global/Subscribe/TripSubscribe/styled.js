import styled from 'styled-components'
import Button from '../../Button'
import Text from '../../Text'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
`
export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FormContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  ${Button}{
    margin-top: 10px;
  }
`
export const MainTitle = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${Text}{
    flex: 1;
    margin-left: 10px;
  }
`
export const Status = styled.article`
  display: flex;
  align-items: center;
  ${Text}{
    margin-left: 10px;
  }
`
