import styled from 'styled-components'

export const SliderButton = styled.button`
  background: black;
  border: none;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  z-index: 9;
  width: 50px;
  height: 50px;
  opacity: 0.5;
  &:first-of-type{
    left: 15px;
  }
  &:last-of-type{
    right: 15px;
  }
  &:hover{
    background: white;
  }

`
export const IconContainer = styled.div`
  ${SliderButton}:last-of-type &{
    transform: rotate(180deg);
  }
`
export const SliderContainer = styled.div`
  .slick-slider{
    position: relative;
  }
  .sliderDots{
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    li{
      display: inline-flex;
      background: white;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 7px;
      button{
        background: transparent;
        border: none;
        border-radius: 50%;
        color: transparent;
        opacity: 0.7;
        transition: 0.3s ease;
        transform: scale(0);
        width: 10.5px;
        height: 10.5px;
        display: inline-flex;
        padding: 0;
      }
      &.slick-active{
        button{
          background: black;
          transform: scale(1);
        }
      }
    }
  }
`
