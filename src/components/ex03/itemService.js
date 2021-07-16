const ItemService = () => {

    const items = [
        {"name" : "샤프", "price" : 2000, "imgSrc" : "http://www.thessan.com/shopimages/thessancom/0010040000042.jpg?1477899047","count":0},
        {"name" : "연필", "price" : 1000, "imgSrc" : "https://littledeep.com/wp-content/uploads/2020/01/littledeep_illustration_pencil_style2.png","count":0},
        {"name" : "색종이", "price" : 700, "imgSrc" : "http://image.babosarang.co.kr/product/detail/PAZ/1910290719527953/_600.jpg","count":0},
        {"name" : "가위", "price" : 1200, "imgSrc" : "http://iwings.co.kr/web/product/big/202009/b4a485069b64e932431906d79b71cbf0.jpg","count":0},
        {"name" : "지우개", "price" : 500, "imgSrc" : "https://t1.daumcdn.net/tistoryfile/fs11/5_tistory_2009_01_17_12_04_49714ac6e7614?x-content-disposition=inline","count":0},
        {"name" : "쫀드기", "price" : 1500, "imgSrc" : "https://m.goldcandy.co.kr/web/product/big/201709/1226_shop1_677853.jpg","count":0},
    ]

    const getItems=()=>{
        return items;
    }


    return {getItems:getItems}

}

export default ItemService()