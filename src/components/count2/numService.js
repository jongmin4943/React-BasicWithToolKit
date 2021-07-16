const numService = () => {
    let count = 0;

    let fn;

    const setFn=(func)=>{
        fn = func;
    }

    const changeValue = (amount) => {
        count+=amount;
        fn();
        return count;
    }

    const resetCount = () => {
        count = 0;
        fn();
        return count;
    }

    const getCount = () => {
        return count;
    }

    return {changeValue,resetCount,getCount,setFn}
}

export default numService();