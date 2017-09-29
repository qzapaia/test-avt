import React from 'react';
import PropTypes from 'prop-types';

const Checkout = ({values}) => {
  if(values.flights){
    return (
      <div>
          <div>Llego el respuesta del validate..!!!</div>
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
