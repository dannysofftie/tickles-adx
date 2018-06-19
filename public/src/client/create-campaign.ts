((f) => {
    if (typeof module == 'undefined') {
        f(document, window)
    }
    else
        throw new Error('Cannot run in Node environment')
})((document: Document, window: Window) => {
    let tabs = Array.from(document.querySelectorAll('.campaign-tab'))
    tabs.forEach((tab) => {
        tab.addEventListener('click', function () {
            tabs.forEach(div => {
                div.classList.remove('campaign-tab-active', 'bg-info')
            })
            this.classList.add('campaign-tab-active', 'bg-info')
        })
    })
})