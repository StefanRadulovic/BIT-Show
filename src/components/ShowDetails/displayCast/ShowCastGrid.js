import React from 'react';

const ShowCastList = (props) => {
  const actors = props.actors.actors
  if (actors.length === 0) {
    return <div>''</div>
  }
  return (
    <div className="row">
      {actors.map((actor, i) => {
        return (<div className="col m2" key={i}>
            <div className="card">
              <div className="card-image">
                <img src={actor.img}/>
                <span className="card-title">{actor.name}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ShowCastList;
