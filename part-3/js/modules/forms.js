function forms() {
    // forms 

const forms = document.querySelectorAll('form');

const message = {
    success: 'Спасибо! Мы скоро с вами свяжемся!',
    loading: 'img/forms/spinner.svg',
    fail: 'Произошла ошибка'
};


forms.forEach(item => {
    bindPostData(item);
});

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;

        form.insertAdjacentElement('afterend', statusMessage);

        // const request = new XMLHttpRequest();
        // request.open('POST', 'server.php');
        
        // request.setRequestHeader('Content-type', 'application/json');
        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));


        // const json = JSON.stringify(object);

        postData('http://localhost:3000/requests', json)
        .then(data => {
            console.log(data);
            showThanksModal(message.success);
            form.reset();
            statusMessage.remove();
        }).catch(() => {
            showThanksModal(message.fail);
        }).finally(() => {
            form.reset();
        });

        // request.addEventListener('load', () => {
        //     if (request.status === 200) {
        //         console.log(request.response);
        //         showThanksModal(message.success);
        //         form.reset();
        //         statusMessage.remove();
        //     } else {
        //         showThanksModal(message.fail);
        //     }
        // });
    });
}

function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
    <div class="modal__content">
        <div class="modal__close" data-close>×</div>
        <div class="modal__title">${message}</div>
    </div>`;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.add('hide');
        closeModal();
    }, 4000);
}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify({name: 'Alex'}),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
}

module.exports = forms;