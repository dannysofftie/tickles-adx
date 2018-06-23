/**
 * google maps initializer
 */
function initMap() {
    // initialize google maps
}

async function currentAdvertiserCampaigns() {
    let campaigns: Array<string> = await asyncRequest('/api/client/retrieve-campaigns'),
        htmlSelect: HTMLSelectElement = document.querySelector('select[name=""]')
    for (let field in campaigns) {
        // @ts-ignore
        htmlSelect.append(new Option(field.campaignName, field.campaingValue))
    }
}
((f) => {
    if (typeof module == 'undefined') {
        f(document, window)
    }
    else
        throw new Error('Cannot run in Node environment')
})((document: Document, window: Window) => {
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

    let tabs = Array.from(document.querySelectorAll('.campaign-tab'))
    tabs.forEach((tab) => {
        tab.addEventListener('click', function () {
            let refTab = document.getElementById(this.getAttribute('ref-tab')),
                allChild = Array.from(document.querySelectorAll('.camp-child'))

            tabs.forEach(div => {
                div.classList.remove('campaign-tab-active')
            })

            // retrieve campaigns
            if (this.getAttribute('ref-tab') == 'create-ad') currentAdvertiserCampaigns()

            allChild.forEach(d => {
                d.classList.add('hidden')
            })
            this.classList.add('campaign-tab-active')
            refTab.classList.remove('hidden')
        })
    })

    // calendar for campaign date ranges
    // @ts-ignore
    $('.calendar').datepicker({
        setDate: new Date(),
        todayHighlight: true,
        daysOfWeekHighlighted: "0",
        autoclose: true,
        startDate: '-0d'
    })
    // @ts-ignore
    $('.custom-select-search').selectpicker();
    // request campaign business group categories
    (async function () {
        let catSelect: HTMLSelectElement = document.querySelector('select[name="campaignCategory"]'),
            groups = await asyncRequest('/api/client/business-group-categories')
        for await (const field of groups) {
            catSelect.append(new Option(field.businessGroup, field.groupValue))
        }
        // @ts-ignore
        $('.selectpicker-category').selectpicker()
    })()

    // save campaign data and validate
    let campaignDataForm: HTMLFormElement = document.forms['campaignDataForm']
    campaignDataForm.addEventListener('submit', async function (e) {
        e.preventDefault()
        let data = await extractFormData(campaignDataForm),
            validated: boolean = false
        // validate input fields of type text
        Object.keys(data).forEach(inputName => {
            let refInput: HTMLInputElement = campaignDataForm.querySelector(`input[name="${inputName}"]`)

            if (refInput != null && refInput.getAttribute('type') == 'text' && data[inputName].length < 4) {
                refInput.classList.add('is-invalid')
                validated = false
            } else if (refInput != null && refInput.getAttribute('type') == 'number' && Number(data[inputName]) < 0.5) {
                refInput.classList.add('is-invalid')
                validated = false
            } else {
                if (refInput != null) {
                    refInput.classList.remove('is-invalid')
                    validated = true
                }
            }
        })

        if (validated != false) {
            let saveResult = await asyncRequest('/api/client/save-campaign', data),
                createAdTab: HTMLDivElement = document.querySelector('div[ref-tab="create-ad"]')
            createAdTab.click()
        }
    })
})