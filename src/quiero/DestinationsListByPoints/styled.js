import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledDestinationsListByPoints = styled.div`
  h2{
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 30px;
  }
  >div{
    background: #F9F7F8;
    box-sizing: border-box;
    padding: 20px;
  }
  ul{
    >li{
      line-height: 26px;
      >div{
        display:flex;
        text-align: left;
        >p{
          flex: 1;
          font-weight: 500;
          &:first-child{
            flex: 2;
            font-weight:normal;
          }
          &:nth-of-type(2){
            text-align:left;
            &:before{
              content: 'desde ';
              font-size: 12px;
              font-weight:normal;
            }
            &:after{
              content: '!';
              color:#ff6600;
              font-weight:bold;
            }
          }
          &:last-child{
            flex: 2;
            &:before{
              content: 'desde ';
              font-size: 12px;
              font-weight:normal;
            }
            &:after{
              content: '!';
              color:#ff6600;
              font-weight:bold;
            }
          }
          &:nth-of-type(3){
            text-align:right;
            flex: 1;
            &:after{
              content: '!';
              color:#2A3069;
              font-weight:bold;
            }
          }
        }
      }
    }
  }
`

export const StyledPipe = styled.span`
  display:inline-bock;
  padding: 0 5px;
`
export const HeaderList = styled.div`
  display:flex;
  span{
    &:first-child{
      flex: 2;
    }
    &:nth-of-type(2){
      text-align:left;
    }
    &:last-child{
      flex: 2;
    }
    &:nth-of-type(3){
      text-align:right;
      flex: 1;
    }
    flex: 1;
  }
`
