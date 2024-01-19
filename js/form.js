const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const grecres = grecaptcha.getResponse();

    if (!grecres.length > 0) {
        let ele = document.getElementById('recaptcha_error');
        ele.innerHTML += 'Пройдите проверку';
        throw new Error("captcha")
        
    }

    if (grecres.length) {
        const fb = new FormData(e.target);
        const params = new URLSearchParams(fb);

        fetch('telegram.php/post', {
            method: "POST",
            body: params
        }) 

        document.location.href = 'https://webmonsters.kz/thank-you.html'
    }
});

IMask(
    document.getElementById('phone-mask'),
    {
      mask: '+{7}(000)000-00-00'
    }
  )