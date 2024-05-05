import { motion } from "framer-motion";
import "./styles/main.css";
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      ></motion.div>
      <Todos />
      <DisplayTodos />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
