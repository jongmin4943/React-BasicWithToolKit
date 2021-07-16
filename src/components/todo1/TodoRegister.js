import React, {useState} from 'react';
import todoService from "./todoService";

const initState ={
    title : '',
    content: ''
}

const TodoRegister = ({movePage}) => {
    const [todo,setTodo] = useState(initState);

    const change = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
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

    const clickRegister = async () => {
        const result = await todoService.registTodo({...todo});
        reset();
        movePage(1);
        console.log(result);
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
                <button onClick={clickRegister}>REGISTER</button>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    );
};

export default TodoRegister;