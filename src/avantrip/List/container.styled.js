import styled from 'styled-components';

const ContainerList = styled.ul`
  display: flex;
  flex-direction: ${props=>props.type == 'list' ? 'column' : 'row'};
  flex-wrap: ${props=>props.type == 'list' ? 'nowrap' : 'wrap'};
`

export default ContainerList;
