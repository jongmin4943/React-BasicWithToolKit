const storeService = () => {

    const stores = [
        {name:'수정식당',lat:37.569700136524965, lng:126.98875075448457, cat: '한식',detail:"불맛 나는 제육볶음! 점심 쌈밥세트 추천" ,imgSrc:"https://mblogthumb-phinf.pstatic.net/MjAxODEyMjdfMjc1/MDAxNTQ1ODYyNTgxMzg4.7BghR0i-2UR43Z4NYWFiBobZhj_oQUOqaKPIKXJSwsMg.14zYKwudpZNkKsfiezvw7Lsje_0e82TjW61cHgudB48g.JPEG.zzugguu/output_2390153991.jpg?type=w800"},
        {name:'샤오바오',lat:37.569079828926824, lng:126.98635250487966, cat: '중식',detail:"사천식 우육면, 뜨끈하고 진한 국물!",imgSrc:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F99D1A53B5A93FDD8109C5B"},
        {name:'우육면관',lat:37.572193313464986, lng:126.98041277076777, cat: '중식',detail:"깔끔하고 담백한 스타일의 우육면!",imgSrc:"https://mp-seoul-image-production-s3.mangoplate.com/396519/128148_1591901107619_16075?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80"},
        {name:'서브웨이',lat:37.57045434486937, lng:126.98530902833701, cat: '양식',detail:"심심하면 ㄱㄱ",imgSrc:"https://www.subway.co.kr/images/utilization/img_store_order01.png"},
        {name:'산정집',lat:37.57233266002475, lng:126.97413304390197, cat: '한식',detail:"손말이고기 먹고 그 위에 된장찌개에 밥먹으면 끝",imgSrc:"http://weekly.chosun.com/up_fd/wc_news/2429/bimg_org/2429_94.jpg"},
        {name:'종로돈부리',lat:37.56887932977118, lng:126.98733452423102, cat: '일식',detail:"일식을 제대로 느끼고 싶다? 종로돈부리",imgSrc:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fr8Z18%2FbtqQXBa138I%2FEVgHlmxtGUii22GPj3ZiRK%2Fimg.jpg"},
        {name:'가쯔야',lat:37.567806263729665, lng:126.98163579816297, cat: '일식',detail:"멘찌까스가 먹고싶다면 이곳으로 가라",imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGGc2rcqMQAMVn3UwLFpjWnrQkrzJ-Yw6rQ&usqp=CAU"},
        {name:'방태막국수',lat:37.57360732946823, lng:126.98627882725752, cat: '한식',detail:"무더운 여름을 잠재울 시원한 막국수 고고",imgSrc:"https://lh3.googleusercontent.com/proxy/bGEBBQIce0pMYimhsiYuVo_V2jk-lbmy90bDlMwNcxzGHa8sPpIjZanAO01IC1HP5M732UbtO_0Hv4WcfK9kJdjD4V5l02ohYT3rqTKGlWtsfsoAhl5FZOW-"},
    ]

    const getStores = () => {
        return stores;
    }

    const getByCat = (str) => {

        if(!str) return stores;
        return stores.filter((store)=>store.cat===str);

    }

    return {getStores,getByCat}

}

export default storeService();