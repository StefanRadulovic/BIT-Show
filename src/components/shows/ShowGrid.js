import React from 'react';
import ShowItem from './ShowItem';
import {Link} from 'react-router-dom'

const ShowGrid = ({ shows = [] }) => {

  const showItem = shows.map((show, i) => {
    return (<Link to={`/show/${show.id}`} key={i}>
      <ShowItem show={show}/>
    </Link>)
  });
  return (
    <div className="row">
      {showItem}
    </div>
  );
};

export default ShowGrid;
