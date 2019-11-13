import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo List</h1>

};

const SearchPanel = () => {
    const searchText = 'Type here to search'; // один из вариантов использования строкового значения переменной в качестве значения для адрибута html элемента
    const searchStyle = {
        fontSize: '25px',
        color: 'red',
        padding: '10px'
    };
    return <input
        style={searchStyle} // указываем инлайн стили из объекта переменной searchStyle
        placeholder={searchText}
    />;

};

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