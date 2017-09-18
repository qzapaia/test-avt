import React from 'react';
import PropTypes from 'prop-types';

const CheckoutItemsDetail = ({stages}) => (
 <div> 
   {stages.map(stage => (
      <div>
        <div>
          <span>{stage.leg}</span>
          <span>Duration <strong>{stage.duration}</strong></span>
          <span>{stage.stops}</span>
            {
              stage.flights.map((flight, idx) => (
                <div>
                  <div>
                    <img src={flight.marketingCarrier.logo} alt="logo" />
                    <span>{flight.marketingCarrier.name}</span>
                  </div>
                  <hr />
                  <div>
                    <div>
                      <span>Vuelo N° {flight.number}</span>
                      <span>Clase: {flight.class}</span>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div>
                      <p>Salida</p>
                      <p>{flight.departure.airportCode}</p>
                      <p>{flight.departure.location}</p>
                      <p>{flight.departure.date}</p>
                      <p>{flight.departure.hour}</p>
                    </div>
                    <div>
                      <p>Llegada</p>
                      <p>{flight.arrival.airportCode}</p>
                      <p>{flight.arrival.location}</p>
                      <p>{flight.arrival.date}</p>
                      <p>{flight.arrival.hour}</p>
                    </div>
                  </div>
                  <div>          
                    {flight.stopTime && 
                      `Escala en ${flight.arrival.location} con espera ${flight.stopTime}`
                    }
                  </div>
                </div>
              ))
            }
        </div>
        <div></div>
      </div>
    ))
    }
  </div>
)

CheckoutItemsDetail.propTypes = {
  stages: PropTypes.array.isRequired
}


export default CheckoutItemsDetail;
