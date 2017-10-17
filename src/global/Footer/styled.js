import styled from 'styled-components';
import Link from '../Link';
import Text from '../Text';
export const FooterContainer = styled.footer`
  background: ${props=>props.theme.colors.footer};
  padding: 30px 0 ;
`
export const MaxWidth = styled.div`
  max-width: ${props=> props.theme.viewport.desktop};
  margin: 0 auto;
`
export const FooterItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: ${props=> props.layout <=2?'1 1 100%':'0 0 25%'};
  padding-right: 5px;
  &:not(:first-of-type){
    padding-left: 10px;
  }
  &:not(:last-of-type){
    border-right: 1px solid ${props=>props.theme.colors.darkgray};
  }

`
export const FooterList = styled.ul`
  display: flex;
  flex-wrap: wrap;

`

export const FooterTitle = styled.h2`
  width: 100%;
  display: flex;
  align-items: center;
  &:nth-of-type(2){
    margin-top: 10px;
  }
  svg{
    margin-right: 5px;
  }
`
export const FooterImage = styled.a`
  background-image: url('//cdn.avantrip.com/static/images/avt-iconos-header-footer.png');
  display: inline-block;
  text-indent: -9999px;
  overflow: hidden;
`

export const ImageContainer = styled.figure`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  > *{
    flex: 1;
  }
`
export const Faevyt = FooterImage.extend`
  background-position: 0 -189px;
  height: 24px;
  width: 49px;
  flex: 0 0 49px;
`
export const Aviabue = FooterImage.extend`
  background-position: 0 -216px;
  height: 54px;
  margin: 0;
  width: 42px;
  flex: 0 0 42px;
`
export const TripAdvisor = styled.p`
  background-image: url('https://www.tripadvisor.com.ar/img/cdsi/langs/en/tripadvisor_logo_132x24-23327-0.gif');
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: 99px;
  color: grey;
  font-size: 11px;
  height: 47px;
  flex-basis: 20px;
  line-height: 13px;
  margin-right: 0;
  padding-top: 2px;
`

export const Visa = FooterImage.extend`
  background-position: 0 -17px;
  height: 20px;
  margin: 0;
  width: 43px;
  flex: 0 0 43px;
`
export const Mastercard = FooterImage.extend`
  background-position: 0 -40px;
  margin: 0;
  width: 49px;
  flex: 0 0 49px;
  height: 30px;
`
export const American = FooterImage.extend`
  background-position: -59px -40px;
  margin: 0;
  width: 30px;
  flex: 0 0 30px;
  height: 30px;
`
export const Cabal = FooterImage.extend`
  background-position: 1px -80px;
  height: 29px;
  margin: 0;
  width: 27px;
  flex: 0 0 27px;
`
export const Diners = FooterImage.extend`
  background-position: -40px -80px;
  height: 29px;
  margin: 0;
  width: 39px;
  flex: 0 0 39px;
`
export const Todopago = FooterImage.extend`
  background-position: -45px -152px;
  height: 29px;
  margin: 0;
  width: 45px;
  flex: 0 0 45px;
`

export const CardsContainer = styled.div`
  display: inline-block;
  margin-top: 10px;
  *{
    vertical-align: middle;
    margin: 0 5px;
  }
`

export const ViewMore = Link.extend`
  display: block;
  margin-top: 5px;
  color: ${props=>props.theme.colors.primary}
`

export const Geotrust = FooterImage.extend`
  background-position: 0 -269px;
  height: 40px;
  width: 80px;
  flex: 0 0 80px;
`
export const Fiscal = FooterImage.extend`
  height: 63px;
  background-position: 0 -319px;
  width: 45px;
  flex: 0 0 45px;
`

export const AvantripPymes = styled.a`
  background-image: url('//cdn.avantrip.com/static/images/AVT_negocios_op1.png');
  background-size: 100%;
  width: 175px;
  height: 18px;
  margin-top: 10px;
`

export const ContactContainer = styled.article`
  margin-top: 10px;
  p{
    color: ${props=>props.theme.colors.darkergray};
    margin-bottom: 5px;
  }
  strong{
    font-weight: 500;
    display: inline-block;
    margin-bottom: 5px;
  }
  h3{
    margin-bottom: 5px;
    &:not(:first-of-type){
      margin-top: 10px;
    }
  }

`

export const WeekDays = Text.extend`
  font-weight: 400;
  font-size: 10px;
`

export const FooterLink = Link.extend`
  display: block;
  margin-bottom: 5px;
  &:first-of-type{
    margin-top: 10px;
  }
  p{
    color: ${props=>props.theme.colors.primary}
  }
`

export const RockBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 30px;
`
export const Copyright = styled.article`
  display: block;
  p{
    margin-top: 5px;
  }
`
export const SocialLinks = styled.div`
  display: block;
`


export const Facebook = FooterImage.extend`
  background-position: 2px -109px;
  height: 35px;
  width: 35px;
  flex: 0 0 35px;
  margin-right: 5px;
`
export const Twitter = FooterImage.extend`
  background-position: 0px -149px;
  height: 35px;
  width: 35px;
  flex: 0 0 35px;
  margin-left: 5px;
`
