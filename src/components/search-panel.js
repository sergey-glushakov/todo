import React from "react";

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

export default SearchPanel;