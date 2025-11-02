import { createElement, mount, useState } from "./jsx-runtime";
import { Counter } from "./counter";
import { TodoApp } from "./todo-app";
import { Dashboard } from "./dashboard";
import "./style.css";

const App = () => {
  const [getTheme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    const newTheme = getTheme() === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  
  return (
    <div>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: "24px" 
      }}>
        <h1 style={{ 
    textAlign: "center", 
    margin: "0 auto"
    }}>
      Lab2 - Mini JSX Framework Dashboard
        </h1>
        <button
          onClick={toggleTheme}
          style={{
            background: "linear-gradient(180deg, #8b5cf6 0%, #7c3aed 100%)",
            color: "#fff",
            border: "4px solid #5b21b6",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "0",
            boxShadow: "inset 0 2px 0 #a78bfa, inset 0 -2px 0 #5b21b6, 0 4px 0 #4c1d95",
            textShadow: "1px 1px 0 #5b21b6"
          }}
        >
          {getTheme() === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <Counter initialCount={0} />
      <TodoApp />
      <Dashboard />
    </div>
  );
};

const appRoot = document.getElementById("root");
if (appRoot) {
  mount(<App />, appRoot);
}