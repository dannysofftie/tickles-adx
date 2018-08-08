((f) => {
    if (typeof module == 'undefined') {
        f(document, window)
    }
    else
        throw new Error('Unsupported environment')
})(async (document: Document, window: Window) => {
    let paypalCheckout: HTMLFormElement = document.forms['paypal-checkout']
    paypalCheckout.addEventListener('submit', async function (e) {
        const btn: HTMLButtonElement = paypalCheckout.querySelector('button[type="submit"]')
        btn.disabled = true
        btn.innerHTML = `<span>Processing &nbsp; <span class="mdi mdi-loading mdi-spin"></span></span>`
        e.preventDefault()
        let paypalResult = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/checkout/paypal', await extractFormData(this))
        if (paypalResult['message'] == 'success')
            window.location.href = paypalResult['url']
    })
})