import React from 'react';
import ShowItem from './ShowItem'

const ShowGrid = ({shows=[]}) => {

    const showItem = shows.map((show)=>{
        return <ShowItem show={show}/>
    })
    return (
        <div>
            {showItem}
        </div>
    );
};

export default ShowGrid;