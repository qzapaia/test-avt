import styled from "styled-components";

// const getBackgroundColor = flag => {
//   switch (flag) {
//     case "bestPrice":
//       return "best";
//       break;
//     case "currentPrice":
//       return "lightblue";
//       break;
//     case "title":
//     case "selectedDate":
//     case "bestPriceSelectedDate":
//       return "hover";
//       break;
//     default:
//       return "selected";
//   }
// };

const isSeletedDate = type => {
  return type == "selectedDate" || type == "bestPriceSelectedDate";
};

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${'' /* You gotta change this in the future */}
  overflow: scroll;
`
export const FixWidthContainer = styled.div`
${'' /* You gotta delete this in the future */}
  display: flex;
  flex-wrap: wrap;
  min-width: 768px;
`

export const PriceData = styled.article`
  padding: 10px;
  border: 2px solid transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  will-change: border-color;
  cursor: pointer;
  > div{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }
`
export const PriceDataTitle = PriceData.extend`
  cursor: inherit;
`

export const PriceDataContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${'' /* max-width: 150px; */}
  flex: 1;
  will-change: background;
  will-change: color;
  background: white;
  text-align: center;
  border: 1px solid ${props=>props.theme.colors.gray};
  *{
    font-weight: 400;
    word-break: break-all;
  }
  &.bestPrice{
    background: ${props=>props.theme.colors.success};
    *{
      color: white;
    }
  }
  &.title{
    background: ${props=>props.theme.colors.gray};
  }
  &.currentPrice{
    background: ${props=>props.theme.colors.primary};
    *{
      color: white;
    }
  }
  &.bestPriceSelectedDate, &.selectedDate{
    background: ${props=>props.theme.colors.gray};
    *{
      color: ${props=>props.theme.colors.darkergray};
    }
    ${PriceData}{
      border-color: ${props=>props.theme.colors.primary}
    }
  }

`;

export const PriceColor = styled.p`
  *{
    color: ${props=>props.theme.colors.primary}
  }
`

export const RowContainer = styled.div`
  display: flex;
  flex: 1 1 100%;
`
