import styled from 'styled-components'

export const SelectContainer = styled.div`
  .Select-control{
    border-radius: 0;
    border-color: ${props=>props.theme.colors.gray}
  }
  .has-value.Select--single > .Select-control .Select-value .Select-value-label, .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label{
    color: ${props=>props.theme.colors.darkergray}
  }
  .Select-arrow, .is-open > .Select-control .Select-arrow{
    width: 8px;
    height: 8px;
    border: none;
    border-bottom: 2px solid ${props=>props.theme.colors.primary};
    border-left: 2px solid ${props=>props.theme.colors.primary};
    border-radius: 0px;
    transform: rotate(-45deg) translateY(-2px) translateX(2px);
  }
  .is-open > .Select-control .Select-arrow{
    transform: rotate(135deg) translateY(-2px) translateX(2px);
  }
  .Select-menu-outer{
    .Select-option{
      background: white;
      &.is-selected{
        background: ${props=>props.theme.colors.primary};
        color: white;
        &:hover{
          background: ${props=>props.theme.colors.primary};
          color: white;
        }
      }
      &:hover{
        background: ${props=>props.theme.colors.gray};
      }
    }
  }
`
