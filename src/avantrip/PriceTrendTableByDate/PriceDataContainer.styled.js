import styled from "styled-components";

const getBackgroundColor = flag => {
  switch (flag) {
    case "bestPrice":
      return "green";
      break;
    case "currentPrice":
      return "lightblue";
      break;
    default:
      return "white";
  }
}

export default styled.div`
  width: 90px;
  padding: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  flex-direction: column;
  background-color: ${props => getBackgroundColor(props.backgroundColor)};
`;
