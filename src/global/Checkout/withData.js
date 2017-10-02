import React, { Component } from 'react';
import { gql, graphql , compose } from 'react-apollo';
import Checkout from './'
import { get } from 'lodash';
import { connect } from "react-redux";
import { getData, setData } from './actions';

const mapStateToProps = state => ({
  repos: state.Redux.repos
});

const mapDispatchToProps = {
  getRepos:getData
};

// GrahQL Query
export const CheckoutQuery = {
  validate:  gql`
  query ValidateQuery($params: String!) {
    flights{
      validate(params : $params){
        paymentMethods{
          availableMethods{
            type,
            category,
            enable
          },
          financial{
              installmentPlans{
                card,
                cardId,
                bank,
                bankId,
                installments{
                  ref,
                  count,
                  interest{
                    percent
                  },
                  gca{
                    percent,
                    percentSubsidized
                  },
                  dealer,
                  financialCosts,
                  managmentCost,
                  managementMarkupSubsidised,
                  managementMarkupSubsidisedValue,
                  financialPlanExternalId,
                  cft,
                  tea,
                  installmentGroups{
                    quantity,
                    price{
                      amount{
                        value,
                        currencyCode
                      }
                    }
                  }
                }
              }
          }
        }
        products{
          type,
          challenge
        },
        validationMessages{
          message,
          messageType
        }
      }
    }
  } `,
  booking : gql`
  query BookQuery($params: String!){
    flights{
      book(params : $params){
        products{
          bookingCode,
          pnr,
          externalSearchId,
        },
        notification{
          notificationId,
          notificationMessage
        },
        validationMessages{
          message,
          messageType
        },
        channel    
      }
    }
  }          
  `
}
const CheckoutComponent = props => {
  return (
    <Checkout
      {...props}
      values={props.data}
    />
  );
};

const WithValidateComponentApollo = compose(
  graphql(CheckoutQuery.validate,{
    options: props => ({
      variables : {
        params : props.params
      }
    })
  }),
  graphql(CheckoutQuery.booking,{
    options: props => ({
      skip: !localStorage.getItem('auth'),
      variables : {
        params : props.params
      }
    })
  })
) (CheckoutComponent);

//const WithDataComponentValidate = connect(mapStateToProps, mapDispatchToProps)(WithValidateComponentApollo);

export default WithValidateComponentApollo;
