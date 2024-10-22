document.querySelectorAll('.imgbutt').forEach(button => {
    button.addEventListener('click', function(event) {
        const imageName = event.target.dataset.img; 
        const displayImg = document.getElementById('adressImg');
        displayImg.src = imageName; 
        const adress = document.getElementById('adress');
        adress.textContent = 'Адрес : adrss'
        const number = document.getElementById('number');
        number.textContent = 'Номер телефона 393894893894';
        const time = document.getElementById('time');
        time.textContent = 'Время работы 9.00 - 20.00'

    });
});



