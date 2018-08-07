import React from 'react';

const ShowCastList = (props) => {

    const actors = props.actors.actors
    if (actors.length === 0) {
        return <div>''</div>
    } 

       
    return <div className='row'>
        <ul className='collection'>
        {actors.map((actor, i) => {
            return (
                <li className="collection-item avatar valign-wrapper" key={i}>
                    <img src={actor.img} alt="" className="circle responsive-img" />
                    <h5>{actor.name}</h5>
                </li>
            )
        })}
        </ul>
    </div>
};

export default ShowCastList;