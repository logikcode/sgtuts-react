import React from "react";


class SearchBar extends React.Component {

constructor(props){
    super(props);
    // this.state = {term:""}
    // this.onClickHandler = this.onClickHandler.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
}
state = {term:""};


 onInputChange (event){

// console.log(event.target.value);
this.setState({term: event.target.value})

}



onFormSubmit= (e) =>{
e.preventDefault();
this.props.formSubmit(this.state.term);

}
onClickHandler(event){
    console.log(event.target.value)
}
render(){
    return(
        <div className="ui segment">
           
            <form onSubmit ={this.onFormSubmit} className="ui form">
                <div className="field"> 
                <label>Search Things</label>
                <input className="searchBox" type="text" value={this.state.term}  
                onChange={ (e) => {this.onInputChange(e)}} placeholder={`input your search term`}>
                </input>
                </div>
            </form>
            
        </div>
    );
}

}

export default SearchBar;