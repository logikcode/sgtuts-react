import React from 'react'
import { render } from 'react-dom';
import LocationFinder from './LocationFinder';

const ApprovalCardComp = (props) => {



  return(
    <> 
    {props.children}
    <div className="ui card">
    
        <div className="content">Are you sure</div>
        <div className="extra content">
            <div className="ui two buttons">
                <div className="ui basic green button"> Approve</div>
                <div className="ui basic green button">Reject</div>
            </div>
        </div>
    </div>
    </>
  );
}
export default ApprovalCardComp;
