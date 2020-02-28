import React from 'react'; 
import {connect} from 'react-redux'
import { getSearchTerm} from '../ActionReducers/actions'
import { bindActionCreators } from 'redux';

class Search extends React.Component{
   state={
       searchTerm:""
   }

    handleInput=(e)=>{
        this.setState({
            searchTerm:e.target.value,
        })
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            searchTerm:""
          })
    }
     
   
    render(){
     const {searchTerm}=this.state 
        return (
            <div>
           <form onSubmit={this.handleSubmit}>
            <input type="text" className="form-control" onChange={this.handleInput}  name="searchTerm" value={this.state.searchTerm} placeholder="enter..."/>
            <button  onClick={()=>{this.props.getSearchTerm(searchTerm)}}>SEARCH</button>
         </form>
            </div>
        )
    }
}


const mapPropsTostate=(state)=>{
    return state
}
const mapDispatchTostate =(dispatch)=>{
    return bindActionCreators({getSearchTerm},dispatch)
}
export default connect(mapPropsTostate,mapDispatchTostate)(Search)