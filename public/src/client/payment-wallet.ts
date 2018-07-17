((f) => {
    if (typeof module == 'undefined') {
        f(document, window)
    }
    else
        throw new Error('Unsupported environment')
})(async (document: Document, window: Window) => {
    let paypalCheckout: HTMLFormElement = document.forms['paypal-checkout']
    paypalCheckout.addEventListener('submit', async function (e) {
        e.preventDefault()
        let paypalResult = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/checkout/paypal', await extractFormData(this))
        if (paypalResult['message'] == 'success')
            window.location.href = paypalResult['url']
    })
})