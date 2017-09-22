import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

/*https://github.com/AdeleD/react-paginate*/
const Paginate = ({pages, currentPage, onPageSelected}) => {
  return(
    <div>
      {pages.length > 0 &&
        <ReactPaginate 
            previousLabel={"Anterior"}
            nextLabel={"Siguiente"}
            pageCount={pages.length}
            marginPagesDisplayed={5}
            pageRangeDisplayed={10}
            onPageChange={onPageSelected}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            forcePage={currentPage.value}
        />
      }
    </div>
  )
}

Paginate.propTypes = {
  pages:PropTypes.array.isRequired,
  currentPage:PropTypes.object.isRequired,
  onPageSelected:PropTypes.func.isRequired
}

Paginate.defaultProps = {

}

export default Paginate;
