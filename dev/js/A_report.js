// --------------圖表
const rePortBtns = [...document.querySelector('.reportBody .rePortBtns').children] //[0] 是折線圖 [1]是原餅卡路里 [2] 是長條圖

const barCContainer = document.querySelector('.barCContainer')
const pieCContainer = document.querySelector('.pieCContainer')
const lineCContainer = document.querySelector('.lineCContainer')

const FEData = [
    { time: '2020-1-2', weight: 80.5 },
    { time: '2020-2-2', weight: 70.5 },
    { time: '2020-4-2', weight: 60.5 },
    { time: '2020-5-2', weight: 90.5 },
    { time: '2020-5-2', weight: 90.5 },
]


console.log(FEData[0].time.slice(5))

console.log(new Date(FEData[0].time))

console.log(Date.parse(new Date()) + '現在時間')
console.log(Date.parse(new Date()) - (56 * 24 * 60 * 60* 1000) + '前八個禮拜')




// 體育 一開始reload
let barChart = new Chart(document.getElementById('barChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: labelArray,
        datasets: [
            {
                label: 'EXERCICE',
                fill: true,
                backgroundColor: '#95b17c',
                data: dataArray,
            },
        ],
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    },
})





// exercice bar
rePortBtns[0].addEventListener('click', () => {

    barCContainer.style.display = 'block'
    pieCContainer.style.display = 'none'
    lineCContainer.style.display = 'none'

    rePortBtns[0].classList.add('o-3')
    rePortBtns[1].classList.remove('o-3')
    rePortBtns[2].classList.remove('o-3')

    barChart = new Chart(document.getElementById('barChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: labelArray,
            datasets: [
                {
                    label: 'EXERCICE',
                    fill: true,
                    backgroundColor: '#95b17c',
                    data: dataArray,
                },
            ],
        },
        options: {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        },
    })

})

// cal pie
rePortBtns[1].addEventListener('click', () => {
    barCContainer.style.display = 'none'
    pieCContainer.style.display = 'block'
    lineCContainer.style.display = 'none'

    rePortBtns[0].classList.remove('o-3')
    rePortBtns[1].classList.add('o-3')
    rePortBtns[2].classList.remove('o-3')

    
    const pieChart = new Chart(document.getElementById('pieChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['BREAKFAST', 'LUNCH', 'DINNER'],
            datasets: [
                {
                    backgroundColor: ['#9F1600', '#D25541', '#ff826e'],
                    data: [75, 5, 20],
                },
            ],
        },
    })

})

//weight line
rePortBtns[2].addEventListener('click', () => {
    barCContainer.style.display = 'none'
    pieCContainer.style.display = 'none'
    lineCContainer.style.display = 'block'

    rePortBtns[0].classList.remove('o-3')
    rePortBtns[1].classList.remove('o-3')
    rePortBtns[2].classList.add('o-3')

    const lineChart = new Chart(document.getElementById('lineChart').getContext('2d'), {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['1w', '2w', '3w', '4w'],
            datasets: [
                {
                    label: 'WEIGHT',
                    backgroundColor: 'transparent',
                    borderColor: '#2274A5',
                    data: [54, 52, 52, 54],
                    borderCapStyle: 'round',
                    lineTension: 0.1,
                },
            ],
        },
        options: {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        },
    })
})
