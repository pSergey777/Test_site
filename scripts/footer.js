const btnMap = document.querySelector('.btn_map');
const map = document.querySelector('.map');

document.querySelector('.btn_map').onclick = function() {
    vis = document.querySelector('.map').style.visibility;
    if (vis == 'visible') {
        document.querySelector('.map').style.visibility = 'hidden';
    } else {
        document.querySelector('.map').style.visibility = 'visible';  
    }   
};
window.addEventListener('click', function (e) {  
    if (!map.contains(e.target) && !btnMap.contains(e.target)) {
        map.style.visibility = 'hidden';
    }
});