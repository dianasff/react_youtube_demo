import React from 'react';

const Paginacao=({nextPageToken, previousPageToken, onNextPage, onPreviousPage, busca})=>{
	return(
		<div>
			{(nextPageToken && !previousPageToken) ? (<button className= 'btn btn-danger paginacao' onClick={()=> onNextPage(nextPageToken, busca)} > Próxima Página </button>): (null)	}
			{(nextPageToken && previousPageToken) ? (
				<div>
				<button className= 'btn btn-danger paginacao' onClick={()=> onPreviousPage(previousPageToken, busca)}> Voltar </button>	
				<button className= 'btn btn-danger paginacao' onClick={()=> onNextPage(nextPageToken, busca)}> Próxima Página </button>
				</div> 
				):( null)} 
			{(!nextPageToken && previousPageToken) ? (<button className= 'btn btn-danger paginacao' onClick={()=> onPreviousPage(previousPageToken, busca)}> Voltar </button>): (null)	}
			
		</div>	
		);

} ;

export default Paginacao;