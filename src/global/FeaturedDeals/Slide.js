import styled from 'styled-components'

export default styled.div`
  min-height: 400px;
  height: 400px;
  background-image: url('${props => props.image}');
`
