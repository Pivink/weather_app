import { useState } from "react";
function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setNewTodo] = useState("");
    function addTodo() {
        setTodos([...todos, input]);
        setNewTodo("");
        console.log(todos);
    }
    function deleteTodo(index) {
        setTodos(todos.filter((todo, i) => i !== index));
    }
    return (
        <div>
            <input placeholder="add a work" type="text" value={input} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <div>
                {todos.map((todo, index) => (
                    <ul key={index}>
                        <span>{todo}</span>
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </ul>))}
            </div>
        </div>
    )
}
export default TodoApp;