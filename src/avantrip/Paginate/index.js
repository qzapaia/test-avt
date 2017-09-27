import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

/*https://github.com/AdeleD/react-paginate*/
const Paginate = ({pagesQty, currentPage, onPageSelected}) => {
  return(
    <div>
      {pagesQty > 0 &&
        <ReactPaginate 
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          pageCount={pagesQty}
          marginPagesDisplayed={5}
          pageRangeDisplayed={10}
          onPageChange={ value => onPageSelected(value.selected)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          forcePage={currentPage}
        />
      }
    </div>
  )
}

Paginate.propTypes = {
  pages:PropTypes.number,
  currentPage:PropTypes.number,
  onPageSelected:PropTypes.func.isRequired
}

export default Paginate;
