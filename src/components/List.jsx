import React from "react";

export const List = ({ todos, deleteTodo }) => {
  return (
    <div>
      {/**受け取ったtodosをmapで回してtodosを取得する　 */}
      {todos.map((todo) => {
        return (
          <div key={todo.di}>
            <span>{todo.content}</span>
            {/**押したボタンのIDをdeleteTodoの引数に渡す　 */}
            <button onClick={() => deleteTodo(todo.id)}>-</button>
          </div>
        );
      })}
    </div>
  );
};
