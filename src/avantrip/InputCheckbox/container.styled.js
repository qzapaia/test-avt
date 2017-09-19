import styled from 'styled-components';

export const InputCheckboxContainer = styled.div`
  label{
    position: relative;
    overflow: hidden;
    user-select: none
  }
`

export const InputStyle = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-right: 4px;
  content: " ";
  vertical-align: top;

`

export const Input = styled.input`
position: absolute;
left: -100%;
& ~ ${InputStyle} {
  ${'' /* Si el input está en checked cambia el background del InputStyle */}
  background: ${props => props.checked ? 'blue' : 'red'};
}
`
