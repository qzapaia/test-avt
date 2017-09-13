import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styled{{componentName}} = styled.button`
  border:solid 2px red;
  padding:20px;
  font-size: 16px;
`

Styled{{componentName}}.propTypes = {
  size: PropTypes.oneOf(['s'])
}

Styled{{componentName}}.defaultProps = {
  size:'s'
}

export default Styled{{componentName}};
