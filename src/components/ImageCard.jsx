import React from "react";

class ImageCard extends React.Component{
    constructor(props){
        // in order to get hold of an element already rendered in the DOM
        // use 'React.createRef()'
        super(props);
        this.imageRef = React.createRef();
        this.state = {span: 0};

    }
    componentDidMount(){
        this.imageRef.current.addEventListener("load", this.setEleSpan);
    }

    setEleSpan = () => {
        // taking the clientHeight and sets it in the state
        
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({span: spans});
    }

    render(){
        const {description, urls} = this.props.image;
        return(
            <div  style={{gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>    
        );
    };
}
export default ImageCard;