
/**
 * checks if cookie exists and returns all cookies, or cookie value if cookie name is passed
 * @param {string} cookieString 
 * @param {string} cookieName 
 */
export function cookieExists(cookieString: string | Array<string>, cookieName?: string) {
    // @ts-ignore
    let c = decodeURIComponent(cookieString),
        d: string | Array<string>, e: object = {}

    if (c.indexOf(';') != -1) d = c.split(';')
    else d = c
    if (typeof d == 'string')
        e[d.split('=')[0]] = d.split('=')[1]
    else
        d.map(p => e[p.split('=')[0]] = p.split('=')[1])

    if (typeof cookieName != 'undefined')
        return e[cookieName]
    return e
}