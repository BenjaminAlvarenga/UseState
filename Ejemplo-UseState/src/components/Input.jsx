import React, { useState } from 'react'

const Grupo = () => {

    const[todos, setTodos] = useState([]);
    const[tarea, setTarea] = useState("");


    const Enviar = () => {
        if(tarea.trim() === "")return;
        setTodos([...todos, { id: Date.now(), text: tarea, completed: false}]);
        setTarea("");
    };


    return(
        <div>
            <h1>Lista</h1>
            <div className='input'>
                <input type="text" 
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                placeholder='Ingrese una nueva tarea...'
                />
                <button onClick={Enviar}></button>
            </div>
        </div>
    )
}