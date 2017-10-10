import styled from 'styled-components';

const layout = {
  flex:{
    4:'1 1 50%',
    3:'1 1 33%',
    2:'1 1 50%',
    1:'1 1 100%',
    0:'1 1 100%'
  }
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
  flex: ${props=>layout.flex[props.layout]}
`
