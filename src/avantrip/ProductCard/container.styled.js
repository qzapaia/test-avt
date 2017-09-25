import styled from 'styled-components'

export const Container = styled.a`
  display: ${props=>props.listMode?'flex':'inline-block'};
  background-color: white;
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
  background-color: ${props => props.theme.colors.gray};
  img{
    max-width: 450px;
  }
`
export const LeftContainer = styled.article`
  display: block;
  flex: 1;
`
export const RightContainer = styled.article`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`
export const MainInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding: 10px 25px;
`
export const SubtitleContainer = styled.div`
  margin-top: 5px;
`
export const PriceContainer = styled.article`
  display: block;
  text-align: right;
`
export const IconContainer = styled.div`
  transform: rotate(-180deg);
`
