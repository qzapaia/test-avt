import React from 'react';
import PropTypes from 'prop-types';
import * as SVGS from './imports.js';
import {withTheme} from 'styled-components'
import {get} from 'lodash';

const Icon = ({
  size,
  height,
  color,
  id,
  theme
}) => {
  const SVGComp = SVGS[id];
  return id ? <SVGComp
           height={get(theme,['sizes',height], height)}
           width={get(theme,['sizes',height], height)}
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
  color:'black',
}

export default withTheme(Icon);
