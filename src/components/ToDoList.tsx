import React from "react";
import { useRecoilValue } from "recoil";
import { toDosSelector } from "../atoms";
import CategorySelect from "./CategorySelect";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDosSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CategorySelect />
      <CreateToDo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
