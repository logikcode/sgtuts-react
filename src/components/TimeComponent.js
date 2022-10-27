import React from "react";

class ShowTime extends React.Component {
    constructor(props){
        super(props);

        this.state = {time: new Date().toLocaleString}
    }

    state = {time: new Date().toLocaleString}

    componentDidMount(){
        setInterval( () => {
            this.setState({time: new Date().toLocaleString});
        }, 1000);
    }

    componentDidUpdate(){
        setInterval( () => {
            this.setState({time: new Date().toLocaleString});
        }, 1000);
    }


    render(){
        return(
            <div>time: {this.state.time}</div>
        );
    }
}

export default ShowTime;