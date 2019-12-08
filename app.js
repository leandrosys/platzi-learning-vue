new Vue({
    el: '#app',

    data() {
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: -10,
            value: 0,
            color: 'f4f4f4',
            price: 8500,
            pricesWithDays: [
                {day: 'Lunes', value: 8000},
                {day: 'Martes', value: 9000},
                {day: 'Miercoles', value: 8500},
                {day: 'Jueves', value: 7800},
                {day: 'Viernes', value: 7500},
                {day: 'Sabado', value: 9300}
            ],
            showPrices: false
        }
    },

    computed: {
        title () {
            return `${this.name} - ${this.symbol}`
        },

        convertedValue () {
            if (!this.value) {
                return 0
            }

            return this.value / this.price
        }
    },

    watch: {
        showPrices(newVal, oldVal) {
            console.log(oldVal, newVal)
        }
    },

    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices
            this.color = this.color.split('').reverse().join('')
        }
    },
})