import styled from 'styled-components'

export const Container = styled.div`
`
export const ExpandedContent = styled.article`
`
export const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
`
export const TabButton = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props=>props.theme.colors.darkgray};
  text-align: left;
  &:focus, &:active{
    outline: none;
  }
`
