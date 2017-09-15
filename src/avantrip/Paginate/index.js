import React from 'react';
import PropTypes from 'prop-types';

const paginateStyle = {
	display : 'flex',
	justifyContent: 'space-between',
	backgroundColor: 'white',
	margin: '20px'
}

const pageStyle = {
	display : 'flex',
	justifyContent: 'space-between',
	backgroundColor: 'grey',
	padding: '10px'
}

const currentPageStyle = {
	display : 'flex',
	justifyContent: 'space-between',
	backgroundColor: 'red',
	padding: '10px'
}

const Paginate = ({pages, currentPage, onClick}) => {

	if(pages.length < 0 ){
		return(<div></div>)
	} else {
		return(
			<div style={paginateStyle}>

				{currentPage.value != 1 && 
					<div 
				  	key={pages.length + 1000}
				  	style={pageStyle} 
				  	onClick={ e => onClick({
	          		'value': currentPage.value - 1
	          	})
				  	}>
				  	Anterior
				  </div>
				}

				{_.map(pages, (p, index) =>
				  <div 
				  	key={p.value}
				  	style={currentPage.value == p.value ? currentPageStyle : pageStyle} 
				  	onClick={ e => onClick({
	          		'value': p.value
	          	})
				  	}>
				  	{p.value}
				  </div>
				)}

				{currentPage.value != pages.length && 
					<div 
				  	key={pages.length + 1001}
				  	style={pageStyle} 
				  	onClick={ e => onClick({
	          		'value': currentPage.value + 1
	          	})
				  	}>
				  	Siguiente
				  </div>
				}
				
			</div>
		)
	}
}

Paginate.propTypes = {
  
}

Paginate.defaultProps = {

}

export default Paginate;
