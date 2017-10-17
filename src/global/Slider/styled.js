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
  color: transparent;
  &:focus, &:active{
    outline: none;
    box-shadow: none;
  }
  &::after{
    border-color: transparent;
    width: 18px;
    height: 18px;
    position: absolute;
    content: "";
    border-bottom: 6px solid white;
    border-left: 6px solid white;
    border-radius: 4px 0 4px 4px;
    left: calc(50% - 9px);
    top: calc(50% - 9px);
  }
  &:first-of-type{
    left: 15px;
    &::after{
      transform: rotate(45deg);
      margin-left: 2px;
    }
  }
  &:last-of-type{
    right: 15px;
    &::after{
      transform: rotate(-135deg);
      margin-left: -2px;
    }
  }
  &:hover{
    background: gray;
  }

`
export const IconContainer = styled.div`
  ${SliderButton}:last-of-type &{
    transform: rotate(180deg);
  }
`
export const SliderContainer = styled.div`
  .slick-list{
    overflow: hidden;
  }
  .slick-slider{
    position: relative;
  }
  .slick-slide{
    a{
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
  .sliderDots{
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 17px;
    display: flex !important;
    justify-content: center;
    li{
      display: inline-flex;
      background: white;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 7px;
      button{
        border: none;
        background: white;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        padding: 0;
        color: transparent;
        position: relative;
        cursor: pointer;
        &:focus, &:active{
          outline: none;
          box-shadow: none;
        }
        &::after{
          position: absolute;
          left: calc(50% - 5px);
          top: calc(50% - 5px);
          content: "";
          background: transparent;
          border: none;
          border-radius: 50%;
          color: transparent;
          opacity: 0.7;
          transition: 0.5s ease;
          transform: scale(0);
          width: 10px;
          height: 10px;
          display: inline-flex;
          padding: 0;
        }
        &:hover{
          &::after{
            transform: scale(1);
            opacity: 0.4;
            background: black;
          }
        }
      }

      &.slick-active{
        button::after{
          background: black;
          transform: scale(1);
        }
      }
    }
  }
`
