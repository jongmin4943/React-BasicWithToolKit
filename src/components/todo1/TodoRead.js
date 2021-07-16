import React, {useEffect, useState} from 'react';
import todoService from "./todoService";

const initState = {
    tno:0,
    title:'',
    content: '',
    regDate: '',
    modDate: '',
}

const TodoRead = ({targetTno,movePage}) => {

    const [todo, setTodo] = useState(initState);

    useEffect(()=>{
        if(targetTno>=0) {
            todoService.getOne(targetTno).then(res=>{
                console.log(res);
                setTodo({...res});
            });
        }
    },[targetTno])


    const change = (e) => {
        setTodo({
            ...todo,
            [e.target.name] : e.target.value
        })
    }

    const clickDel = async () => {
        const {tno,title,content} = todo;
        const param =  {tno,title,content};
        console.log(param);
        const result = await todoService.removeOne(param);
        movePage(1);
        console.log(result);
    }

    const clickMod = async () => {
        const {tno,title,content} = todo;
        const param = {tno,title,content};
        const result = await todoService.modify(param);
        movePage(1);
        console.log(result);
    }

    return (
        <div>

            <h1>Todo Read</h1>
            <div>
                <h3>{todo.tno}</h3>
            </div>
            <div>
                <input type='text' name='title' value={todo.title} onChange={change}/>
            </div>
            <div>
                <input type='text' name='content' value={todo.content} onChange={change}/>
            </div>
            <div>
                <button onClick={clickMod}>Mod</button>
                <button onClick={clickDel}>Del</button>
            </div>

        </div>
    );
};

export default TodoRead;