import React, { Component, useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';


//함수형 기반 컴포넌트
const App = () => {
  //상태변화
  const [todos, setTodos] = useState(['js공부']); // 기본값설정
  const [newTodo, setNewTodo] = useState(); //이벤트값
  
  //이벤트 객체
  const changeInputData = (e) => {
    setNewTodo(e.target.value); //새로운이벤트값이 newTodo에저장

  }
  //버튼
  const addTodo = (e) => {
    e.preventDefault(); //폼전송막기 (이벤트전파방지)
    setTodos([...todos, newTodo]); //배열정보 [이전의todos정보, 새로운정보]
  }
  
  //라이프사이클 마무리 렌더링 이후 처리되는 것
  useEffect( () => {
    console.log("새로운 내용이 렌더링 되었습니다.");
  }, [todos])

  //자동 렌더링이 되면서 라이플사이클중이다.
  return (
    <>
      <h1>Hellow World!</h1>

      <form action="">
        <input type="text" name="" onChange={changeInputData}/>
        <button onClick={addTodo}>할일추가</button>
      </form>

      <List todos={todos}/>
    </>
  )
}

export default App;
