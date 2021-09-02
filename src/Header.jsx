import React, { useContext } from 'react';
import './Header.css';
import { TodoContext } from './TodoStore.js';

const Header = () => {
    const {todos} = useContext(TodoContext);
    return(
            <>
            <h1>HELLO TODO 애플리케이션</h1>
            <div className="countInfo">해야할 일 ! {todos.filter(v=>v.status==="todo").length}</div>
            </>
    )
}

export default Header