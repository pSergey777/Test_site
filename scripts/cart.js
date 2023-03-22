// Корзина

// Открытие, закрытие
document.querySelector('#cart_btn').onclick = function() {
    vis = document.getElementById('cart_window').style.display;
    if (vis == 'block') {
        document.getElementById('cart_window').style.display = 'none';
    } else {
        document.getElementById('cart_window').style.display = 'block';  
    }   
};
// Закрытие на крестик
document.getElementById('cart_btn_close').onclick = () => {
    document.getElementById('cart_window').style.display = 'none';
};
// Закрыти по клику вне окна
    window.addEventListener('click', function (e) {
        if (!cart_window.contains(e.target) && !cart_btn.contains(e.target)) {
            cart_window.style.display = 'none';
        }
    });

 



