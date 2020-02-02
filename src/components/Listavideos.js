import React from 'react';
import Itens from './Itens';
import Paginacao from './Paginacao'




const Listavideos = ({videos, onVideoSelect, nextPageToken, previousPageToken, onNextPage, onPreviousPage, busca}) => {

			
		const listaDeVideos = videos.map(  (video, id) => <Itens onVideoSelect={onVideoSelect} key={id} video={video} /> )
			return(
				<div >
					<ul >
						{listaDeVideos}
					</ul>
					<div className= 'pagina'>
						{videos === undefined ? (null): (<Paginacao nextPageToken={nextPageToken} busca={busca} previousPageToken={previousPageToken} onNextPage={onNextPage} onPreviousPage={onPreviousPage} />)}
					</div>	
					
					
				</div>
				) 

	};	
	
		


export default Listavideos;
