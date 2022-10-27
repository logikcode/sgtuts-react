import React from "react";

const Spinner = (props) => {

return (
    <div className="ui active loader">
        <div ui big text laoder> {props.message}</div>
    </div>
);

}

Spinner.defaultProps = {
    message: "Loading ... "
}

export default Spinner;