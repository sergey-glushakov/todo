import React from "react";

const SearchPanel = () => {
    const searchText = 'type to search'; // один из вариантов использования строкового значения переменной в качестве значения для атрибута html элемента
    return (<input type="text"
        className="form-control search-input"
        placeholder={searchText}
    />);

};

export default SearchPanel;