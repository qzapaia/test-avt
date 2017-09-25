import styled from 'styled-components'

export const Container = styled.a`
  display: ${props=>props.listMode?'flex':'inline-block'};
  background-color: #7cb0e6;
  border-radius: 5px;
  overflow: hidden;
`
export const MainPictureContainer = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  max-height: 267px;
`
