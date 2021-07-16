import React, {useState} from 'react';

const initState ={
    title : '',
    content: ''
}

const TodoInput = () => {

    const [todo,setTodo] = useState(initState);

    const change = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        // todo[e.target.name] = e.target.value
        // setTodo({...todo});
        setTodo({
            ...todo,
            [e.target.name]:e.target.value
        })
    }

    const reset = () => {
        setTodo(initState)
    }

    return (
        <div>
            <div>
                <input type='text' name='title' value={todo.title} onChange={change}/>
            </div>
            <div>
                <input type='text' name='content' value={todo.content} onChange={change}/>
            </div>
            <div>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    );
};

export default TodoInput;