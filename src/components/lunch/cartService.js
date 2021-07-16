const cartService = () => {
    let arr = []

    let fn;

    const append = (store) => {
        arr.push(store)
        fn()
    }

    const remove = (store) => {
        arr = arr.filter(s=>s.name!==store.name)
        fn()
    }

    const getAll = () => {
        return arr;
    }

    const setFn = (func) => {
        fn = func;
    }

    return {append,remove,getAll,setFn}
}

export default cartService();