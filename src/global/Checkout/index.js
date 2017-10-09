import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button'

const Checkout = ({values}) => {
  if(values.flights){
    return (
      <div>
          <div>Llego el respuesta del validate..!!!</div>
          <br />
          <Button type="cta">Comprar</Button>
      </div> 
    )
  }

  if(!values.flights){
    return (
      <div>
           loading...<br/>
            .,__,.........,__,.....╭¬¬¬¬¬━━╮<br/>
            '•.,¸,.•*¯'•.,¸,.•*|:¬¬¬¬¬¬¬¬::::|:^----------^<br/>
            '•.,¸,.•*¯'•.,¸,.•*|:¬¬¬¬¬¬¬¬::::||｡◕‿‿◕｡|<br/>
            -........--""-.......--"╰O━━━━O╯╰----O-O---╯
      </div> 
    )
  }
}

export default Checkout;
