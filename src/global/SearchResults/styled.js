import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fafafa;
`
export const MaxWidth = styled.div`
  max-width: ${props=> props.theme.viewport.desktop};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`
export const BreadcrumbContainer = styled.div`
  flex: 1 1 100%;
  margin: 20px 0;
`
export const LeftContainer = styled.section`
  flex: 1 1 30%;
  padding-right: 20px;
`
export const RightContainer = styled.section`
  flex: 1 1 70%;
`
export const SearchResult = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const SubscribeContainer = styled.section`
  margin-top: 20px;
`
export const FlightsFiltersContainer = styled.section`
  margin-top: 20px;
`
