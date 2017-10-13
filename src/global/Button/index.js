import styled from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';

const colorByButton = (state, attrName) => props => {
  console.log('Mario',props);
  const { theme, type } = props;
  const attrValue = get(theme.buttons,[type,state,attrName]);
  console.log('Mario2',type,state,attrName);

  return theme.colors[attrValue];
}


const StyledButton = styled.button`
  background-color: ${colorByButton('normal','bgc')};
  color: ${colorByButton('normal','color')};
  font-size: ${props=>props.theme.buttons[props.type].normal.fontSize};
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  &:active, &:focus{
    outline: none;
  }
`

StyledButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string
}

StyledButton.defaultProps = {
  type:'cta'
}

export default StyledButton;
