
    let offset = 0; // смещение от левого края;
    const sliderLine = document.querySelector('.slider-line');
    let alertError = document.querySelector('.error');
    let inputEmail = document.querySelector('.input-email');
    let formInputs = document.querySelectorAll('.js-input');
    
    document.querySelector('.arrow-left-btn').addEventListener('click', function() {
        offset = offset + 750;
        if (offset > 2000) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    })

    document.querySelector('.arrow-right-btn').addEventListener('click', function() {
        offset = offset - 750;
            if (offset < 0) {
                offset = 1500;
            }
            sliderLine.style.left = -offset + 'px';
    })

    alertError.addEventListener('click', function () {
        alert('Ошибка - это повод хорошо подумать:)')
    })

    // выпадающий список
    const listBtnMenu = document.querySelectorAll('.sub-heading');
    const list = document.querySelectorAll('.experience');

    listBtnMenu[0].addEventListener('click', () => {
        list[0].classList.toggle('block-none')
    })
    
    listBtnMenu[1].addEventListener('click', () => {
        list[1].classList.toggle('block-none')
    })

    function hiddenCloseclick() {
        let x = document.getElementById('hidden-element');
            if (x.style.display == "none"){
                x.style.display = "block";
            } else {
                x.style.display = "none"}
    };

    const TOKEN = "5596693553:AAFqaBrdRceNWcEJm4SsF7JRAQNPPvyeKCg"
    const CHAT_ID = "-1001613023416"
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    document.getElementById('form').addEventListener('submit', function (e) {

        e.preventDefault()

            let message = `<b>Предложение сотрудничества</b>\n`
                message += `<b>Почта: </b> ${this.email.value}`

            axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mode: "html",
                text: message
            })

            .then((res) => {
                this.email.value = ''
            })

            .catch((err) => {
                console.warn(err)
            })

            .finally(() => {
                alert('Почта отправлена, ждите ответа на вашу почту!')
                console.log('Сообщение доставлено');
            })
    })


    