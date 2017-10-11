import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

/*https://github.com/AdeleD/react-paginate*/
const Paginate = ({pagesCount, selectedPage, onPageSelected}) => {
  return(
    <div>
      {pagesCount > 0 &&
        <ReactPaginate 
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          pageCount={pagesCount}
          marginPagesDisplayed={5}
          pageRangeDisplayed={10}
          onPageChange={ value => onPageSelected(value.selected)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          forcePage={selectedPage}
        />
      }
    </div>
  )
}

Paginate.propTypes = {
  pagesCount:PropTypes.number,
  selectedPage:PropTypes.number,
  onPageSelected:PropTypes.func.isRequired
}

export default Paginate;
