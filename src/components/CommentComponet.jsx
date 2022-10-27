
import React from 'react'


function CommentComponet(props) {
  return (
    <div className="ui container comments">
        <div className="comment" style={{display: "inline-block", width: "50%"}}>

             <a href="/" className="avatar">
                <img alt="avatar" src={props.img}/>
            </a>
                
            <div className="content" style={{display: "inline-block"}}>
                <a href="/" className="author">
                    {props.name}
                </a>
                <div className="metadata">
                    <span className="date"> {props.time}</span>
                </div>
                <div className="text"> {props.post}</div>
            </div>
        </div>
    </div>
  );
}

export default CommentComponet