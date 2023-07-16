import React, { useState } from "react";

//AppをcreateTodoという名前で定義,引数はvalueと更新するためのsetValue
const App = ({ createTodo }) => {
  //Inputに入力された値のStateを管理
  const [value, setValue] = useState("");
  console.log(value);
  //App関数にデータを渡すためのreturn
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

export default App;
