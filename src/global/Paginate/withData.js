import React from "react";
import { gql, graphql } from 'react-apollo';
import { connect } from "react-redux";
import Paginate from "./";

import { get } from 'lodash';

import { setPagesCount, setSelectedPage } from "./actions";

const mapStateToProps = state => {
  return {
    pagesCount: state.paginate.pagesCount,
    selectedPage: state.paginate.selectedPage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(
    setPagesCount(ownProps.pagesCount)
  )

  return {
    onPageSelected: selectedPage => {
      dispatch(
        setSelectedPage(selectedPage)
      );
    }
  }
}

const PaginateWithData = (props) => {
  return <Paginate pagesCount={0}/>
}
  
// GrahQL Query
export const query = gql`
query PaginationQuery(
  $origin: String!,
  $destination: String!,
  $departureDate: String!,
  $returningDate: String!,
  $passengersAdults: Int!,
  $passengersChildren: Int!,
  $passengersInfants: Int!,
  $cabinClass: FligthCabinClassInput!,
  $channel: String!,
  $portal: String!)
  {
    orchestrator{
      availability{
        roundtrip(origin:$origin,destination:$destination,departureDate:$departureDate,returningDate:$returningDate,
          passengers:{ adults:$passengersAdults,children:$passengersChildren,infants:$passengersInfants },cabinClass:$cabinClass,channel:$channel,portal:$portal){
          metas,references
        }
      }
    }
  }`

  const WithApolloComponentPaginate = graphql(query,{
    options: props => ({
      variables : {
        origin : props.origin,
        destination : props.destination,
        departureDate : props.departureDate,
        returningDate : props.returningDate,
        passengersAdults : props.passengersAdults,
        passengersChildren : props.passengersChildren,
        passengersInfants : props.passengersInfants,
        cabinClass : props.cabinClass,
        channel : props.channel,
        portal : props.portal, 
      },
    })
  })(PaginateWithData);

const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponentPaginate);
export default WithDataComponent;
