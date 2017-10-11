import styled from 'styled-components';

const layout = {
  flex:{
    4:'1 1 45%',
    3:'1 1 30%',
    2:'1 1 45%',
    1:'1 1 100%',
    0:'1 1 100%'
  },
}

export const Container = styled.div`
  display: block;
`
export const ImageTitleContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Layout = styled.div`
  display: flex;
  flex: ${props=>layout.flex[props.layout]};
  margin: ${props=>props.layout > 0? '0 10px' : '0' };
`
