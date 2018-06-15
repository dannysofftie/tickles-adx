
/**
   * Top level ajax function for GET and POST requests
  * @param {string} url server url to send/request data
  * @param {Array.<string>|{}} body optional data to send to server `always in json`
  */
async function asyncRequest(url: string, body?: {} | any) {
    if (typeof url == 'undefined' || typeof url != 'string')
        throw new Error('Expected a url but found none!')
    if (typeof body == 'undefined')
        return await fetch(url, { method: 'GET', credentials: 'include' }).then(res => {
            if (res.headers.get('Content-Type').indexOf('text/html') != -1)
                return res.text()
            if (res.headers.get('Content-Type').indexOf('application/json') != -1)
                return res.json()
            else return undefined
        })
    else
        return await fetch(url, {
            method: 'POST', credentials: 'include', headers: {
                'Content-Type': 'application/json',
                'Content-Length': body.length
            }, body: JSON.stringify(body)
        }).then(res => res.json()).catch(err => err)
}


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


((f) => {
    if (typeof module == 'undefined') {
        document.addEventListener('DOMContentLoaded', () => {
            f(document, window)
        })
    }
    else
        throw new Error('Cannot run in Node environment')
})((document: Document, window: Window) => {

    let loader = document.getElementById('color-top-loader')
    // @ts-ignore
    window.loader = loader


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
            loader.classList.remove('d-none')
            // @ts-ignore
            let id = this.getAttribute('id')
            navs.forEach(n => {
                n.classList.remove('nav-active')
            })
            // @ts-ignore
            this.classList.add('nav-active')
            // pass id of the clicked tab to function changeContent(id:string){ }
            changeContent(id)
        })
    })

    // change content in dashboard
    async function changeContent(url: string) {
        let contentHolder = document.querySelector('.dashboard-content'),
            rootUrl: string = '/client/adv/dashboard/?url='
        history.replaceState(null, null, '?url=' + url)

        let data = await asyncRequest(rootUrl + url)
        contentHolder.innerHTML = data
        setTimeout(() => {
            loader.classList.add('d-none')
        }, 1000)
    }
})

