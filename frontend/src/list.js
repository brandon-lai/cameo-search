import React from 'react';
import uuid from 'react-uuid';

const List = ({ dataFromAPI }) => {
    const list = dataFromAPI.length ? (
        dataFromAPI.map(data => {
            console.log(data);
            if (data.name) {
                return (
                    <div key={uuid()}>
                        <span>{data.name}</span>
                    </div>
                )
            }
            else {
                return (
                    <p>No matching results found :(</p>
                )
            }
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