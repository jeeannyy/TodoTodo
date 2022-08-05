import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form id="submitForm" onSubmit={handleSubmit}>
            <input id="enterTask" value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button id="submitBtn">Submit</button>
        </form>
    );
};

export default ToDoForm;