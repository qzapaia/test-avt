import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Text from '../Text';
import Link from '../Link';
import {FooterContainer, MaxWidth, FooterItem, FooterTitle, FooterList, FooterImage, ImageContainer, Faevyt, Aviabue, TripAdvisor, Visa, Mastercard, American, Cabal, Diners, Todopago, CardsContainer, ViewMore, Geotrust, Fiscal, AvantripPymes, ContactContainer, WeekDays, FooterLink, RockBottom, Copyright, SocialLinks, Facebook, Twitter} from './styled'

const Footer = ({layout, media}) => (
 <FooterContainer>
   <MaxWidth>
     <FooterList>

       <FooterItem layout={media.size}>
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

         <FooterTitle>
           <Icon id='Paquetes' width='14px' height='14px' color='darkgray'/>
           <Text>
             Viajes corporativos
           </Text>
         </FooterTitle>
         <AvantripPymes title="Avantrip Pymes" href="https://www.avantrip.com/pymes/" />

       </FooterItem>
       <FooterItem>
         <FooterTitle>
           <Icon id='CreditCard' height='14px' width='14px' color='darkgray' />
           <Text>
             Facilidades de pago
           </Text>
         </FooterTitle>
         <CardsContainer>
           <Visa />
           <Mastercard />
           <American />
           <Cabal />
           <Diners />
           <Todopago />
           <ViewMore href='https://www.avantrip.com/formas-de-pago'>
           Ver todos los medios de pago
         </ViewMore>
       </CardsContainer>
     </FooterItem>

       <FooterItem>
         <FooterTitle>
           <Icon id='Lock' height='14px' width='14px' color='darkgray' />
           <Text>
             Sitio seguro
           </Text>
         </FooterTitle>
         <CardsContainer>
           <Geotrust href="https://sealsplash.geotrust.com/splash?&dn=www.avantrip.com" target="_blank">
             GeoTrust
           </Geotrust>
           <Fiscal href="https://servicios1.afip.gov.ar/clavefiscal/qr/mobilePublicInfo.aspx?req=e1ttZXRob2Q9Z2V0UHVibGljSW5mb11bcGVyc29uYT0zMzcxMDc0NTE1OV1bdGlwb2RvbWljaWxpbz0wXVtzZWN1ZW5jaWE9MF1bdXJsPWh0dHA6Ly93d3cuYXZhbnRyaXAuY29tXX0=" target="_blank">
             Data fiscal
           </Fiscal>

         </CardsContainer>
           <FooterLink href="https://www.avantrip.com/politica-de-privacidad">
             <Text tag='p' type='s'>
               Política de privacidad
             </Text>
           </FooterLink>

         <FooterLink href="https://www.avantrip.com/seguridad">
           <Text tag='p' type='s'>
             Seguridad
           </Text>
         </FooterLink>

         <FooterLink href="https://www.avantrip.com/terminos-y-condiciones">
           <Text tag='p' type='s'>
             Términos y condiciones
           </Text>
         </FooterLink>
       </FooterItem>


       <FooterItem>
         <FooterTitle>
           <Icon id='Message' height='14px' width='14px' color='darkgray' />
           <Text>
             Contacto
           </Text>
         </FooterTitle>
         <ContactContainer>
           <Text tag='h3' type='s'>
             Compra telefónica
           </Text>
           <Text tag='strong' type='m'>
             0810-222-2826
           </Text>
           <WeekDays tag='p' type='xs'>
             Lun a Vie de 8 a 20hs.
           </WeekDays>
           <WeekDays tag='p' type='xs'>
             Sáb y Dom de 9 a 15hs.
           </WeekDays>

           <Text tag='h3' type='s'>
             Centro de atención al cliente
           </Text>
           <Text tag='strong' type='m'>
             0810-222-2848
           </Text>
           <WeekDays tag='p' type='xs'>
             Lun a Vie de 8 a 20hs.
           </WeekDays>
           <WeekDays tag='p' type='xs'>
             Sáb y Dom de 9 a 15hs.
           </WeekDays>

           <FooterLink href="http://www.avantrip.com/centro-de-ayuda">
            <Text tag='p' type='s'>
              Centro de Ayuda
            </Text>
          </FooterLink>

           <FooterLink href="https://www.avantrip.com/quienes-somos">
            <Text tag='p' type='s'>
              Acerca de Avantrip
            </Text>
          </FooterLink>

           <FooterLink href="https://www.avantrip.com/oportunidades/programa-de-afiliados">
            <Text tag='p' type='s'>
              Programa de afiliados
            </Text>
          </FooterLink>


         </ContactContainer>

       </FooterItem>

     </FooterList>

     <RockBottom>
       <Copyright>
         <Text tag='p'>
           2008 - 2017 Avantrip.com - Todos los derechos reservados
         </Text>
         <Text tag='p'>
           Avantrip.com SRL Legajo Nro. 13969 - Disp. 299
         </Text>
       </Copyright>

       <SocialLinks>
         <Facebook href='http://www.facebook.com/avantrip' target='_blank' title='Seguinos en Facebook' >
           Facebook
         </Facebook>

         <Twitter href='http://twitter.com/avantrip' target='_blank' title='Seguinos en Twitter' >
           Twitter
         </Twitter>

       </SocialLinks>

     </RockBottom>
   </MaxWidth>
 </FooterContainer>
)

export default Footer;
