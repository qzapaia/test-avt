import styled from 'styled-components'
import Text from '../Text';

export const PriceContainer = styled.span`
`

export const Currency = styled(Text)`
  /*watch here, you can't extend text*/
  font-weight: 300 !important;
  margin-right: 5px;
`
