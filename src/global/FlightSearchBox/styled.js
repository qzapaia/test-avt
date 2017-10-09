import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.div`
  display: block;
  background: white;
  padding: 10px;
  .react-autosuggest__suggestions-container{
    position: absolute;
    background: white;
    z-index: 9;
    margin-top: 36px;
    width: 100%;
    left: 0;
  }
  .react-autosuggest__suggestions-list{
    border: 1px solid ${props=>props.theme.colors.darkgray};
    position: relative;
    margin-top: 10px;
    &:before{
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 11px 10px 10px;
      border-color: transparent transparent white transparent;
      position: absolute;
      top: -10px;
      left: 10px;
      z-index: 9999;
    }
    &:after{
      border-color: transparent;
      width: 15px;
      height: 15px;
      position: absolute;
      content: "";
      transform: rotate(135deg);
      border-bottom: 1px solid ${props=>props.theme.colors.darkgray};
      border-left: 1px solid ${props=>props.theme.colors.darkgray};
      top: -9px;
      left: 12.5px;
    }
  }
  .react-autosuggest__suggestion{
    padding: 5px;
    cursor: pointer;
    &:hover{
      background: ${props=>props.theme.colors.primary};
      button{
        color: white;
      }
    }
    button{
      border: none;
      background: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 300;
      &:active, &:focus{
        outline: none;
        box-shadow: none;
      }
    }
  }

  .DateRangePicker{
    width: 100%;
  }
  .DateRangePickerInput{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .DateInput{
    flex: 1;
    padding: 5px 10px;
  }
  .DateRangePickerInput__arrow svg{
    fill: ${props=>props.theme.colors.primary};
  }
  .DateInput__display-text {
    padding: 0px 0px;
    white-space: nowrap;
    font-size: 11px;
    overflow: hidden;
    color: ${props=>props.theme.colors.darkergray};
  }
  .DateInput__display-text--focused{
    background: none;
    border-color: transparent;
    color: black;
    font-weight: 400;
  }
  .DateRangePicker__picker--open-down {
    top: 50px;
  }
  .DateInput--open-down.DateInput--with-caret{
    &:after, &:before{
      top: 40px;
    }
    &:after{
      border-bottom-color: #fff;
    }
    &:before{
      border-bottom-color: rgba(0,0,0,0.1);
    }
  }
  .DayPickerKeyboardShortcuts__show{
    display: none;
  }
  .DayPickerNavigation--horizontal .DayPickerNavigation__prev--default svg, .DayPickerNavigation--horizontal .DayPickerNavigation__next--default svg{
    fill: ${props=>props.theme.colors.primary}
  }
  .SingleDatePickerInput{
    border-color: ${props=>props.theme.colors.darkgray}
  }
`
export const MainTitle = Text.extend`
  margin-top: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 400;
  svg{
    margin-right: 5px;
  }
`
export const TopSearch = styled.div`
  display: flex;
  align-items: center;
`
export const Radios = styled.div`
  width: 100%;
  > div > div{
    display: flex;
    flex-wrap: wrap;
    label{
      margin-top: 10px;
    }
    div{
      flex: 1;
    }
  }

`
export const FromTo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  label{
    flex: 1 1 100%;
    margin-top: 15px;
    ${'' /* &:last-of-type{
      .react-autosuggest__suggestions-list{
        &:before{
          left: inherit;
          right: 42%;
        }
        &:after{
          left: inherit;
          right: calc(42% + 3px);
        }

      }
    } */}
  }
`
export const FlexibleDates= styled.div`
  margin: 10px 0;
`
export const Passengers= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`
export const PassengerItem= styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 24%;
  > div{
    width: 100%;
  }
`

export const SearchButton= styled.div`
  margin-top: 10px;
`
export const DateContainer= styled.div`
  margin-top: 15px;
  > div{
    display: flex;
  }
  .SingleDatePicker{
    flex: 1;
  }
`
export const Tooltip= styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .__react_component_tooltip.type-dark{
    background: ${props=>props.theme.colors.primary}
  }
  .__react_component_tooltip.type-dark.place-top:after{
    border-top-color: ${props=>props.theme.colors.primary}
  }
`
export const TooltipAlert= Text.extend`
  display: flex;
  align-items: center;
`
export const TooltipTitle= Text.extend`
  margin-right: 5px;
`
export const AddRemoveFlights= styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
`
export const AddRemoveFlightsButton= styled.button`
  flex: 0 0 50%;
  border: none;
  background: none;
  color: ${props=>props.theme.colors.primary};
  cursor: pointer;
  &:active, &:focus{
    outline: none;
  }
`
