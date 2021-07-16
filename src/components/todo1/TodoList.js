import React, {useEffect, useState} from 'react';
import todoService from "./todoService";
import TodoRegister from "./TodoRegister";
import TodoRead from "./TodoRead";
const initState = {
    "dtoList":[],
    "pageList": [],
    "page": 1,
    "size": 0,
    "start": 0,
    "end": 0,
    "totalPage": 0,
    "prev": false,
    "next": false,
}
const TodoList = () => {

    const [data,setData] =useState(initState);
    const [loading,setLoading] = useState(false);
    const [flag,setFlag] = useState(false);
    const [targetTno,setTargetTno] = useState(-1);

    useEffect(()=>{
        setLoading(true);
        todoService.getList(data.page).then((res)=> {
            setData(res);
            setLoading(false);
        });
    },[data.page,flag])

    const movePage = (num) => {
        setFlag(!flag);
        setData({...data,page:num});
        setTargetTno(-1);
    }

    const readTodo = (tno) => {
        setTargetTno(tno);
    }

    const list = data.dtoList.map((t)=><li key={t.tno} onClick={()=>readTodo(t.tno)}>{t.tno} - {t.title}</li>)

    return (
        <div>
            {loading ?
                <h1>로딩중이다</h1>
                :
                <>
                    <ul>
                        {list}
                    </ul>
                    <PageList data={data} movePage={movePage}/>
                    <hr/>
                    <TodoRead targetTno={targetTno} movePage={movePage}/>
                    <hr/>
                    <TodoRegister movePage={movePage}/>
                </>
            }
        </div>
    );
}

const PageList = ({data,movePage}) => {
    return(
        <>
            {data.prev && <button onClick={()=>movePage(data.start-1)}>◀</button>}
            {data.pageList.map((p,idx)=> <button key={idx} onClick={()=>movePage(p)}>{p}</button>)}
            {data.next && <button onClick={()=>movePage(data.end+1)}>▶</button>}
        </>
    )
}

export default TodoList;