// Корзина ---------------------------------------------------

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

// количество товара ----------------------------------------

// Убавляем кол-во по клику
document.querySelectorAll('.quantity_inner .bt_minus').forEach(function (element) {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		let input = this.parentElement.querySelector('.quantity');
		let count = parseInt(input.value) - 1;
		count = count < 1 ? 1 : count;
		input.value = count;
	});
});

// Прибавляем кол-во по клику
document.querySelectorAll('.quantity_inner .bt_plus').forEach(function (element) {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		let input = this.parentElement.querySelector('.quantity');
		let count = parseInt(input.value) + 1;
		count = count > parseInt(input.dataset.maxCount) ? parseInt(input.dataset.maxCount) : count;
		input.value = parseInt(count);
	});
});

// Убираем все лишнее и невозможное при изменении поля
document.querySelectorAll('.quantity_inner .quantity').forEach(function (element) {
	element.addEventListener("change", function(event) {
		event.preventDefault();
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
		if (this.value == "") {
			this.value = 1;
		}
		if (this.value > parseInt(this.dataset.maxCount)) {
			this.value = parseInt(this.dataset.maxCount);
		}
	});
});



 



