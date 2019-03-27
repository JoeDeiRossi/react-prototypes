import React from 'react';
import ReactDOM from 'react-dom';

var user = {
    name: 'STEVE',
    luckyNumber: luckyNumber()
};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);

function luckyNumber() {
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    return randomNumber;
}

function greeting(userObject) {
    return (
        <div className="container">
            <h1>WHAT'S UP {userObject.name}!</h1>
            <h2 className="text-muted">YOUR LUCKY NUMBER IS {userObject.luckyNumber}!</h2>
        </div>
    )
}
