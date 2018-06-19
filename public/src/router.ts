let onloadCallback = function () {
    let recaptcha = 'recaptcha'
    // @ts-ignore
    grecaptcha.render(recaptcha, {
        'sitekey': '6LdN1FEUAAAAAPoMc4b4A9pPFRC2E1GkA0Y3EOyi'
    })
};


((f) => {
    if (typeof module == 'undefined') {
        document.addEventListener('DOMContentLoaded', () => {
            f(document, window)
        })
    }
    else
        throw new Error('Cannot run in Node environment')
})(async (document: Document, window: Window) => {

    let app: HTMLElement = document.getElementById('app'),
        error404 = await asyncRequest('/error404'),
        // @ts-ignore
        router = new Router({
            mode: 'history',
            page404: (path) => {
                app.innerHTML = '/' + path + ' not found on this server'
            },
        })

    router.add('/', async () => {
        showSpinner()
        app.innerHTML = await asyncRequest('/client-router')
        await linksLoader()
        hideSpinner()
    })

    router.add('/client', async () => {
        showSpinner()
        app.innerHTML = await asyncRequest('/client-router/client')
        await scriptLoader('captcha-auth')
        await linksLoader()
        hideSpinner()
    })

    router.add('/client/dashboard', async () => {
        showSpinner()
        app.innerHTML = await asyncRequest('/client-router/client/dashboard')
        // ['chart-data', 'create-campaign', 'dash-home']
        await scriptLoader(['chart-data', 'dash-home'])
        await linksLoader()
        hideSpinner()
    })

    router.add('/client/dashboard/create-campaign', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/client-router/client/create-campaign')
        await scriptLoader('create-campaign')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })

    router.add('/client/dashboard/manage-campaign', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/client-router/client/manage-campaign')
        await scriptLoader('create-campaign')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })
    router.add('/client/dashboard/campaign-statistics', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/client-router/client/campaign-statistics')
        await scriptLoader('create-campaign')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })
    router.add('/client/dashboard/payment-wallet', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/client-router/client/payment-wallet')
        await scriptLoader('create-campaign')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })
    router.add('/client/dashboard/referral-program', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/client-router/client/referral-program')
        await scriptLoader('create-campaign')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })

    router.navigateTo(window.location.pathname)

    // @ts-ignore
    window.router = router
})