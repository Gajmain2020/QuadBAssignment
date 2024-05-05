/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

export default function Todos(props) {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    //function to add the todo
    if (todo === "") {
      alert("Todo input is empty!!");
      return;
    }
    console.log(todo);
  };
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
        placeholder="✍️ What you have to do?"
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => addTodo()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
}
