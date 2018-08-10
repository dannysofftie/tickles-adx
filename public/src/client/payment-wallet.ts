
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'DEC'];
((f) => {
    if (typeof module == 'undefined') {
        f(document, window)
    }
    else
        throw new Error('Unsupported environment')
})(async (document: Document, window: Window) => {
    let paypalCheckout: HTMLFormElement = document.forms['paypal-checkout'];

    (<HTMLInputElement>paypalCheckout.querySelector('input[name="top-up-amount"]')).addEventListener('keyup', function (e) {
        this.value = this.value.replace(/[^\d]/ig, '')
    })

    paypalCheckout.addEventListener('submit', async function (e) {
        const btn: HTMLButtonElement = paypalCheckout.querySelector('button[type="submit"]')
        btn.disabled = true
        btn.innerHTML = `<span>Processing &nbsp; <span class="mdi mdi-loading mdi-spin"></span></span>`
        e.preventDefault()
        let paypalResult = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/checkout/paypal', await extractFormData(this))
        if (paypalResult['message'] == 'password-error') {
            btn.innerHTML = `<span class="text-danger">Password error <span class="mdi mdi-alert"></span></span>`
            setTimeout(() => {
                btn.innerHTML = `<span>Paypal Checkout &nbsp; <span class="mdi mdi-paypal"></span></span>`
                btn.disabled = false
            }, 3000)
        } else if (paypalResult['message'] == 'success')
            window.location.href = paypalResult['url']
    })

    // transaction history
    let ownTransactions = document.querySelector('div.own-transactions'),
        referralRewards = document.querySelector('div.from-referrals'),
        transactionResult = await asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/transactionHistory')

    if (transactionResult['transactionHistory'].length < 1) {
        ownTransactions.innerHTML = `<div class="my-5 d-flex flex-column justify-content-center align-items-center">
            <span class="mdi mdi-alert mdi-24px"></span>
            <span>No transaction history found</span>
        </div>`
    } else {
        let transactionData = ''
        for await (const history of transactionResult['transactionHistory']) {
            transactionData += `
            <div class="mt-1 own-transactions-data">
                <div class="own-transactions-date d-flex flex-column align-items-center text-muted">
                    <small>${new Date(history['topUpDate']).getDate()}</small>
                    <span>${months[new Date(history['topUpDate']).getMonth() + 1]}</span>
                </div>
                <div class="own-transactions-metadata d-flex flex-column justify-content-center">
                    <small>${history['payerEmail']}  ${new Date(history['topUpDate']).toLocaleTimeString()}</small>
                    <small>Amount deposited $${history['paidAmount']}</small>
                </div>
            </div>`
        }
        ownTransactions.innerHTML = transactionData
    }


    if (transactionResult['referralAwards'].length < 1)
        referralRewards.innerHTML = `<div class="my-5 d-flex flex-column justify-content-center align-items-center">
            <span class="mdi mdi-alert mdi-24px"></span>
            <span>No transaction history found</span>
            <span>See how you can earn from referrals <a href="/client/dashboard/referral-program" class="link"> here </a></span>
        </div>`
    // show referral rewards here and put to the DOM

})