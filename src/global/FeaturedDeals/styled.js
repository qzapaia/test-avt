import styled from 'styled-components';


export const Container = styled.div`
  height: 450px;
  background: ${props=>props.theme.colors.darkgray}
`
export const Slide = styled.a`
  display: block;
  height: 450px;
  background-image: url(${props=>props.bg});
  background-size:cover;
  background-position: center center;
`
