import styled from 'styled-components'
import Text from '../Text'

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  background: white;
  padding: 10px 0;
`
export const ScalesButton = Text.extend`
  background: none;
  cursor: pointer;
  border: none;
  border-top: 1px dashed ${props=>props.theme.colors.gray};
  margin-top: 2.5px;
  color: ${props=>props.theme.colors.primary};
  display: block;
  padding: 2.5px;
  &:first-of-type{
    margin-top: 5px;
  }
  &:active, &:focus{
    outline: none;
  }
`

export const Column = styled.div`
  display : flex;
  flex-direction : column;
  align-items: flex-start;
  padding: 10px;
  flex: 1;
  > *{
    width: 100%;
    text-align: left;
    padding-left: 5px;
  }
`
export const ColumnCenter = styled.div`
  flex: 1;
  display : flex;
  flex-direction : column;
  align-items: center;
  padding: 10px;
  border: 1px solid ${props=>props.theme.colors.success};
  > *{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

  }
`

export const PriceContainer = ScalesButton.extend`
  *{
    font-weight: 400;
  }
  &:hover{
    *{
      color: ${props=>props.theme.colors.success}
    }
  }
`

export const AirlinesSlider = styled.div`
  overflow: hidden;
  flex: ${props=>props.layout < 2?'1 1 100%':'1 1 50%'};
  > div{
    height: 100%;
  }
  .slick-slider, .slick-list, .slick-track{
    height: 100%;
  }
  .slick-track {
    display: flex;
  }
  .selectedMonth {
    background-color: ${props=>props.theme.colors.primary} !important;
    color: white !important;
  }
  .slick-slider {
    position: relative;
    align-items: center;
    ${props=>props.layout < 2?'':'display: flex'}
  }
  .slick-prev, .slick-next{
    position: ${props=>props.layout < 2?'absolute':'relative'};
    width: ${props=>props.layout < 2?'30px':''};
    height: ${props=>props.layout < 2?'30px':''};
    border-radius: ${props=>props.layout < 2?'50%':''};
    background: ${props=>props.layout < 2?'white':'none'};
    flex: 0 1 100px;
    opacity: 1;
    &:after{
      width: 14px;
      height: 14px;
      border-width: 4px;
      border-bottom-color: ${props=>props.theme.colors.darkgray};
      border-left-color: ${props=>props.theme.colors.darkgray};
      left: 7.5px;
      top: 7.5px;
    }
    &:hover{
      &:after{
        border-bottom-color: ${props=>props.theme.colors.primary};
        border-left-color: ${props=>props.theme.colors.primary};
      }
    }
  }
  .slick-prev{
    left: 0;
    top: ${props=>props.layout < 2?'20px':'0'};
  }
  .slick-next{
    right: 0;
    top: ${props=>props.layout < 2?'20px':'0'};
  }
  .slick-slide{
    display: ${props=>props.layout < 2?'flex':''};
    justify-content: ${props=>props.layout < 2?'center':''};
  }
`

export const FlightItem = styled.article`
  padding: 0;
`

export const ListItem = styled.li`
  text-align: center;
  display: block;
  cursor: pointer;
  padding: 2.5px;
  margin-top: 2.5px;
  &:not(:first-child){
    border-top: 1px dashed ${props=>props.theme.colors.gray};
  }

`
export const FlightItemContainer = styled.ul`
  padding: 0;
  max-width: 150px;
  height: 100%;
  ${ListItem}:not(:first-child){
    *{
      font-weight: 400;
    }
  }
`

export const Title = Text.extend`
  min-height: 30px;
  display: flex;
  align-items: center;
`

export const AirlineLogoName = styled.figure`
  height: 37.5px;
`
