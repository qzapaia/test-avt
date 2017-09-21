### Description
Demo de colores disponibles y sus nombres. Los inyecta el theme.
(No es un componente)

## Ejemplos

### Uso dentro de un styled component
```javascript
const ComponenteLoco = styled.span`
  color: ${props=>props.theme.colors[props.color]};
`
```

### Uso via prop

```javascript
<ComponenteLoco color="brand"></ComponenteLoco>
```
