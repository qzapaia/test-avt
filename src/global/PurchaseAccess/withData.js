import React from "react";
import { connect } from "react-redux";

import PurchaseAccess from "./";

import { onSubmit, setPurchase  } from "./actions";


const mapStateToProps = state => ({
  value: {
    purchaseId: state.purchaseAccess.purchaseId,
    purchaseEmail: state.purchaseAccess.purchaseEmail
  },
  errorMessage: state.purchaseAccess.errorMessage
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: formValue => {
      dispatch(onSubmit(formValue));
    },
    onChange: value => {
      dispatch(setPurchase(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseAccess);
