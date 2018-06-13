((f) => {
    if (typeof module == 'undefined') {
        document.addEventListener('DOMContentLoaded', () => {
            f(document, window)
        })
    }
    else
        throw new Error('Cannot run in Node environment')
})((document: Document, window: Window) => {

    /**
     * pass an element to find if it's visible on the browser window
     * @param {HTMLElement} el element to check it's visibility in browser window
     */
    function isElementInViewport(el: HTMLElement) {
        var rect = el.getBoundingClientRect()
        return rect.bottom > 0 &&
            rect.right > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight)
    }

    /**
     * Top level ajax function for GET and POST requests
    * @param {string} url server url to send/request data
    * @param {Array.<string>|{}} body optional data to send to server `always in json`
    */
    async function r(url: string, body: any) {
        if (typeof url == 'undefined' || typeof url != 'string')
            throw new Error('Expected a url but found none!')
        if (typeof body == 'undefined')
            return await fetch(url).then(res => res.json()).catch(err => err)
        else
            return await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': body.length
                },
                body: JSON.stringify(body)
            }).then(res => res.json()).catch(err => err)
    }

    // listen for scroll event
    document.addEventListener('scroll', () => {
        let ref: HTMLElement = document.querySelector('.client-details-box')

        if (!isElementInViewport(document.querySelector('.top-navigation'))) {
            Object.assign(ref.style, {
                'box-shadow': '0px 4px 5px 0px rgba(0, 0, 0, 0.3)',
                'padding': '15px 22px'
            })
        } else
            Object.assign(ref.style, {
                'box-shadow': '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
                'padding': '9px 16px'
            })
    })

    // manage dashboard naviagations
    let navs: Array<Element> = Array.from(document.querySelectorAll('.nav-options'))
    navs.forEach(nav => {
        nav.addEventListener('click', function () {
            // @ts-ignore
            let id = this.getAttribute('id')

            navs.forEach(n => {
                n.classList.remove('nav-active')
            })
            // @ts-ignore
            this.classList.add('nav-active')

        })
    })

    // data-overview charts
    let ctx: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('data-overview')
    ctx
})