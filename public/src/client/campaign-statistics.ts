((f) => {
    if (typeof module == 'undefined') {
        f(document, window)
    }
    else
        throw new Error('Unsupported environment')
})(async (document: Document, window: Window) => {
    async function showStatistics() {
        let campaigns = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/campaignStatistics'),
            statisticsParent = document.getElementById('campaignStatistics'),
            campaignStatistics = ''

        for await (const campaign of campaigns) {
            displayStatistics(campaign)
        }

        function displayStatistics(campaign: any) {
            campaignStatistics += `
        <div class="campaign-statistics" data-campaign="${campaign['_id']}">
            <div class="text-left">${campaign['_id']['campaignName']}</div>
            <div class="text-left">${campaign['_id']['adName']}</div>
            <div style="margin: 0 auto;">${campaign['impressions']}</div>
            <div style="margin: 0 auto;">${campaign['views']}</div>
            <div style="margin: 0 auto;">${campaign['clicks']}</div>
            <div style="margin: 0 auto;">${campaign['doubleclicks']}</div>
            <div></div>
            <div>
                <a href="#t${campaign['_id']['adId']}" data-href="${campaign['_id']['adId']}" class="btn btn-light deleteAd">
                    <span class="mdi mdi-delete"></span>
                </a>                
            </div>
        </div>`
        }

        statisticsParent.innerHTML = campaignStatistics
    }
    await showStatistics()

    let deleteAds = Array.from(document.querySelectorAll('a.deleteAd'))
    for (const deleteAd of deleteAds) {
        deleteAd.addEventListener('click', async function (e) {
            e.preventDefault()
            await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/deleteAdFromRecords?id=' + this.getAttribute('data-href'))
            await showStatistics()
        })
    }
})