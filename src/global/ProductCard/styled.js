import styled from 'styled-components'

export const Container = styled.a`
  display: ${props=>props.listMode?'flex':'inline-block'};
  overflow: hidden;
  width: ${props=>props.listMode?'100%':''};
  margin: ${props=>props.listMode?'0':'0 10px'};
  margin-bottom: ${props=>props.listMode?'':'20px'};

  border-top: ${props=>props.listMode?'1px solid '+props.theme.colors.gray :''};
  padding: ${props=>props.listMode?'10px 5px':''};
  background: ${props=>props.listMode?'white':''};
  flex: 0 1 47%;
`
export const MainPictureContainer = styled.figure`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  border-radius: ${props=>props.listMode?'':'5px 5px 0 0'};
  max-height: ${props=>props.listMode?'':'250px'};
  max-width: ${props=>props.listMode?'65px':''};
  margin: ${props=>props.listMode?'0px':''};
  background-color: ${props => props.theme.colors.gray};
  img{
    width: 100%;
    ${'' /* min-width: ${props=>props.listMode?'':'360px'}; */}
    min-height: ${props=>props.listMode?'100%':''};
  }
`
export const LeftContainer = styled.article`
  display: block;
  flex: 1;
`
export const RightContainer = styled.article`
  display: flex;
  flex: ${props=>props.listMode?'1':'1.6'};
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`
export const MainInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  background: white;
  min-height: ${props=>props.listMode?'50px':'63px'};
  align-items: center;
  border-radius: ${props=>props.listMode?'':'0px 0px 5px 5px'};
  padding: ${props=>props.listMode?'5px 10px':'10px 15px'};
  padding-right: ${props=>props.listMode?'10px':'0'};
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
  display: flex;
  margin-top: ${props=>props.listMode?'-5px':''};
  ${Container}:hover &{
    transform: rotate(-180deg) translateX(-5px);
  }
`
export const ImageTitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,0.65);
  color: white;
  display: flex;
  padding: 0 10px;
  height: 30px;
  align-items: center;
`
