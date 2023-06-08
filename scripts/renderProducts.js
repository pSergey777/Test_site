const productsContainer = document.getElementById('products')


async function getProducts () {
    const response = await fetch('./scripts/products.json');

    const productsArray = await response.json();

    renderProducts(productsArray);
 
};

// export default getProducts;

getProducts();



 function renderProducts(productsArray) {

    productsArray.forEach((item) => {
      const productHTML = `
        // <div class="card" data-id= "${item.id}">                        
        <div class="top_card">
            <div class="setting_card_images">
                <div class="card_images">
                    <img src= ${item.imgOne} alt="iphone 1" id="cardImagesOne" style="left: 0;">
                    <img src= ${item.imgTwo} alt="iphone 1 right" id="cardImagesTwo">
                </div>
                <div class="card_fields">
                    <div class="card_field_left"></div>
                    <div class="card_field_right"></div>
                </div>
                <!-- <button id="btn_phono">Быстрый просмотр</button> -->
            </div>
            <div class="card_points">
                <div class="card_point" id="cardPointOne"></div>
                <div class="card_point" id="cardPointTwo"></div>
            </div>
        </div>
        <div class="bottom_card">
               <div class="raiting">
                <div class="stars">                            
                            <div class="rating-wrapper">
                              
                              <!-- star 5 -->
                              <input type="radio" id="5-star-rating" name="star-rating" value="5">
                              <label for="5-star-rating" class="star-rating">
                                <i class="fas fa-star d-inline-block"></i>
                              </label>
                              
                               <!-- star 4 -->
                              <input type="radio" id="4-star-rating" name="star-rating" value="4">
                              <label for="4-star-rating" class="star-rating star">
                                <i class="fas fa-star d-inline-block"></i>
                              </label>
                              
                               <!-- star 3 -->
                              <input type="radio" id="3-star-rating" name="star-rating" value="3">
                              <label for="3-star-rating" class="star-rating star">
                                <i class="fas fa-star d-inline-block"></i>
                              </label>
                              
                              <!-- star 2 -->
                              <input type="radio" id="2-star-rating" name="star-rating" value="2">
                              <label for="2-star-rating" class="star-rating star">
                                <i class="fas fa-star d-inline-block"></i>
                              </label>
                              
                              <!-- star 1 -->
                              <input type="radio" id="1-star-rating" name="star-rating" value="1">
                              <label for="1-star-rating" class="star-rating star">
                                <i class="fas fa-star d-inline-block"></i>
                              </label>

                            </div>    
                </div>
                <div class="feedback">
                    <button type="button" class="btn btn_feedback" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="pSergey777@mail.ru">
                        <i class="fa-regular fa-comment fa-shake" style="color: black;"></i>Отзывы</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Ваш отзыв крайне важен для нас</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Ваша почта:</label>
                                        <input type="text" class="form-control" id="recipient-name">
                                    </div>
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Ваш отзыв:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Send message</button>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
                <h5 class="card_name">${item.title}</h5>
                <div class="card_cart">
                    <div class="price">
                        <p class="availability">В наличии: ${item.availability} <span>шт</span></p>  
                        <h5 class="price_count">Цена: ${item.price} <span>₽</span></h5>  
                    </div>
                    <div class="btn_card">
                        <button class="add_btn_favourites"><i class="fa-regular fa-bookmark fa-flip fa-xs" style="color: black;"></i></i></button>
                        <button class="add_btn_card"><i class="fa-sharp fa-solid fa-cart-plus fa-bounce" style="color: black;"></i></button>
                    </div>
               </div>
        </div>
    </div>
        `;

    productsContainer.insertAdjacentHTML('beforeend', productHTML);
    // document.querySelector('.cards').innerHTML = productHTML;
    // productsContainer.innerHTML = productHTML;        
    });
    
};




