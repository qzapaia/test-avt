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
  flex: 1 1 25%;
`
