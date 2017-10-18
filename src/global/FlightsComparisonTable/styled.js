import styled from 'styled-components'
import Text from '../Text'

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: white;
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
  > *{
    width: 100%;
    text-align: left;
    padding-left: 5px;
  }
`
export const ColumnCenter = styled.div`
  display : flex;
  flex-direction : column;
  align-items: center;
  padding: 10px;
  border: 1px solid ${props=>props.theme.colors.success};
  > *{
    width: 100%;
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
      border-bottom-color: ${props=>props.theme.colors.primary};
      border-left-color: ${props=>props.theme.colors.primary};
      left: 7.5px;
      top: 7.5px;
    }
  }
  .slick-prev{
    left: ${props=>props.layout < 2?'0':''};
    top: ${props=>props.layout < 2?'20px':''};
  }
  .slick-next{
    right: ${props=>props.layout < 2?'0':''};
    top: ${props=>props.layout < 2?'20px':''};
  }

`
