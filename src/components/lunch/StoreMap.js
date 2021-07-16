import React, {useEffect} from 'react';
import storeService from "./storeService";
const {kakao} = window;
const style={
    width: '100%',
    height: '30vh',
}
const StoreMap = () => {
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.570392795979075, 126.98486361301279),
            level: 3
        };
        // 마커 이미지의 이미지 주소입니다
        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        const stores = storeService.getStores();
        const positions = stores.map(store=>{return {title:store.name, latlng : new kakao.maps.LatLng(store.lat,store.lng)}})
        const map = new kakao.maps.Map(container, options);
        for (let i = 0; i < positions.length; i ++) {

            // 마커 이미지의 이미지 크기 입니다
            const imageSize = new kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage // 마커 이미지
            });
            marker.setMap(map);
            // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
            const iwContent = `<div style="padding:5px;">${positions[i].title}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

            // 인포윈도우를 생성합니다
            const infowindow = new kakao.maps.InfoWindow({
                content : iwContent,
                removable : iwRemoveable
            });

            marker.origin = stores[i];

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커 위에 인포윈도우를 표시합니다
                infowindow.open(map, marker);
            });
        }
    }, [])
    return (
        <div>
            <div id='map'  style={style}></div>
        </div>
    );
};

export default StoreMap;