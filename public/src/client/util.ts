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

/**
 * loads link navigation and router manager to current document loaded
 */
function linksLoader() {
    const links = Array.from(document.querySelectorAll('a.link'))
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault()

            let href = this.getAttribute('href')
            // @ts-ignore
            window.router.navigateTo(href)
        })
    })
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
}

/**
 * extract url parameter search queries
 * @param {string} param parameter to value value for
 */
function extractURLParam(param: string) {
    if (typeof param == undefined)
        throw new Error('Expected param to search but found none')
    let url = window.location.href
    if (url.indexOf('?') == -1)
        return 'Can\'t get search params'
    else {
        let u: string = url.split('?')[1], s, obj: any = {}
        if (u.indexOf('&') != -1) s = u.split('&')
        else s = u
        if (typeof s == "string")
            obj[s.split('=')[0].trim()] = s.split('=')[1]
        else
            s.map(p => obj[p.split('=')[0].trim()] = p.split('=')[1])
        if (typeof param != "undefined")
            return obj[param]
        else return obj
    }
}
function showSpinner() {
    let spinner = document.querySelector('.spinner-holder')
    spinner.classList.remove('d-none')
}
function hideSpinner() {
    let spinner = document.querySelector('.spinner-holder')
    setTimeout(() => {
        spinner.classList.add('d-none')
    }, 2000)
}
function showTopLoader() {
    let loader = document.querySelector('#color-top-loader')
    loader.classList.remove('d-none')
}
function hideTopLoader() {
    let loader = document.querySelector('#color-top-loader')
    setTimeout(() => {
        loader.classList.add('d-none')
    }, 2000)
}
function scriptLoader(script: string | Array<string>) {
    let d = document
    let scd = d.createElement('script'),
        sad = d.getElementsByTagName('script')[0]
    if (typeof script == "string") {
        scd.src = `/dist/client/${script}.js`
        scd.async = true
        scd.defer = true
        sad.parentNode.insertBefore(scd, sad)
    } else
        script.forEach(s => {
            let sr = d.createElement('script')
            sr.src = `/dist/client/${s}.js`
            sr.async = true
            sr.defer = true
            sad.parentNode.insertBefore(sr, sad)
        })
}
async function extractFormData(form: HTMLFormElement) {
    if (typeof form == 'undefined')
        throw new Error('Requires a form to iterate')
    else
        // @ts-ignore
        return Object.assign({}, ...Array.from(new FormData(form), ([v, k]) => ({ [v]: k.trim() })))

}