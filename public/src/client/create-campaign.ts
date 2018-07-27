/**
 * google maps initializer
 */
function initializeMap() {
    // initialize google maps
}

// places search autocomplete
// src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"
/*
function init() {
                var input = document.getElementById('locationTextField');
                var autocomplete = new google.maps.places.Autocomplete(input);
            }

            google.maps.event.addDomListener(window, 'load', init);
*/

((f) => {
    if (typeof module == 'undefined') {
        f(document, window)
    }
    else
        throw new Error('Cannot run in Node environment')
})(async (document: Document, window: Window) => {

    let g = document.createElement('script'),
        s = Array.from(document.getElementsByTagName('script'))
    g.async = true
    g.defer = true
    g.type = 'text/javascript'
    g.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBs-9K2aygiKd_2bXjhgnltqE-LW8FgRLc&callback=initializeMap'
    for (const l of s) {
        if (l.src !== g.src)
            l.parentNode.insertBefore(g, l)
    }
    // s.forEach(sc => sc.src == g.src ? console.log(sc.src) : sc.parentNode.insertBefore(g, sc))
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
            // if (this.getAttribute('ref-tab') == 'create-ad') 

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
            businessCategories = await fetch(extractCookies(document.cookie, 'API') + '/api/v1/data/business-categories').then(res => res.json())

        for (const field of businessCategories) {
            // @ts-ignore
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
            let refInput: HTMLInputElement = campaignDataForm.querySelector(`input[name="${inputName}"]`)
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
            let saveResult = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/save-campaign', data),
                createAdTab: HTMLDivElement = document.querySelector('div[ref-tab="create-ad"]')

            // check saveResult and give appropriate messages
            if (saveResult.message == 'INVALID') {
                // @ts-ignore
                this.querySelector('button[type="submit"]').disabled = false
                this.querySelector('button[type="submit"]').innerHTML = `<span>Failed &nbsp; <i class="mdi mdi-block-helper"></i></span>`
                setTimeout(() => {
                    this.querySelector('button[type="submit"]').innerHTML = `<span>Save campaign ad &nbsp; <i class="mdi mdi-chevron-double-right"></i></span>`
                }, 3000)
                return
            }
            this.querySelector('button[type="submit"]').innerHTML = `<span>Successfull &nbsp; <i class="mdi mdi-check-circle"></i></span>`
            // createAdTab.click()
        }
    })

    // save ad and validate input fields
    let createAdForm: HTMLFormElement = document.forms['createAdDataForm'],
        adDataToPublish: FormData = new FormData()
    if (createAdForm != undefined) {
        let finalStep: HTMLDivElement = document.querySelector('div[ref-tab="finalize"]'),
            upLoadedImage: HTMLImageElement = createAdForm.querySelector('input[name="adDisplayImage"]'),
            previewImages = Array.from(document.querySelectorAll('.ad-image-preview')),
            advertiserCampaigns = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/get-campaigns'),
            adCCategorySelect: HTMLSelectElement = createAdForm.querySelector('select[name="adCampaignCategory"]'),
            adSelectedType: HTMLSelectElement = createAdForm.querySelector('select[name="adSelectedType"]'),
            adDestinationUrl: HTMLInputElement = createAdForm.querySelector('input[name="adDestinationUrl"]'),
            adDescription: HTMLTextAreaElement = createAdForm.querySelector('textarea[name="adDescription"]'),
            descriptionpreview = Array.from(document.querySelectorAll('.description-preview '))
        for (const field of advertiserCampaigns) {
            // @ts-ignore
            adCCategorySelect.append(new Option(field['campaignName'], field._id))
        }
        // @ts-ignore
        $('.custom-campaign-group').selectpicker()

        adDestinationUrl.addEventListener('blur', async function (e) {
            document.getElementById('urlValidationMessage').innerHTML = '<span class="text-info">Verifying url ...<span class="mdi mdi-loading mdi-spin"></span></span>'
            let urlValidated = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/validate-url', { url: this.value }),
                urlValidationMessage = document.getElementById('urlValidationMessage')
            urlValidated.status != true ?
                urlValidationMessage.innerHTML = '<span class="text-danger">Url verification failed. Ensure url does not contain http:// or https://</span>' :
                urlValidationMessage.innerHTML = '<span class="text-info">Url has been approved</span>'
        })

        adSelectedType.addEventListener('change', function (e) {
            switch (this.value) {
                case 'text':
                case 'link':
                    document.getElementById('adDisplayHolder').classList.add('d-none')
                    break
                default:
                    document.getElementById('adDisplayHolder').classList.remove('d-none')
                    break
            }
        })
        // @ts-ignore
        upLoadedImage.addEventListener('change', async function (e) {
            let input = e.srcElement['files'][0],
                inputName = input.name,
                inputType = input.type,
                inputSize = input.size
            if (inputType == 'image/jpeg' || inputType == 'image/png') {
                if (Number(inputSize) / (1024 * 1024) > 1.2) {
                    document.getElementById('labelUpload').innerHTML = `<span class="text-info">Maximum allowed size is 1 mb</span>`
                    return false
                }
                let fileReader: FileReader = new FileReader()
                await fileReader.readAsDataURL(input)
                fileReader.onloadend = function (e) {
                    document.getElementById('labelUpload').innerHTML = `<span>${inputName}</span>`
                    previewImages.forEach(img => {
                        // @ts-ignore
                        img.setAttribute('src', e.target.result)
                    })
                }
            } else {
                // display file format not supported error message, and clear input[type="file"]                
                document.getElementById('labelUpload').innerHTML = `<span class="text-danger">Input of type ${inputType} not supported</span>`
            }
        })
        adDescription.addEventListener('keyup', function () {
            let placeholderLength: HTMLSpanElement = document.getElementById('placeholderLength')
            descriptionpreview.forEach(preview => {
                preview.innerHTML = this.value.trim()
            })
            if (this.value.trim().length <= 120) {
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                placeholderLength.innerHTML = `<span>You have ${120 - this.value.trim().length} characters remaining.</span>`
            }
            else {
                this.classList.remove('is-valid')
                this.classList.add('is-invalid')
                placeholderLength.innerHTML = `<span>You have 0 characters remaining.</span>`
            }
        })

        // submit and publish ad
        document.getElementById('goToFinalStep').addEventListener('click', async function (event) {
            event.preventDefault()
            let data: object = await extractFormData(createAdForm),
                validated: boolean = false
            Object.keys(data).every(function (key) {
                if (key.trim() != 'adDisplayImage' && key.trim() != 'adDescription'
                    && key.trim() != 'adCampaignCategory' && data[key].trim().length < 2) {
                    createAdForm.querySelector(`[name="${key}"]`).classList.add('is-invalid')
                    validated = false
                } else {
                    createAdForm.querySelector(`[name="${key}"]`).classList.remove('is-invalid')
                    validated = true
                }

                if (key.trim() == 'adCampaignCategory' && data[key].length < 3) {
                    validated = false
                } else {
                    validated = true
                }

                if (key.trim() == 'adDescription' && data[key].trim().length < 80) {
                    createAdForm.querySelector(`textarea[name="${key}"]`).classList.add('is-invalid')
                    validated = false
                } else {
                    validated = true
                }
                return true
            })

            if (validated != false) {
                // clear formdata object to circumvent repetition
                for (const key in data) {
                    if (key.trim().length > 1)
                        adDataToPublish.delete(key)
                }
                // add to formdata 
                for (const key in data) {
                    if (key.trim().length > 1)
                        adDataToPublish.append(key, data[key])
                }
                finalStep.click()
            }
        })

        document.getElementById('publishAd').addEventListener('click', async function (e) {
            // @ts-ignore
            this.disabled = true
            this.innerHTML = `<span>Publishing ... <i class="mdi mdi-loading mdi-spin"></i></span>`
            let pubResult = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/save-campaignad', adDataToPublish, true)
            // give message
            if (pubResult.message == 'INVALID') {
                // @ts-ignore
                this.disabled = false
                this.innerHTML = `<span>Failed &nbsp; <i class="mdi mdi-block-helper"></i></span>`
                setTimeout(() => {
                    this.innerHTML = `<span>Publish ad &nbsp; <i class="mdi mdi-chevron-double-right"></i></span>`
                }, 3000)
                return
            }
            this.innerHTML = `<span>Successfull &nbsp; <i class="mdi mdi-check-circle"></i></span>`
        })
    }
})