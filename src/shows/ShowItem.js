import React from 'react';

const ShowItem = ({ show }) => {
  return (
    <div class="row">
      <div class="col s4 m4">
        <div class="card">
          <div class="card-image">
            <img src={show.image} />
            <a class="btn-floating halfway-fab waves-effect waves-light red center">{show.rating}</a>
          </div>
          <div class="card-content">
            <p>{show.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;