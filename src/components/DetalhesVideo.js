import React from 'react'
import {Link} from 'react-router-dom';

const DetalhesVideo =({video}) => {
	console.log(video)
	if(!video) return <div> Loading </div> 
	const videoSrc=`https://www.youtube.com/embed/${video.id.videoId} `
	return(


		<div className='container' >
			<div className='polaroid detalhes'>	
				<div  className='polaroid detalhes frame' >
					<iframe frameBorder='0' height='100%' title='Video Player' className='videodetalhes' src={videoSrc}/>
				</div>
				<div style={{padding:'15px'}} className='descricaodetalhes'>
					<h1 className='titulodetalhes'>{video.snippet.title} - {video.snippet.channelTitle} </h1>
					<p>{video.snippet.channelTitle} </p>
					<p>{video.snippet.description} </p>
				</div>
			</div>	
			<div className= 'pagina'>
				<Link to='/'>
					<button  className="btn btn-danger"   > Voltar </button>
				</Link>
			</div>	
			
		</div>
		)
}

export default DetalhesVideo;