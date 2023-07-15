import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Todo = ({ createTodo }) => {
  // inputに入力された値のstateを管理
  const [value, setValue] = useState("");

  const addTodo = () => {
    //未入力の場合、alertを表示させる
    if (value === "") {
      alert("Todoが入力されていません。");
      return;
    }
    //新しいtodoオブジェクトを生成
    const newTodo = {
      id: uuidv4(),
      content: value,
    };

    //createTodoの引数にnewTodoを渡す
    createTodo(newTodo);
    //inputの中身を空にする
    setValue("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="入力してね"
        value={value}
        //入力された値をvalueに反映する
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>+</button>
    </div>
  );
};
