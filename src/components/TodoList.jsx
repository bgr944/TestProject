import { useState } from "react";

export default function TodoList() {
    
    const [todo, setTodo] = useState({
        description: '',
        date: ''
    });
    const [todos, setTodos] = useState([]);    


    const handleClick = () => {
        
        if (todo.description && todo.date) {
            setTodos([...todos, todo]);
            setTodo({});
        }
        else {
        alert("Write description")
    }

    }

    const deleteTodo = (index) => {

        const update = todos.filter((todo, i) => i !== index)

        setTodos(update);

    }

    
    return (

        <>
            <input
                placeholder="Description"
                value={todo.description}
                onChange={e => setTodo({ ...todo, description: e.target.value })}
            />
            <input
                type="date"
                value={todo.date}
                onChange={e => setTodo({...todo, date: e.target.value})}
            />
            <button onClick={handleClick} >Add Todo</button>
            <table>
                <tbody>
                    {
                        todos.map((todo, index) =>
                    <tr key={index}>
                        <td>
                                    {todo.description+" "}
                                    {todo.date}
                                </td>
                                <td><button type="button" onClick= {() => deleteTodo(index)} >Delete</button></td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </>

    );



}