import React from 'react';

function RoundedImageComponent(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img}
                 className="rounded-circle"
                 id="img-develop"
                 alt="doctor-img"
                 width="50%"/>
            <br/>
            <b>{props.profession}</b>
        </div>
    );
}

export default RoundedImageComponent;