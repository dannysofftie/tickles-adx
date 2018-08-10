let signInRecaptcha = function () {
    let recaptcha = 'recaptcha'
    // @ts-ignore
    grecaptcha.render(recaptcha, {
        'sitekey': '6LdN1FEUAAAAAPoMc4b4A9pPFRC2E1GkA0Y3EOyi'
    })
};
let signUpRecaptcha = function () {
    let recaptcha = 'recaptcha2'
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
        d = document,
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
        app.innerHTML = await asyncRequest('/page-view')
        await linksLoader()
        hideSpinner()
    })

    router.add('/client', async () => {
        showSpinner()
        if (extractCookies(document.cookie, "SSID")) {
            router.navigateTo('/client/dashboard')
            window.location.reload()
        }
        app.innerHTML = await asyncRequest('/page-view/client')
        await linksLoader()
        hideSpinner()
    })

    router.add('client/signin', async () => {
        showSpinner()
        if (extractCookies(document.cookie, "SSID")) {
            router.navigateTo('/client/dashboard')
            window.location.reload()
        }
        app.innerHTML = await asyncRequest('/page-view/client/signin')
        await scriptLoader('client/captcha-auth')
        await linksLoader()
        hideSpinner()
    })

    router.add('client/signup', async () => {
        showSpinner()
        if (extractCookies(document.cookie, "SSID")) {
            router.navigateTo('/client/dashboard')
            window.location.reload()
        }
        app.innerHTML = await asyncRequest('/page-view/client/signup')
        await scriptLoader('client/captcha-auth')
        await linksLoader()
        hideSpinner()
    })

    router.add('client/logout', async () => {
        showSpinner()
        let allCookies = extractCookies(document.cookie)
        for (const cookie in JSON.parse(allCookies)) {
            document.cookie = cookie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/client;'
        }
        router.navigateTo('/client')
        window.location.reload()
        hideSpinner()
    })

    router.add('/client/dashboard', async () => {
        showSpinner()
        if (! await extractCookies(document.cookie, "SSID")) {
            router.navigateTo('/client')
            window.location.reload()
        }
        app.innerHTML = await asyncRequest('/page-view/client/dashboard')
        await scriptLoader('client/chart-data')
        await linksLoader()
        hideSpinner()
    })

    router.add('/client/dashboard/create-campaign', async () => {
        showSpinner()
        app.innerHTML = await asyncRequest('/page-view/client/create-campaign')
        await scriptLoader('client/create-campaign')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })

    router.add('/client/dashboard/manage-campaign', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/page-view/client/manage-campaign')
        await scriptLoader('client/manage-campaigns')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })
    router.add('/client/dashboard/campaign-statistics', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/page-view/client/campaign-statistics')
        await scriptLoader('client/campaign-statistics')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })
    router.add('/client/dashboard/payment-wallet', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/page-view/client/payment-wallet')
        await scriptLoader('client/payment-wallet')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })
    router.add('/client/dashboard/referral-program', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/page-view/client/referral-program')
        // await scriptLoader('create-campaign')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })

    router.add('/publisher', async () => {
        showSpinner()
        app.innerHTML = await asyncRequest('/page-view/publisher')
        await linksLoader()
        hideSpinner()
    })

    router.add('/publisher/signup', async () => {
        showSpinner()
        app.innerHTML = await asyncRequest('/page-view/publisher/signup')
        await scriptLoader('publisher/signup')
        await linksLoader()
        hideSpinner()
    })

    router.add('/publisher/dashboard', async () => {
        showSpinner()
        app.innerHTML = await asyncRequest('/page-view/publisher/dashboard')
        await scriptLoader('publisher/dashboard')
        await linksLoader()
        hideSpinner()
    })

    router.add('/publisher/logout', async () => {
        showSpinner()
        let allCookies = extractCookies(document.cookie)
        await (async () => {
            for (const cookie in JSON.parse(allCookies)) {
                document.cookie = cookie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/publisher;'
            }
        })()
        router.navigateTo('/publisher')
        window.location.reload()
        hideSpinner()
    })
    router.navigateTo(window.location.pathname)

    // @ts-ignore
    window.router = router
})