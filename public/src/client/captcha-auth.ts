let d = document;

(function (f) {
    if (typeof module == 'undefined')
        f()
    else
        throw new Error('Node environment not supported')
})(function () {

    // google recaptcha and advertiser authentication
    // sign-up and sign-in handler
    let sc = d.createElement('script'),
        sa = d.getElementsByTagName('script')[0]
    sc.src = "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    sc.async = true
    sc.defer = true
    sa.parentNode.insertBefore(sc, sa)

    let [sin, sup, sint, supt] = [d.getElementById('signin'), d.getElementById('signup'), d.querySelector('.sign-up-form'), d.querySelector('.sign-in-form')]
    sin.addEventListener('click', function (e) {
        supt.classList.remove('d-none')
        sint.classList.add('d-none')
    })
    sup.addEventListener('click', function (e) {
        sint.classList.remove('d-none')
        supt.classList.add('d-none')
    })

    // client sign-in form handler
    let signInForm: HTMLFormElement = d.forms['signinform']
    signInForm.addEventListener('submit', async function (e) {
        e.preventDefault()
        let btn: HTMLButtonElement = document.querySelector('button#submitbutton')
        btn.innerHTML = `<span>Loading ... </span><span class="mdi mdi-loading mdi-spin"></span>`
        btn.disabled = true
        // @ts-ignore
        let signInData = await extractFormData(signInForm),
            result = await asyncRequest('/api/client/client-login', signInData).catch(err => err)
        if (result.message == 'success') {
            // @ts-ignore
            window.router.navigateTo('/client/dashboard')
        }
    })
})