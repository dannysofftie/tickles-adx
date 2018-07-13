function showSpinner() {
    let spinner = document.querySelector('.spinner-holder')
    spinner.classList.remove('d-none')
}
function hideSpinner() {
    let spinner = document.querySelector('.spinner-holder')
    setTimeout(() => {
        spinner.classList.add('d-none')
    }, 500)
}
function showTopLoader() {
    let loader = document.querySelector('#color-top-loader')
    loader.classList.remove('d-none')
}
function hideTopLoader() {
    let loader = document.querySelector('#color-top-loader')
    setTimeout(() => {
        loader.classList.add('d-none')
    }, 1000)
}

/**
   * Top level ajax function for GET and POST requests
  * @param {string} url server url to send/request data
  * @param {Array.<string>|{}} body optional data to send to server `always in json`
  * @param {string} ifForm Content-Type to include in headers
  */
async function asyncRequest(url: string, body?: {} | any, multipart?: boolean) {
    if (typeof url == 'undefined' || typeof url != 'string')
        throw new Error('Expected a url but found none!')
    if (typeof body == 'undefined')
        return await fetch(url, {
            method: 'GET', credentials: 'same-origin', headers: {
                'Client-Ssid': extractCookies(document.cookie, 'SSID')
            }
        }).then(res => {
            if (res.headers.get('Content-Type').indexOf('text/html') != -1)
                return res.text()
            else if (res.headers.get('Content-Type').indexOf('application/json') != -1)
                return res.json()
            else return undefined
        })
    else if (typeof multipart != "undefined")
        return await fetch(url, {
            method: 'POST', credentials: 'same-origin', headers: {
                'Content-Length': body.length,
                'Client-Ssid': extractCookies(document.cookie, 'SSID')
            }, body: body
        }).then(res => res.json())
    else
        return await fetch(url, {
            method: 'POST', credentials: 'same-origin', headers: {
                'Content-Type': 'application/json',
                'Content-Length': body.length,
                'Client-Ssid': extractCookies(document.cookie, 'SSID')
            }, body: JSON.stringify(body)
        }).then(res => res.json())
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

function scriptLoader(script: string | Array<string>) {
    let d = document
    let scd = d.createElement('script'),
        sad = d.getElementsByTagName('script')[0],
        allTags = Array.from(document.getElementsByTagName('script'))
    if (typeof script == "string") {
        scd.src = `/dist/client/${script}.js`
        scd.async = true
        scd.defer = true
        allTags.forEach(s => {
            (s.src == scd.src) ? s.parentNode.removeChild(s) : s.parentNode.insertBefore(scd, s)
        })

    } else
        script.forEach(s => {
            let sr = d.createElement('script')
            sr.src = `/dist/client/${s}.js`
            sr.async = true
            sr.defer = true
            allTags.forEach(s => {
                (s.src == sr.src) ? s.parentNode.removeChild(s) : sad.parentNode.insertBefore(sr, s)
            })
        })
}

/**
 * extracts form data, including checkboxes, multiple select options,
 * multiple file uploads, ..... radio buttons still to be implemented,
 * and returns an iterable
 * @param {HTMLFormElement} form form to extract data
 */
async function extractFormData(form: HTMLFormElement) {
    if (typeof form == 'undefined')
        throw new Error('Requires a form to iterate')
    else {
        let data = {}
        // reset object values first before iterating form
        Object.getOwnPropertyNames(data).forEach(key => {
            delete data[key]
        })
        for (let element of Array.from(form.elements)) {
            ['text', 'number', 'url', 'textarea', 'password', 'email'].forEach(type => {
                if (element['type'].indexOf(type) != -1) {
                    data[element['name']] = element['value'].trim()
                }
            })
            if (element['type'] == 'file') {
                data[element['name']] = element['files'][0]
            }
            if (element['type'].indexOf('select') != -1) {
                if (element.getAttribute('multiple') != undefined) {
                    try {
                        let multiValues: Array<string> = [],
                            options = Array.from(element.querySelectorAll('option'))
                        for (let option of options) {
                            if (option.selected)
                                multiValues.push(option.value)
                        }
                        data[element['name']] = multiValues
                    } catch (err) { }
                } else {
                    data[element['name']] = element['value']
                }
            }
            // @ts-ignore
            if (element['type'] == 'checkbox' && element.checked)
                data[element['name']] = element['value']
            // @ts-ignore
            if (element['type'] == 'radio' && element.checked)
                data[element['name']] = element['value']
        }
        // delete empty keys
        await Object.keys(data).forEach((key) => (key.length < 1) && delete data[key])
        return data
    }
}

/**
 * checks if cookie exists and returns all cookies, or cookie value if cookie name is passed
 * @param {string} cookieString 
 * @param {string} cookieName 
 */
function extractCookies(cookieString: string | Array<string>, cookieName?: string) {
    // @ts-ignore
    let c = decodeURIComponent(cookieString),
        d: string | Array<string>, e: object = {}
    if (c.length < 1) return false
    if (c.indexOf(';') != -1) d = c.split(';')
    else d = c
    if (typeof d == 'string')
        e[d.split('=')[0].trim()] = d.split('=')[1].trim()
    else
        d.map(p => e[p.split('=')[0].trim()] = p.split('=')[1].trim())

    if (typeof cookieName != 'undefined') {
        if (cookieName.trim() == 'API') {
            return window.location.protocol + '//' + e[cookieName]
        }
        return e[cookieName]
    }
    return JSON.stringify(e)
}
