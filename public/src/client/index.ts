var d = document,
    onloadCallback = function () {
        var recaptcha = 'recaptcha'
        if (i(d.getElementById('recaptcha2')))
            recaptcha = 'recaptcha2'
        // @ts-ignore
        grecaptcha.render(recaptcha, {
            'sitekey': '6LdN1FEUAAAAAPoMc4b4A9pPFRC2E1GkA0Y3EOyi'
        })
    }

/**
 * Reveals elem's visibility within DOM
 * @param {HTMLElement} elem 
 */
function i(elem: HTMLElement) {
    let e = elem.getBoundingClientRect()
    return e.bottom > 0 && e.top > 0 && e.left > 0 && e.right > 0
}

/**
 * Top level ajax function for GET and POST requests
 * @param {string} url server url to send/request data
 * @param {Array.<string>|{}} body optional data to send to server `always in json`
 */
async function r(url: string, body: Array<string> | {}) {
    if (typeof url == 'undefined' || typeof url != 'string')
        throw new Error('Expected a url but found none!')
    if (typeof body == 'undefined')
        return await fetch(url).then(res => res.json()).catch(err => err)
    else
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).catch(err => err)
}

(function (f) {
    if (typeof module == 'undefined')
        f()
    else
        throw new Error('Node environment not supported')
})(function () {

    // DOM loaded, execute
    d.addEventListener('DOMContentLoaded', function () {
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

        // sign up form
        d.getElementById('signupform').addEventListener('submit', async function (e) {
            e.preventDefault()
            // @ts-ignore
            let adData = { ...Array.from(new FormData(this), ([v, k]) => ({ [v]: k.trim() })) },
                result = await r('/client/signup', adData).catch(err => err)

            console.log(result)
        })
    })
})