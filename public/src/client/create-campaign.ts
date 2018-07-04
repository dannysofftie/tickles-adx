/**
 * google maps initializer
 */
function initMap() {
    // initialize google maps
}

async function currentAdvertiserCampaigns() {
    let catSelect: HTMLSelectElement = document.querySelector('select[name="adCampaignCategory"]'),
        groups = await asyncRequest('/api/client/retrieve-campaigns')
    if (catSelect != null)
        for await (const field of groups) {
            catSelect.append(new Option(field.campaignName, field.campaignValue))
        }
    // @ts-ignore
    $('.custom-campaign-group').selectpicker()
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
        let selectOption: HTMLSelectElement = document.querySelector('select[name="campaignCategory"]'),
            businessCategories = await fetch('http://' + extractCookies(document.cookie, 'API') + '/api/v1/data/business-categories').then(res => res.json())

        for (const field of businessCategories) {
            selectOption.append(new Option(field.businessName, field._id))
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
            let refInput: HTMLInputElement = campaignDataForm.querySelector(`input[name="${inputName}"]`),
                refSelect: HTMLSelectElement = campaignDataForm.querySelector(`select[name="campaignTargetLocations"]`)
            if (refInput != null) {
                if (refInput.getAttribute('type') == 'text' && data[inputName].length < 4) {
                    refInput.classList.add('is-invalid')
                    validated = false
                } else if (refInput.getAttribute('type') == 'number' && Number(data[inputName]) < 0.5) {
                    refInput.classList.add('is-invalid')
                    validated = false
                } else {
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

    // save ad and validate input fields
    let createAdForm: HTMLFormElement = document.forms['createAdDataForm'],
        adDataToPublish: FormData = new FormData()
    if (createAdForm != undefined) {
        let finalStep: HTMLDivElement = document.querySelector('div[ref-tab="finalize"]'),
            upLoadedImage: HTMLImageElement = createAdForm.querySelector('input[name="adDisplayImage"]'),
            previewImages = Array.from(document.querySelectorAll('.ad-image-preview'))
        upLoadedImage.addEventListener('change', async function (e) {
            let image = e.srcElement['files'][0],
                imageName = image.name,
                imageType = image.type,
                imageSize = image.size

            if (imageType == 'image/jpeg' || imageType == 'image/png') {
                let fileReader: FileReader = new FileReader()
                await fileReader.readAsDataURL(image)
                fileReader.onloadend = function (e) {
                    document.getElementById('labelUpload').innerHTML = `<span>${imageName}</span>`
                    previewImages.forEach(img => {
                        img.setAttribute('src', e.target.result)
                    })
                }
            } else {
                // display file format not supported error message, and clear input[type="file"]
            }
        })

        // submit and publish ad
        document.getElementById('goToFinalStep').addEventListener('click', async function (event) {
            event.preventDefault()
            let adData = await extractFormData(createAdForm)
            for (const key in adData) {
                if (key.trim().length > 1)
                    adDataToPublish.append(key, adData[key])
            }
            finalStep.click()
        })

        document.getElementById('publishAd').addEventListener('click', async function (e) {
            let pubResult = await asyncRequest('/api/client/publish-ad', adDataToPublish)
            console.log(pubResult)
        })
    }
})