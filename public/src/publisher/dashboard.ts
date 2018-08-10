(function(f) {
    if (typeof module != 'undefined')
        throw new Error('Should not run in Node environment!')
    f()
})(async function() {
    let checkStatus = document.getElementById('checkStatus')
    checkStatus.addEventListener('click', function(e) {
        e.preventDefault()
        window.location.reload()
    })

    let verifyPaypal: HTMLFormElement = document.forms['verifyPaypal']
    verifyPaypal.addEventListener('submit', async function(e) {
        e.preventDefault()
        let verificationStatus = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/auth/verifyPaypal', await extractFormData(this)),
            btn: HTMLButtonElement = verifyPaypal.querySelector('button[type="submit"]')
        if (verificationStatus['error'] == 'password-error') {
            btn.innerHTML = `<span>Wrong password</span>`
            setTimeout(() => {
                btn.innerHTML = `<span>Confirm account <span class="mdi mdi-paypal"></span></span>`
            }, 3000)
        } else if (verificationStatus['message'] == 'success') {
            btn.innerHTML = `<span>Account confirmed</span>`
            btn.disabled = true
        }
    })
})