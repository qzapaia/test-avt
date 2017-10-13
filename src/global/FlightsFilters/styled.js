import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fafafa;
`
export const ExpandButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: flex-start;
  padding: 0;
  &:active, &:focus{
    outline: none;
  }
  svg{
    transition: 0.3s ease;
    transform: ${props=>props.expanded?'rotate(90deg)':'rotate(-90deg)'}
  }
`
export const FilterContainer = styled.ul`
  margin-top: 10px;
`
export const List = styled.ul`
  margin-bottom: 5px;
`
