import React from "react";
import { connect } from "react-redux";
import Paginate from "./";

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
  
export default connect(mapStateToProps, mapDispatchToProps)(Paginate);
