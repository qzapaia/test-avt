import React from "react";
import { gql, graphql } from 'react-apollo';
import { connect } from "react-redux";
import Paginate from "./";

import { get } from 'lodash';

import { setPagesCount, setSelectedPage } from "./actions";

const mapStateToProps = state => {
  return {
    selectedPage: state.paginate.selectedPage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPageSelected: selectedPage => {
      dispatch(
        setSelectedPage(selectedPage)
      );
    },
    pagesCount:ownProps.pageCount 
  }
}

const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(Paginate);
export default WithDataComponent;
