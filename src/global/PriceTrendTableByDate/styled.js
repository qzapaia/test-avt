import styled from "styled-components";

const getBackgroundColor = flag => {
  switch (flag) {
    case "bestPrice":
      return "best";
      break;
    case "currentPrice":
      return "lightblue";
      break;
    case "title":
    case "selectedDate":
    case "bestPriceSelectedDate":
      return "hover";
      break;
    default:
      return "selected";
  }
};

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
  align-items: center;
`

export const PriceDataContainer = styled.div`
  ${'' /* width: 90px; */}
  ${'' /* min-width: 90px; */}
  ${'' /* max-width: 90px; */}
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => (isSeletedDate(props.type) ? "1px" : "1px")} solid ${props=>props.theme.colors.gray};
  flex-direction: column;
  background-color: ${props => getBackgroundColor(props.type)=='best'?props.theme.colors.success:getBackgroundColor(props.type)=='hover'?props.theme.colors.gray:getBackgroundColor(props.type)!='selected'?props.theme.colors.primary:'white'};
  color: ${props => getBackgroundColor(props.type)=='best'?'white':getBackgroundColor(props.type)=='hover'?props.theme.colors.darkergray:getBackgroundColor(props.type)!='selected'?'white':props.theme.colors.darkergray};
  flex: 1;
  ${PriceData}{
    border-color: ${props => (isSeletedDate(props.type) ? props.theme.colors.primary:'' )}
  }
`;



export const RowContainer = styled.div`
  display: flex;
  flex: 1;
`
