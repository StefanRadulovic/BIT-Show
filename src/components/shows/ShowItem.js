import React from 'react';

const ShowItem = ({ show }) => {
  return (
    <div className="col s6 m3">
      <div className="card hoverable">
        <div className="card-image">
          <img src={show.image}/>
          <span className="btn-floating halfway-fab waves-effect waves-light red center">{show.rating}</span>
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4 truncate">{show.title}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
