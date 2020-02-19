import React, {Component} from 'react';
import Listavideos from './components/Listavideos';
import DetalhesVideo from './components/DetalhesVideo';
import Form from './components/Form';
import Api from './api/Api.js'
import {Route, Switch} from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
          videos:[] ,
          selectedVideos: null,
          nextPageToken:'',
          previousPageToken:'',
          pageToken:null,
          busca:'',
          like:'',
          dislike:'',
          vis:'',

    };
  }
   
  
  handleSubmit= async(termobusca) =>{
    const resposta= await Api.get('search', {
    params:{
      part:'snippet',
      maxResults:15,
      pageToken:null,
      key:'API_KEY',
      q:termobusca
  }} );
    
    
    this.setState({videos: resposta.data.items, 
                  selectedVideos: resposta.data.items[0], 
                  nextPageToken: resposta.data.nextPageToken, 
                  previousPageToken: resposta.data.prevPageToken,
                  pageToken:resposta.config.params.pageToken,
                  busca:termobusca,

                });
    console.log('pegando os dados')
    console.log('termobusca')
    console.log(termobusca)
    console.log(this.state.busca)
    console.log(this.state.videos)
    console.log(this.state.nextPageToken)
    console.log(this.state.previousPageToken)
    console.log(resposta)
  }


   onVideoSelect = async (video )=>{
    console.log(video)
    const id= video.id.videoId
    console.log(id)
    const resposta2= await Api.get('videos', {
    params:{
      part:'snippet, statistics',
      id:id,
      key:'API_KEY',
      
  }} );
    console.log(resposta2)
    this.setState({selectedVideos:video,
      like:resposta2.data.items[0].statistics.likeCount,
      dislike:resposta2.data.items[0].statistics.dislikeCount, 
      vis:resposta2.data.items[0].statistics.viewCount });
    console.log(this.state.selectedVideos)

    
  } 
  onNextPage = async(nextPageToken, busca)=>{
    const resposta= await Api.get('search', {
    params:{
      part:'snippet',
      maxResults:15,
      pageToken:nextPageToken,
      key:'API_KEY',
      q:busca
      
      
  }} );

    this.setState({nextPageToken: resposta.data.nextPageToken, 
                  previousPageToken: resposta.data.prevPageToken,
                  videos: resposta.data.items}); 
  } 

   onPreviousPage = async(previousPageToken, busca)=>{
    const resposta= await Api.get('search', {
    params:{
      part:'snippet',
      maxResults:15,
      pageToken:previousPageToken,
      key:'API_KEY',
      q:busca
      
  }} );

    this.setState({nextPageToken: resposta.data.nextPageToken, 
                  previousPageToken: resposta.data.prevPageToken,
                  videos: resposta.data.items});
  }

  
  render(){
    return (
    <div >
        
          
           <Form  className="App" onFormSubmit={this.handleSubmit}/> 
           <Route exact path='/' render={(routeProps)=> <Listavideos {...routeProps} videos={this.state.videos} busca={this.state.busca} nextPageToken={this.state.nextPageToken} previousPageToken={this.state.previousPageToken} onNextPage={this.onNextPage} onPreviousPage={this.onPreviousPage} onVideoSelect={this.onVideoSelect}/> } /> 
           <Switch> 
            
            <Route exact path='/detalhes' render={(routeProps)=> <DetalhesVideo {...routeProps} video={this.state.selectedVideos} like={this.state.like} dislike={this.state.dislike} visual={this.state.vis}  /> } /> 
          </Switch>  
                    
        
        
        

      
    </div>
  );

 }
  
}

export default App;

