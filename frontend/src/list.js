import React from 'react';
import uuid from 'react-uuid';
import './style.css';

const List = ({ dataFromAPI, filter }) => {
    const list = dataFromAPI.length ? (
        dataFromAPI.map(data => {
            if (data.name) {
                if (filter) {
                    if (filter === 'isAvailableForDirectMessage' && data.isAvailableForDirectMessage) {
                        return (
                            <div className="grid" key={uuid()}>
                                <span>{data.name}</span>
                                <span>{data.username}</span>
                                <span>{data.price}</span>
                                <span>{data.category}</span>
                                <span>{data.score}</span>
                                <span>{data.lastActiveAt}</span>
                            </div>
                        )
                    }
                    else if (filter === 'isAvailableForBusinessRequests' && data.isAvailableForBusinessRequests) {
                        return (
                            <div className="grid" key={uuid()}>
                                <span>{data.name}</span>
                                <span>{data.username}</span>
                                <span>{data.price}</span>
                                <span>{data.category}</span>
                                <span>{data.score}</span>
                                <span>{data.lastActiveAt}</span>
                            </div>
                        )
                    }
                }
                else {
                    return (
                        <div className="grid" key={uuid()}>
                            <span>{data.name}</span>
                            <span>{data.username}</span>
                            <span>{data.price}</span>
                            <span>{data.category}</span>
                            <span>{data.score}</span>
                            <span>{data.lastActiveAt}</span>
                        </div>
                    )
                }
            }
            else {
                return (
                    <p className="no_match">No matching results found :(</p>
                )
            }
        })
    ) : (
        <p className="no_match">No search results yet!</p>
    )
    return (
        <div className="list">
            <div className="grid" key={uuid()}>
                <h3>Name</h3>
                <h3>Username</h3>
                <h3>Price (USD)</h3>
                <h3>Category</h3>
                <h3>Score</h3>
                <h3>Last Active At</h3>
            </div>
            {list}
        </div>
    )
}

export default List;