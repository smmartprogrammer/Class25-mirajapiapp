import React, { useEffect, useState } from 'react';

let baseURL = 'fakeapi';

export const Todos = () => {
  let [data, setData] = useState([]);

  const addTodoHandler = () => {
    fetch(`/${baseURL}/addTodos`, {
      method: 'POST',
      body: { id: 123, text: 'sita raam' },
    })
      .then((res) => {
        console.log('success', res);
      })
      .catch((error) => {
        console.log('error addodos', error);
      });
  };
  const getDataHandler = () => {
    fetch(`/${baseURL}/getTodos`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.todos);
        console.log('data', data);
      });
  };
  return (
    <div>
      Hello World from todos
      <button onClick={addTodoHandler}>addTodos</button>
      <button onClick={getDataHandler}>get Todos</button>
      {JSON.stringify(data)}
    </div>
  );
};

export default Todos;
