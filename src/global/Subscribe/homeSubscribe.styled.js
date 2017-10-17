import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items:center;
  background-color: white;
  width: 100%;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;
`
export const TextContainer = styled.div`
  margin:10px;
  margin-right: 35px;

`
export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  ${props=>props.layout >= 1? 'min-width: 400px':'0'};
  max-width: 550px;
  input{
    font-size: 16px;
  }
`

export const FormChildsContainer = styled.div`
  display: flex;
  width: 100%;
`
export const Form = styled.form`
  width: 100%;
`
