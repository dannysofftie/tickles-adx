let d = document;

(function (f) {
    if (typeof module == 'undefined')
        f()
    else
        throw new Error('Node environment not supported')
})(async function () {
    // client sign-in form handler
    let signInForm: HTMLFormElement = d.forms['signinform']
    if (typeof signInForm != 'undefined') {
        let sc = d.createElement('script'),
            sa = d.getElementsByTagName('script')[0]
        sc.src = "https://www.google.com/recaptcha/api.js?onload=signInRecaptcha&render=explicit"
        sc.async = true
        sc.defer = true
        sa.parentNode.insertBefore(sc, sa)

        signInForm.addEventListener('submit', async function (e) {
            e.preventDefault()
            let submitButton: HTMLButtonElement = this.querySelector('button[type="submit"]'),
                notify: HTMLSpanElement = d.getElementById('notifystatus')
            submitButton.innerHTML = `<span>Loading ... </span><span class="mdi mdi-flattr mdi-spin"></span>`
            submitButton.disabled = true
            // @ts-ignore
            let signInData = await extractFormData(signInForm),
                result = await asyncRequest('/api/client/client-login', signInData)

            if (result.error == 'NOT_FOUND') {
                notify.innerText = 'Email provided not registered'
                notify.classList.remove('d-none')
                submitButton.disabled = false
                submitButton.innerHTML = `<span> Sign in &nbsp; <span class="mdi mdi-play-circle"></span></span>`
            } else if (result.error == 'WRONG_PASS') {
                notify.innerText = 'Wrong password'
                notify.classList.remove('d-none')
                submitButton.disabled = false
                submitButton.innerHTML = `<span> Sign in &nbsp; <span class="mdi mdi-play-circle"></span></span>`
            } else if (result.error == 'captcha_error') {
                notify.innerText = 'Verify captcha to continue'
                notify.classList.remove('d-none')
                submitButton.disabled = false
                submitButton.innerHTML = `<span> Sign in &nbsp; <span class="mdi mdi-play-circle"></span></span>`
            } else {
                // @ts-ignore
                window.router.navigateTo('/client/dashboard')
            }
        })
    }

    let signUpForm: HTMLFormElement = d.forms['signupform']
    if (typeof signUpForm != 'undefined') {
        let sc = d.createElement('script'),
            sa = d.getElementsByTagName('script')[0]
        sc.src = "https://www.google.com/recaptcha/api.js?onload=signUpRecaptcha&render=explicit"
        sc.async = true
        sc.defer = true
        sa.parentNode.insertBefore(sc, sa)

        let businessCategories = await fetch('/api/client/business-group-categories').then(res => res.json()),
            selectOption: HTMLSelectElement = document.querySelector('select[name="businessgrouptarget"]')
        for (const field of businessCategories) {
            // @ts-ignore
            selectOption.append(new Option(field.businessName, field._id))
        }
        // @ts-ignore
        $('.business-target').selectpicker()

        signUpForm.addEventListener('submit', async function (e) {
            e.preventDefault()
            let submitButton: HTMLButtonElement = this.querySelector('button[type="submit"]')
            submitButton.innerHTML = `<span>Processing &nbsp; <span class="mdi mdi-flattr mdi-spin"></span></span>`
            submitButton.disabled = true
            let signUpData = await extractFormData(this),
                signUpResult = await asyncRequest('/api/client/client-signup', signUpData),
                notify: HTMLSpanElement = document.getElementById('notify')
            if (signUpResult.error == 'EMAIL_EXISTS') {
                notify.innerText = 'Email provided has been taken'
                notify.classList.remove('d-none')
                submitButton.disabled = false
                submitButton.innerHTML = `<span>Register &nbsp; <span class="mdimdi-play-circle"></span></span>`
            } else if (signUpResult.error == 'captcha_error') {
                notify.innerText = 'Verify captcha to proceed'
                notify.classList.remove('d-none')
                submitButton.disabled = false
                submitButton.innerHTML = `<span>Register &nbsp; <span class="mdimdi-play-circle"></span></span>`
            } else {
                notify.innerText = 'Successfull, check your email to verify registration '
                notify.classList.remove('d-none', 'alert-danger')
                notify.classList.add('alert-success')
                submitButton.disabled = true
                submitButton.classList.remove('btn-info')
                submitButton.classList.add('btn-success')
                submitButton.innerHTML = `<span>Successfully registered &nbsp;</span>`
                // @ts-ignore
                setTimeout(() => { window.router.navigateTo('/client/signin') }, 4000)
            }
        })
    }
})