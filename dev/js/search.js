//共用

let vm = new Vue({
    el: '#app',
    data: {
        foodData: [],
        foodSearch: '',

        sportData: [], 
        sportSearch: '',

        isFoodState: true,
        count: '',

        // selectSelected: null,

        fItems: null,
        SItems: null,
        fState: null,
        SState: null,

        FselectItems: null,
        SselectItems: null,

    },
    methods: {
        toggleSearchBody() {
            this.isFoodState = !this.isFoodState
        },

        typeSelect(e) {
            const status = e.target.textContent
            if (status === 'ALL') {
                selectFType = 0
            } else if (status === 'FT. SHOP' || status === 'LOW') {
                selectFType = 1
            } else if (status === 'RICE' || status === 'MEDIUM') {
                selectFType = 2
            } else if (status === 'NOODLES' || status === 'HIGH') {
                selectFType = 3
            } else if (status === 'MEAT') {
                selectFType = 4
            } else if (status === 'FRUIT & VEG') {
                selectFType = 5
            } else if (status === 'FRIED') {
                selectFType = 6
            } else if (status === 'DESSERT') {
                selectFType = 7
            } else if (status === 'DRINK') {
                selectFType = 8
            } else if (status === 'CUSTOMIZED') {
                selectFType = 9
            }
            console.log(selectFType)
        },

        filterData() {
            // const fItems = selectAll('#food_page .result_items a')
            // const SItems = selectAll('#exercise_page .result_items a')

            //food 的狀態
            // const fState = this.selectSelected[1].textContent
            //sport 的狀態
            // const SState = this.selectSelected[2].textContent

            //當是在food的page上
            function FfilterType(type) {
                let i = 0
                while (i < Vthis.fItems.length) {
                    if (
                        Vthis.fItems[i].children[0].children[0].children[0].textContent
                            .toUpperCase()
                            .indexOf(Vthis.foodSearch.toUpperCase()) > -1 &&
                        Vthis.fItems[i].dataset.type == type
                    ) {
                        Vthis.fItems[i].style.display = 'inline-flex'
                        Vthis.count ++
                    } else {
                        Vthis.fItems[i].style.display = 'none'
                    }
                    i++
                }
            }

            function SfilterType(type) {
                let i = 0
                while (i < Vthis.SItems.length) {
                    if (
                        Vthis.SItems[i].children[0].children[0].children[0].textContent
                            .toUpperCase()
                            .indexOf(Vthis.sportSearch.toUpperCase()) > -1 &&
                        Vthis.SItems[i].dataset.type == type
                    ) {
                        Vthis.SItems[i].style.display = 'flex'
                    } else {
                        Vthis.SItems[i].style.display = 'none'
                    }
                    i++
                }
            }

            let Vthis = this
            if (this.isFoodState) {
                //當是在 food 的page上
                console.log(this.fState.textContent)
                switch (this.fState.textContent) {
                    case 'ALL':
                        let i = 0
                        console.log(Vthis.fItems.length)
                        while (i < Vthis.fItems.length) {
                            if (
                                Vthis.fItems[i].children[0].children[0].children[0].textContent
                                    .toUpperCase()
                                    .indexOf(this.foodSearch.toUpperCase()) > -1
                            ) {
                                Vthis.fItems[i].style.display = 'inline-flex'
                            } else {
                                Vthis.fItems[i].style.display = 'none'
                            }
                            i++
                            console.log(i)
                        }
                        break
                    case 'FT. SHOP':
                        FfilterType('1')
                        break
                    case 'RICE':
                        FfilterType('2')
                        break
                    case 'NOODLES':
                        FfilterType('3')
                        break
                    case 'MEAT':
                        FfilterType('4')
                        break
                    case 'FRUIT & VEG':
                        FfilterType('5')
                        break
                    case 'FRIED':
                        FfilterType('6')
                        break
                    case 'DESSERT':
                        FfilterType('7')
                        break
                    case 'DRINK':
                        FfilterType('8')
                        break
                    case 'CUSTOMIZED':
                        FfilterType('9')
                        break
                }
            } else {
                //當是在sport的page上
                switch (this.SState.textContent) {
                    case 'ALL':
                        let i = 0
                        while (i < Vthis.SItems.length) {
                            if (
                                Vthis.SItems[i].children[0].children[0].children[0].textContent
                                    .toUpperCase()
                                    .indexOf(this.sportSearch.toUpperCase()) > -1
                            ) {
                                Vthis.SItems[i].style.display = 'inline-block'
                            } else {
                                Vthis.SItems[i].style.display = 'none'
                            }
                            i++
                        }
                        break
                    case 'LOW':
                        SfilterType('1')
                        break
                    case 'MEDIUM':
                        SfilterType('2')
                        break
                    case 'HIGH':
                        SfilterType('3')
                        break
                }
            }
        },

        getId(key) {
            sessionStorage.setItem('infoNo', key + 1)
        },
    },

    computed: {
        //當在input 輸入會執行搜尋
        //要在這裡抓取 select的資料
        //this.selectSelected[1] 是屬於food page 的select
        filteredFood() {
            if (this.foodData.length) {
                console.log('foodData 成功抓取')
                return this.foodData.filter((item) => {
                    return item.fdName.toLowerCase().includes(this.foodSearch.toLowerCase())
                })
            } else {
                console.log('foodData 抓取失敗')
                return {}
            }
        },

        filteredSport() {
            if (this.sportData.length) {
                console.log('sportData 成功抓取')
                return this.sportData.filter((item) => {
                    return item.spName.toLowerCase().includes(this.sportSearch.toLowerCase())
                })
            } else {
                console.log('sportDataData 抓取失敗')
                return {}
            }
        },
    },
    created() {},
    mounted() {
        const getFoodData = () => {
            fetch(`php/getFoodData.php?mNo=${getTmp_mNo}`)
                .then((res) => res.json())
                .then((res) => {
                    this.foodData = res
                    // console.log(res)
                    console.log(this.foodData)
                })
        }
        getFoodData()

        const getSportData = () => {
            let Vthis = this
            let xhr = new XMLHttpRequest()
            xhr.onload = function () {
                const data = JSON.parse(xhr.responseText)
                // console.log(data)
                Vthis.sportData = data
                console.log(Vthis.sportData)
            }
            xhr.open('get', 'php/getSportData.php', true)
            xhr.send(null)
        }
        getSportData()

        const time = setTimeout(() => {
            this.FselectItems = selectAll('#food_page .select-items')
            this.SselectItems = selectAll('#exercise_page .select-items')
            // this.selectSelected = selectAll('.select-selected')

            this.fItems = selectAll('#food_page .result_items a')
            this.SItems = selectAll('#exercise_page .result_items a')
            this.fState = selectAll('.select-selected')[1]
            this.SState = selectAll('.select-selected')[2]


            clearTimeout(time)
        }, 500)
    },
})
