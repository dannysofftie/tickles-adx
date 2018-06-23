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
    // apply filters using date ranges
    // @ts-ignore
    $('.custom-datepicker').datepicker({
        setDate: new Date(),
        todayHighlight: true,
        daysOfWeekHighlighted: "0",
        autoclose: true,
        endDate: '+0d'
    })
    // chart data
    let chartColors = { red: 'rgb(255, 99, 132)', orange: 'rgb(255, 159, 64)', yellow: 'rgb(255, 205, 86)', green: 'rgb(75, 192, 192)', blue: 'rgb(54, 162, 235)', purple: 'rgb(153, 102, 255)', grey: 'rgb(201, 203, 207)' },
        // data-overview charts
        // top 2 performing campaigns
        top2Ctx: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('top-performing'),
        allAdsCtx: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('all-ads-overview')

    // random scale generator
    function randScaleGen(min: number, max: number) {
        let rand = Math.floor(Math.random() * max)
        return rand < min ? randScaleGen(15, 79) : rand
    }
    // random color picker
    function randColorPicker() {
        let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey']
        return chartColors[colors[Math.floor(Math.random() * 7)]]
    }
    function plotCharts() {
        new Chart(top2Ctx, {
            type: 'doughnut',
            data: { labels: ['Electronics campaign', 'Smartphones & Accessories'], datasets: [{ label: 'Ad campaign performance over time', backgroundColor: [randColorPicker(), randColorPicker()], data: [randScaleGen(15, 79), randScaleGen(15, 79)] }] },
            options: { title: { display: true, text: 'Ad campaign performance over time (People reached in \'000)' } }
        })

        // all ads overview by labels and over time
        new Chart(allAdsCtx, {
            type: 'bubble',
            data: {
                labels: ['Performance per ad from multiple campaigns'],
                datasets: [{ label: 'Galaxy S6', backgroundColor: randColorPicker(), data: [{ x: randScaleGen(15, 79), y: randScaleGen(15, 79), r: 48 }] },
                { label: 'Huawei Mate', backgroundColor: randColorPicker(), data: [{ x: randScaleGen(15, 79), y: randScaleGen(15, 79), r: 18 }] },
                { label: 'iPhone X', backgroundColor: randColorPicker(), data: [{ x: randScaleGen(15, 79), y: randScaleGen(15, 79), r: 28 }] },
                { label: 'HP 500', backgroundColor: randColorPicker(), data: [{ x: randScaleGen(15, 79), y: randScaleGen(15, 79), r: 31 }] },
                { label: 'Samsung Plasma TV', backgroundColor: randColorPicker(), data: [{ x: randScaleGen(15, 79), y: randScaleGen(15, 79), r: 8 }] },
                { label: 'Nikkon Pro', backgroundColor: randColorPicker(), data: [{ x: randScaleGen(15, 79), y: randScaleGen(15, 79), r: 20 }] }],
            },
            options: {
                scales: {
                    yAxes: [{ ticks: { beginAtZero: true, max: 86 }, gridLines: { display: false } }],
                    xAxes: [{ ticks: { beginAtZero: true, max: 86 }, gridLines: { display: false } }]
                }
            }
        })
    }
    // call plotCharts() on page load 
    plotCharts()

    // apply filters on filter request
    document.forms['filter-form'].addEventListener('submit', function (e) {
        e.preventDefault()
        // make http request to retrieve ad data from the server
        plotCharts()
    })
})

