import styled from 'styled-components';

// En esta instancia no se debería tomar ninguna decision en cuanto a los
// atributos del theme, osea ningun if ni (talcosa ? esto : aquello)
// todo se debería decidir afuera y acá solo imprimir ${props=>props.theme.bgColor}
// el theme pasa a ser el theme del componente y no el theme general

export const Container = styled.div`
  background-color:${props=>props.theme.bgColor};
`
