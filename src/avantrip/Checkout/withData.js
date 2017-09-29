import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
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
export const ValidateQuery = gql`
  query ValidateQuery(
    $params: String!
  ) {
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
  }
`
const CheckoutComponent = props => {
  return (
    <Checkout
      {...props}
      values={props.data}
    />
  );
};

const WithValidateComponentApollo = graphql(ValidateQuery,{
  options: props => ({
    variables : {
      params : props.params
    }
  })
})(CheckoutComponent);

//const WithDataComponentValidate = connect(mapStateToProps, mapDispatchToProps)(WithValidateComponentApollo);

export default WithValidateComponentApollo;
