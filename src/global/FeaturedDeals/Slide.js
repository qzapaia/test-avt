import styled from 'styled-components'

export default styled.div`
  overflow:hidden;
  width: 100%;
  min-height: 400px;
  background-image: url('${props => props.image}');
`
