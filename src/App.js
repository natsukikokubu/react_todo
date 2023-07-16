import React, { useState } from "react";

//InputをcreateTodoという名前で定義,引数はvalueと更新するためのsetValue
const Input = ({ createTodo }) => {
  console.log("mugi");
  //Inputに入力された値のStateを管理
  const [value, setValue] = useState("");

  //Input関数にデータを渡すためのreturn
  //複数あるから（）でくくっている,<div>は必要？
  return (
    <div>
      <input
        type="text"
        placeholder="入力してね"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
