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
        if (extractCookies(document.cookie, "SSID")) {
            router.navigateTo('/client/dashboard')
            window.location.reload()
        }
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
        await scriptLoader('captcha-auth')
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
        await scriptLoader('captcha-auth')
        await linksLoader()
        hideSpinner()
    })

    router.add('client/logout', async () => {
        showSpinner()
        let allCookies = extractCookies(document.cookie)
        for (const cookie in JSON.parse(allCookies)) {
            document.cookie = cookie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        }
        router.navigateTo('/client')
        window.location.reload()
        hideSpinner()
    })

    router.add('/client/dashboard', async () => {
        showSpinner()
        if (!extractCookies(document.cookie, "SSID")) {
            router.navigateTo('/client')
            window.location.reload()
        }
        app.innerHTML = await asyncRequest('/page-view/client/dashboard')
        // ['chart-data', 'create-campaign', 'dash-home']
        await scriptLoader('chart-data')
        await linksLoader()
        hideSpinner()
    })

    router.add('/client/dashboard/create-campaign', async () => {
        showSpinner()
        app.innerHTML = await asyncRequest('/page-view/client/create-campaign')
        await scriptLoader('create-campaign')
        let g = document.createElement('script'),
            s = Array.from(document.getElementsByTagName('script'))
        g.async = true
        g.defer = true
        g.type = 'text/javascript'
        g.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBs-9K2aygiKd_2bXjhgnltqE-LW8FgRLc&callback=initMap"
        s.forEach(sc => sc.src == g.src ? sc.parentNode.removeChild(sc) : sc.parentNode.insertBefore(g, sc))
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })

    router.add('/client/dashboard/manage-campaign', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/page-view/client/manage-campaign')
        // await scriptLoader('create-campaign')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })
    router.add('/client/dashboard/campaign-statistics', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/page-view/client/campaign-statistics')
        // await scriptLoader('create-campaign')
        await linksLoader()
        hideTopLoader()
        hideSpinner()
    })
    router.add('/client/dashboard/payment-wallet', async () => {
        showTopLoader()
        app.innerHTML = await asyncRequest('/page-view/client/payment-wallet')
        // await scriptLoader('create-campaign')
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

    router.navigateTo(window.location.pathname)

    // @ts-ignore
    window.router = router
})