import React,{Component} from 'react';

const Card=(props)=>{
    const {name,email,id}=props;
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="image"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;