import React from 'react'

const TopBar = (props) => {

    return (
        <div id="header">
            <h1>{props.name}</h1>
        </div>
    );

};

export default TopBar