((f) => {
    if (typeof module == 'undefined') {
        f(document, window)
    }
    else
        throw new Error('Unsupported environment')
})(async (document: Document, window: Window) => {

    let campaigns = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/campaignStatistics')

    console.log(campaigns)
})