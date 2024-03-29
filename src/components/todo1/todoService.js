import axios from "axios";

const baseURL = "http://localhost:8080/todo";

const headerObj = {
    headers: {'Content-Type' : 'application/json'}
}

const todoService = () => {

    const getTime = async () => {
        const result = await axios.get(baseURL+"/now");
        return result;
        // console.log(result)
    }

    const getList = async (page) => {
        const result = await axios.get(baseURL+`/pages?page=${page}`)
        const data = result.data;
        return data;
    }

    const registTodo = async (todo) => {
        const todoStr = JSON.stringify(todo);
        const result = await axios.post(baseURL, todoStr, headerObj);
        return result.data;
    }

    const getOne = async (tno) => {
        const result = await axios.get(baseURL+"/"+tno)
        return result.data;
    }

    const removeOne = async (todo) => {
        const todoStr = JSON.stringify(todo)
        const result = await axios.delete(baseURL+"/"+todo.tno,{data:todoStr,...headerObj});
        return result.data;
    }

    const modify = async (todo) => {
        const todoStr = JSON.stringify(todo)
        const result = await axios.put(baseURL+"/"+todo.tno,todoStr,headerObj);
        return result.data;
    }


    return {getTime,getList,registTodo, getOne, removeOne,modify};
}

export default todoService();
