(function (f) {
    if (typeof module != 'undefined')
        throw new Error('Should not run in Node environment!')
    f()
})(function () {
    let pubForm: HTMLFormElement = document.forms['publisherSignUp'],
        urlElement: HTMLInputElement = pubForm.querySelector('input[name="publisherWebsite"]')

    let api = 'http://127.0.0.1:5000'
    if (!window.location.origin.includes('127.0.0.1'))
        api = 'https://adxserver.herokuapp.com'

    urlElement.addEventListener('blur', async function (e) {
        document.getElementById('verificationStatus').innerHTML = '<span class="text-info">Verifying url ...<span class="mdi mdi-loading mdi-spin"></span></span>'
        let verificationStatus = await asyncRequest(api + '/api/v1/data/validate-url', { url: this.value })
        if (verificationStatus['status'] == true)
            document.getElementById('verificationStatus').innerHTML = '<span class="text-success">Url has been approved</span>'
        else
            document.getElementById('verificationStatus').innerHTML = '<small class="text-danger">Url verification failed. Ensure url exists and does not contain http:// or https://</small>'
    })

    pubForm.addEventListener('submit', async function (e) {
        e.preventDefault()
        let pubData = await extractFormData(this),
            btn: HTMLButtonElement = this.querySelector('button[type="submit"]')
        btn.disabled = true
        btn.innerHTML = `<span>Processing ... &nbsp; <span class="mdi mdi-loading mdi-spin"></span></span>`
        let signUpStatus = await asyncRequest('/api/publisher/signup', pubData)
        if (!signUpStatus['signupStatus']) {
            btn.innerHTML = `<span> Account exists &nbsp; <span class="mdi mdi-alert"></span></span>`
            setTimeout(() => {
                btn.innerHTML = `<span> Sign up &nbsp; <span class="mdi mdi-arrow-right-bold-circle-outline"></span></span>`
                btn.disabled = false
            }, 3000)
            return
        }
        btn.innerHTML = `<span> Successfully registered &nbsp; <span class="mdi mdi-emoticon-happy"></span></span>`
        document.getElementById('successSignUp').classList.remove('d-none')
    })

    Array.from(document.querySelectorAll('.signinToggle')).forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('signUpForm').classList.add('d-none')
            document.getElementById('signInForm').classList.remove('d-none')
        })
    })

    let publisherSignIn: HTMLFormElement = document.forms['publisherSignIn']
    publisherSignIn.addEventListener('submit', async function (e) {
        e.preventDefault()
        let loginData = await extractFormData(this),
            btn: HTMLButtonElement = this.querySelector('button[type="submit"]')
        btn.innerHTML = `<span>Processing ... &nbsp; <span class="mdi mdi-loading mdi-spin"></span></span>`
        let loginStatus = await asyncRequest('/api/publisher/signin', loginData)
        if (!loginStatus['loginStatus']) {
            btn.innerHTML = `<span> Wrong credentials &nbsp; <span class="mdi mdi-alert"></span></span>`
            setTimeout(() => {
                btn.innerHTML = `<span> Sign up &nbsp; <span class="mdi mdi-arrow-right-bold-circle-outline"></span></span>`
                btn.disabled = false
            }, 3000)
            return
        }
        // redirect
        btn.innerHTML = `<span>Redirecting .... &nbsp; <span class="mdi mdi-loading mdi-spin"></span></span>`
        setTimeout(() => {
            // @ts-ignore
            window.router.navigateTo('/publisher/dashboard')
        }, 5000)
    })
})