import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list'



const App = () => {
    const isLoggedIn = true;
    const loginBox = <span>Log in please</span>;
    const welcomeBox = <span>Welcome Back</span>;
    return (
        <div>
            {isLoggedIn ? welcomeBox : loginBox}
            <AppHeader/>
            <SearchPanel/>
            <TodoList items={['Item 1', 'Item 2']}/>
        </div>
    );
};

ReactDom.render(<App/>, document.getElementById('root'));