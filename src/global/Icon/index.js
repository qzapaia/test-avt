import React from 'react';
import PropTypes from 'prop-types';
import * as SVGS from './imports.js';
import {withTheme} from 'styled-components'
import {get} from 'lodash';
console.log(SVGS);
const Icon = ({
  size,
  height,
  width,
  color,
  id,
  theme
}) => {
  const SVGComp = SVGS[id];
  return id ? <SVGComp
           height={height || get(theme,['texts',size,'size'])}
           width={width || get(theme,['texts',size,'size'])}
           style={{fill: get(theme,['colors',color], color)}}
         />:
         <span />
}

Icon.propTypes = {
  size:PropTypes.string,
  color:PropTypes.string,
  id:PropTypes.oneOf(Object.keys(SVGS)).isRequired,
}

Icon.defaultProps = {
  size:'m',
  color:'black'
}

export default withTheme(Icon);
