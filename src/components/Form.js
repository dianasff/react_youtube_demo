import React, {Component} from 'react';





class Form extends Component {
  state ={
    termobusca:'',
    enviou:false,
     
  }
  handleChange =(evt)=>{

    this.setState({termobusca: evt.target.value });
  }
  handleSubmit =(evt)=>{
    const {termobusca} =this.state;
    const {onFormSubmit}=this.props;
    this.setState({enviou: true});

    onFormSubmit(termobusca)
    evt.preventDefault()
  }

  render(){
    return (
    <div className="form-inline">
      {this.state.enviou ?(
        <div>
            <header className="move" >
              <form onSubmit={this.handleSubmit}  >
                <input type='text' className="form-control" name='pesquisar' placeholder='Pesquisar' onChange={this.handleChange}  required />
                
                <button type='submit' className="btn btn-primary ">Buscar</button>
                
                
              </form> 
            </header>
        </div>
        ):(
          <div>
              <header className="App-header">
                <form onSubmit={this.handleSubmit}  >
                  <input type='text' className="form-control" name='pesquisar' placeholder='Pesquisar' onChange={this.handleChange}  required/>
                  <button type='submit' className="btn btn-success ">Buscar</button>
                </form> 
              </header> 
          </div>    

        )}
       
    </div>
  );
}
}

export default Form;