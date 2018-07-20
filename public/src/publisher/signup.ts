(function (f) {
    if (typeof module != 'undefined')
        throw new Error('Should not run in Node environment!')
    f()
})(function () {
    let pubForm: HTMLFormElement = document.forms['publisherSignUp'],
        websiteUrl: HTMLInputElement = pubForm.querySelector('input[name="publisherWebsite"]')

    let api = 'http://127.0.0.1:5000'
    if (!window.location.origin.includes('127.0.0.1'))
        api = 'https://adxserver.herokuapp.com'

    websiteUrl.addEventListener('blur', async function (e) {
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
            signUpStatus = await asyncRequest('/api/publisher/signup', pubData)

        console.log(pubData)
    })
})