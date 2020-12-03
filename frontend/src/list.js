import React from 'react';
import uuid from 'react-uuid';

const List = ({ dataFromAPI }) => {
    const list = dataFromAPI.length ? (
        dataFromAPI.map(data => {
            console.log(data);
            return (
                <div key={uuid()}>
                    <span>{data.name}</span>
                </div>
            )
        })
    ) : (
        <p>No search results yet!</p>
    )
    return (
        <div className="list">
            {list}
        </div>
    )
}

export default List;