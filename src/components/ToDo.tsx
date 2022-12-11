import React from "react";
import { useSetRecoilState } from "recoil";
import { toDosState, IToDo, Categories } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDosState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldTodos) => {
      if (name === "DELETE") {
        return oldTodos.filter((toDo) => toDo.id !== id);
      }
      const targetIndex = oldTodos.findIndex((toDo) => toDo.id === id);
      const newToDo = { id, text, category: name as Categories };
      return [
        ...oldTodos.slice(0, targetIndex),
        newToDo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button name="DELETE" onClick={onClick}>
        Delete
      </button>
    </li>
  );
}

export default ToDo;
