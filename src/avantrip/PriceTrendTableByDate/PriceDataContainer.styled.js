import styled from "styled-components";

const getBackgroundColor = flag => {
  switch (flag) {
    case "bestPrice":
      return "green";
      break;
    case "currentPrice":
      return "lightblue";
      break;
    case "title":
    case "selectedDate":
    case "bestPriceSelectedDate":
      return "lightgrey";
      break;
    default:
      return "white";
  }
};

const isSeletedDate = type => {
  return type == "selectedDate" || type == "bestPriceSelectedDate";
};

export default styled.div`
  width: 90px;
  min-width: 90px;
  max-width: 90px;
  padding: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => (isSeletedDate(props.type) ? "3px" : "1px")} solid
    ${props => (isSeletedDate(props.type) ? "blue" : "grey")};
  flex-direction: column;
  background-color: ${props => getBackgroundColor(props.type)};
  flex: 1;
`;
