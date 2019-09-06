import React from 'react';

const ShowDetails = (props) => {
  let arr = props.details.genres || [];

  return (
    <div className='row'>
      <div className="col s5">
        <div className="card">
          <div className="card-image">
            <img src={props.details.img} alt=""/>
          </div>
        </div>
      </div>
      <div className="col s6 offset-s1">
        <h3>{props.details.title}</h3>
        <br/>
        {arr.map((genre, i) => {
          return <span className='genres' key={i}>{genre}</span>
        })}
        <p className="flow-text">{props.details.summary}</p>
      </div>
    </div>
  )
};

export default ShowDetails;
