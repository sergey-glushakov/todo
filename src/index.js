import React from 'react';
import ReactDom from 'react-dom';

const element = (
    <div>
        <h1>My Todo List</h1>
        <input placeholder="search"/>
        <ul>
            <li>Learn Reract</li>
            <li>Build Avesome App</li>
        </ul>
    </div>
);
console.log(element);
ReactDom.render(element,document.getElementById('root'));