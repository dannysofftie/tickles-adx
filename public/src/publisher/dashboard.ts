// function autoCompletePlaces() {
//     let input = document.getElementById('testPlaces')
//     // @ts-ignore
//     new google.maps.places.Autocomplete(input)
// }

(function (f) {
    if (typeof module != 'undefined')
        throw new Error('Should not run in Node environment!')
    f()
})(async function () {
    // let s = document.createElement('script'),
    //     sd = document.getElementsByTagName('script')[0]
    // s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCR2dBMc-H2Q6aX-3Mcavm4MiXzOH85zMU&libraries=places&callback=autoCompletePlaces'
    // sd.parentNode.insertBefore(s, sd)


    let checkStatus = document.getElementById('checkStatus')

    if (checkStatus) {
        checkStatus.addEventListener('click', function (e) {
            e.preventDefault()
            window.location.reload()
        })
    }

    let verifyPaypal: HTMLFormElement = document.forms['verifyPaypal']
    if (verifyPaypal) {
        verifyPaypal.addEventListener('submit', async function (e) {
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
    }

    let pubSiteData = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/publisherData')
    console.log(pubSiteData)

})