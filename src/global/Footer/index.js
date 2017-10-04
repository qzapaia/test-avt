import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Text from '../Text';
import {FooterContainer, MaxWidth, FooterItem, FooterTitle, FooterList, FooterImage, ImageContainer, Faevyt, Aviabue, TripAdvisor} from './styled'

const Footer = () => (
 <FooterContainer>
   <MaxWidth>
     <FooterList>

       <FooterItem>
         <FooterTitle>
           <Icon id='Check' color='darkgray' width='14px' height='14px'/>
           <Text>
             Respaldo
           </Text>
         </FooterTitle>
         <ImageContainer>
           <Faevyt href="http://faevyt.org.ar/" title="Federación Argentina de Asociaciones de Empresas de Viajes y Turismo" target="_blank">
             Federación Argentina de Asociaciones de Empresas de Viajes y Turismo
           </Faevyt>

           <Aviabue href="http://www.aviabue.org.ar/" title='Asociación de Agencias de Viajes y Turismo de Buenos Aires' target="_blank">
            Asociación de Agencias de Viajes y Turismo de Buenos Aires
           </Aviabue>

           <TripAdvisor>
              Ahora con reseñas de hoteles por
           </TripAdvisor>

         </ImageContainer>

       </FooterItem>

       <FooterItem>
         <FooterTitle>
           <Icon />
           <Text>
             Respaldo
           </Text>
         </FooterTitle>

       </FooterItem>

       <FooterItem>
         <FooterTitle>
           <Icon />
           <Text>
             Respaldo
           </Text>
         </FooterTitle>

       </FooterItem>

       <FooterItem>
         <FooterTitle>
           <Icon />
           <Text>
             Respaldo
           </Text>
         </FooterTitle>

       </FooterItem>

       <FooterItem>
         <FooterTitle>
           <Icon />
           <Text>
             Respaldo
           </Text>
         </FooterTitle>

       </FooterItem>

     </FooterList>
   </MaxWidth>
 </FooterContainer>
)

export default Footer;
