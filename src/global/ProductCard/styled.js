import styled from 'styled-components'

export const Container = styled.a`
  display: ${props=>props.listMode?'flex':'inline-block'};
  background-color: white;
  border-radius: ${props=>props.listMode?'':'5px'};
  overflow: hidden;
  width: 100%;
  max-width: ${props=>props.listMode?'':'450px'};
`
export const MainPictureContainer = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  max-height: ${props=>props.listMode?'':'267px'};
  max-width: ${props=>props.listMode?'65px':''};
  margin: ${props=>props.listMode?'5px':''};
  background-color: ${props => props.theme.colors.gray};
  img{
    max-width: 100%;
    min-height: ${props=>props.listMode?'100%':''};
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
  padding: ${props=>props.listMode?'10px':'10px 25px'};
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
  transition: 0.3s ease;
  ${Container}:hover &{
    transform: rotate(-180deg) translateX(-5px);
  }
`
export const ImageTitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`
