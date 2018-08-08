(function (f) {
    if (typeof module == 'undefined')
        f()
    else
        throw new Error('Node environment not supported')
})(async function () {
    let campaignData = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/getCampaignsWithBsCategories'),
        glanceAnalytics = document.querySelector('div.targeting-level'),
        suggestedImprovements = document.querySelector('.suggested-improvements'),
        allCampaigns = document.querySelector('.all-campaigns-section')
    let glanceCampaignStatus: string = '',
        allCampignData: string = ''

    for await (const campaign of campaignData) {
        campaignManager(campaign)
    }
    /*
    campaignAdvertisements
    campaignBannedDomains
    campaignBeginDate
    campaignBidPerAd
    campaignCategory
    campaignEndDate
    campaignEstimatedBudget
    campaignName
    campaignTargetDesktop
    campaignTargetLocations
    campaignTargetMobile
    campaignTargetTablets
    */
    function campaignManager(campaign: any) {
        let statusIndicator = ''
        if (campaign['campaignTargetDesktop'] == 'off' && campaign['campaignTargetMobile'] == 'off' && campaign['campaignTargetTablets'] == 'off')
            statusIndicator = `<span class="badge badge-danger">Needs attention</span>`
        else if (campaign['campaignTargetDesktop'] == 'on' && campaign['campaignTargetMobile'] == 'off')
            statusIndicator = `<span class="badge badge-info" title="You have targeted desktop devices only">Moderate</span>`
        else if (campaign['campaignTargetDesktop'] == 'on' && campaign['campaignTargetMobile'] == 'on')
            statusIndicator = `<span class="badge badge-success" title="You have targeted desktop and mobile devices. Good to go">Good</span>`

        glanceCampaignStatus += `<div class="targeting-status">
            <span>${campaign['campaignName']} </span>
            <div class="status-indicator">
                ${statusIndicator}
            </div>
        </div>`

        const checkboxStatus = value => {
            return value == 'off' ? '' : 'checked'
        }

        allCampignData += `
        <div class="single-campaign" data-campaign="${campaign['_id']}">
            <div>${campaign['campaignName']}</div>
            <label class="switch">
                <input name="campaignStatus" type="checkbox" ${checkboxStatus(campaign['campaignStatus'])}>
                <span class="slider round"></span>
            </label>
            <div>${new Date(campaign['campaignBeginDate']).toDateString()}</div>
            <div>${new Date(campaign['campaignEndDate']).toDateString()}</div>
            <div style="margin: 0 auto;">${campaign['campaignEstimatedBudget']}</div>
            <small>${campaign['campaignCategory']['businessName']}</small>
            <div>
                <a href="#t${campaign['_id']}" data-toggle="collapse">View targeting</a>
                <div id="t${campaign['_id']}" class="collapse">
                    <ul>
                        <li class="mb-1">Desktop devices &nbsp;
                            <label class="switch float-right">
                                <input name="campaignTargetDesktop" type="checkbox" ${checkboxStatus(campaign['campaignTargetDesktop'])}>
                                <span class="slider round"></span>
                            </label>
                        </li>
                        <li class="mb-1">Smartphones &nbsp;
                            <label class="switch float-right">
                                <input name="campaignTargetMobile" type="checkbox" ${checkboxStatus(campaign['campaignTargetMobile'])}>
                                <span class="slider round"></span>
                            </label>
                        </li>
                        <li class="mb-1">Tablets &nbsp;
                            <label class="switch float-right">
                                <input name="campaignTargetTablets" type="checkbox" ${checkboxStatus(campaign['campaignTargetTablets'])}>
                                <span class="slider round"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`
    }
    glanceAnalytics.innerHTML = glanceCampaignStatus
    allCampaigns.innerHTML = allCampignData
    checkboxChangeListener()
    async function checkboxChangeListener() {
        let checkboxes: Array<HTMLInputElement> = Array.from(allCampaigns.querySelectorAll('input[type="checkbox"]'))
        for await (const checkbox of checkboxes) {
            checkbox.addEventListener('change', function (e) {
                let campaignId = this.closest('div.single-campaign').getAttribute('data-campaign'),
                    selectedName = this.getAttribute('name'),
                    value = this.checked == true ? 'on' : 'off'
                notifySelectionChange(campaignId, selectedName, value)
            })
        }
    }

    async function notifySelectionChange(campaignId: string, field: string, value: string) {
        await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/updateCampaign', {
            campaignId: campaignId,
            field: field,
            value: value
        })
    }


})