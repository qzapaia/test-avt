import styled from 'styled-components';

const ContainerList = styled.ul`
  display: flex;
  flex-direction: ${props=>props.type == 'list' ? 'column' : 'row'};
  flex-wrap: ${props=>props.type == 'list' ? 'nowrap' : 'wrap'};
  padding: 0;
  margin: 0;
  list-style: none;
`
export default ContainerList;
