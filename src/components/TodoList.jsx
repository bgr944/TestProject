import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { AgGridReact } from "ag-grid-react";
import { useRef, useState } from 'react'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export default function TodoList() {
    
    const [todo, setTodo] = useState({
        description: '',
        priority: '',
        date: ''
    });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();
    
    const [columnDefs] = useState([
        {field: 'description', sortable: false, filter: true},
        {field: 'priority', filter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        },
        {field: 'date', filter: true}
      ]);

    
    const handleClick = () => {
        
        if (todo.description && todo.priority &&todo.date !== '') {
            setTodos([...todos, todo]);
            setTodo({description: '',
            priority: '',
            date: ''});
        }
        else {
        alert("Write description")
    }

    }

  const yourChangeDateFunc = (date) => {
    let str = date.toISOString()
    setTodo({...todo, date})
    }


  
    const deleteTodo = (index) => {

        const update = todos.filter((todo, i) => i !== index)

        setTodos(update);

    }


    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
          setTodos(todos.filter((todo, index) => 
            index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
          alert('Select a row first!');
        }
      };
    
    return (

        <>
            <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center">    
            <TextField 
      label="Description" 
      onChange={e => setTodo({...todo, description: e.target.value })} 
      value={todo.description} />
    <TextField
      label="Priority" 
      onChange={e => setTodo({...todo, priority: e.target.value })} 
      value={todo.priority} /> 
<DatePicker label='Date Picker' value={todo.date} onChange={date => yourChangeDateFunc(date)}  />
            <Button onClick={handleClick}>Add</Button>
          <Button onClick={handleDelete}>Delete</Button>
            </Stack>
            <div className="ag-theme-material" style={{width: 700, height: 500}}>
      <AgGridReact 
        ref={gridRef}
        onGridReady={ params => gridRef.current = params.api }
        rowData={todos}
        columnDefs={columnDefs}
        rowSelection="single" 
      />
    </div> 
        </>

    );



}