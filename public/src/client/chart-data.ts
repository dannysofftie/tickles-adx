((f) => {
    if (typeof module == 'undefined') {
        document.addEventListener('DOMContentLoaded', () => {
            f(document, window)
        })
    }
    else
        throw new Error('Cannot run in Node environment')
})((document: Document, window: Window) => {

    let chartColors = { red: 'rgb(255, 99, 132)', orange: 'rgb(255, 159, 64)', yellow: 'rgb(255, 205, 86)', green: 'rgb(75, 192, 192)', blue: 'rgb(54, 162, 235)', purple: 'rgb(153, 102, 255)', grey: 'rgb(201, 203, 207)' };
    // data-overview charts
    // top 2 performing campaigns
    let top2Ctx: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('top-performing'),
        allAdsCtx: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('all-ads-overview')

    new Chart(top2Ctx, {
        type: 'doughnut',
        data: { labels: ['Electronics campaign', 'Smartphones & Accessories'], datasets: [{ label: 'Ad campaign performance over time', backgroundColor: [chartColors.red, chartColors.blue], data: [190, 397] }] },
        options: { title: { display: true, text: 'Ad campaign performance over time (People reached in \'000)' } }
    })

    // all ads overview by labels and over time
    new Chart(allAdsCtx, {
        type: 'bubble',
        data: {
            labels: ['Performance per ad from multiple campaigns'],
            datasets: [{ label: 'Galaxy S6', backgroundColor: chartColors.blue, borderColor: chartColors.blue, data: [{ x: 28, y: 25, r: 48 }] },
            { label: 'Huawei Mate', backgroundColor: chartColors.red, borderColor: chartColors.red, data: [{ x: 12, y: 5, r: 18 }] },
            { label: 'iPhone X', backgroundColor: chartColors.purple, borderColor: chartColors.purple, data: [{ x: 30, y: 25, r: 28 }] },
            { label: 'HP 500', backgroundColor: chartColors.green, borderColor: chartColors.green, data: [{ x: 19, y: 35, r: 31 }] },
            { label: 'Samsung Plasma TV', backgroundColor: chartColors.grey, borderColor: chartColors.grey, data: [{ x: 17, y: 5, r: 8 }] },
            { label: 'Nikkon Pro', backgroundColor: chartColors.yellow, borderColor: chartColors.yellow, data: [{ x: 10, y: 29, r: 20 }] }],
        },
        options: {
            scales: {
                yAxes: [{ ticks: { beginAtZero: true, max: 70 }, gridLines: { display: false } }],
                xAxes: [{ ticks: { beginAtZero: true, max: 80 }, gridLines: { display: false } }]
            }
        }
    })
})

