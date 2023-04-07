//Слайд фото, вместе с точками
const fieldLeft = document.querySelector('.card_field_left');
const fieldRight = document.querySelector('.card_field_right');

window.addEventListener('mouseover', function (e) {
    if (fieldRight.contains(e.target)) {
        document.getElementById('cardImagesOne').style.display = 'none';
        document.getElementById('cardImagesTwo').style.transform = 'translate3d(0%, 0px, 0px)'; 
        document.getElementById('cardPointOne').style.background = 'white'; 
        document.getElementById('cardPointTwo').style.background = 'black';
    } else {
        document.getElementById('cardImagesOne').style.display = 'block';
        document.getElementById('cardImagesTwo').style.transform = 'translate3d(0%, 0px, 0px)';
        document.getElementById('cardPointOne').style.background = 'black';
        document.getElementById('cardPointTwo').style.background = 'white';
    }
});

//Окно отзывов

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}



