import React from 'react';
import {Link} from 'react-router-dom';



const Itens =({video, onVideoSelect}) => {
	
	
	return(

		<div className='videos polaroid '>
					
						<img style={{marginRight:'20px'}} alt ='thumbnail'className='img-responsive' src = { video.snippet.thumbnails.medium.url} />
						<Link to='/detalhes' onClick={ () => onVideoSelect(video)}>
							<div style={{cursor:'pointer'}}  >
								
									<h2 className='titulo'>{video.snippet.title} </h2>
									<div className='descricao'>
										<p>{video.snippet.description} </p>
									</div> 
									
								
							</div>
						</Link>	
				
				
			
		</div>
		)
}

export default Itens;