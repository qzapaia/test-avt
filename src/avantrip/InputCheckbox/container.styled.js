import styled from 'styled-components';
import image from './image'

export const InputContainer = styled.div`

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
    background: url(${image});
    ${props => props.type == 'checkbox' && props.checked ? 'background-position: 0 -132px' : props.type == 'checkbox' ? 'background-position: 0 -88px' : ''};
    ${props => props.type == 'radio' && props.checked ? 'background-position: 0 -44px' : props.type == 'radio' ? 'background-position: 0 -22px' : ''};
    ${props => props.disabled ? 'opacity: 0.75' : ''};
  }
`

export const LabelContainer = styled.label`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center
  position: relative;
  user-select: none;
  align-items: center;
`
