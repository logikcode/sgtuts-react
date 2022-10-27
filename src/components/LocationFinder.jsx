import React from 'react'
import DisplayLocation from './DisplayLocation';
import Spinner from './Spinner';


class LocationFinder extends React.Component {

constructor(props){
super(props);
}

state = {lat: null, errorMsg: "" };


componentDidMount(){
   
window.navigator.geolocation.getCurrentPosition( 
    (position) => {
        
        this.setState({lat: position.coords.latitude});
        //console.log(position.coords.latitude);
},

    (error) => {
        console.log(error.message)
        this.setState({errorMsg: error.message})

    }
);


//console.log(this.state);

}

displayContent(){

    if (!this.state.errorMsg && this.state.lat) {

        return (
         <DisplayLocation lat = {this.state.lat}/>
         );
      }
 
      if( this.state.errorMsg && !this.state.lat){
          
         return (<div>Error: {this.state.errorMsg}</div>);
      }
 
      return (
         <div> 
             <Spinner message ="Please Accept Location Requset"/>
         </div>
       );
}

render(){

       return  this.displayContent();
    
    }
    

}

export default LocationFinder;