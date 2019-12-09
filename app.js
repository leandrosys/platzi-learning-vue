Vue.component('CoinDetail', {
    props: ['coin'],

    data () {
        return {
            showPrices: false,
            value: 0
        }
    },

    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices
            this.$emit('change-color', this.showPrices ? 'FF96C8' : '3D3D3D')
        }
    },

    computed: {
        title () {
            return `${this.coin.name} - ${this.coin.symbol}`
        },
        convertedValue () {
            if (!this.value) {
                return 0
            }

            return this.value / this.coin.price
        }
    },

    template: `
        <div>
            <img v-on:mouseover="toggleShowPrices" v-on:mouseout="toggleShowPrices" v-bind:src="coin.img" v.bind:alt="coin.name">
            <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
                {{ title }}
                <span v-if="coin.changePercent > 0">😄</span>
                <span v-else-if="coin.changePercent < 0">👎🏽</span>
                <span v-else>🤤</span>
                <span v-on:click="toggleShowPrices">{{ showPrices ? '🙈': '🙊' }}</span>
            </h1>
            <input type="number" v-model="value">
            <span>{{ convertedValue }}</span>
            <ul v-show='showPrices'>
                <li v-bind:class="{ orange: p.value === coin.price, red: p.value < coin.price}"
                 v-for='p in coin.pricesWithDays'
                 v-bind:key='p.day'>el día {{ p.day }} el precio fue de {{ p.value }}
                </li>
            </ul>
        </div>
    `
})

new Vue({
    el: '#app',

    data() {
        return {
            btc: {
                name: 'Bitcoin',
                symbol: 'BTC',
                img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: -10,
                price: 8500,
                pricesWithDays: [
                    {day: 'Lunes', value: 8000},
                    {day: 'Martes', value: 9000},
                    {day: 'Miercoles', value: 8500},
                    {day: 'Jueves', value: 7800},
                    {day: 'Viernes', value: 7500},
                    {day: 'Sabado', value: 9300}
                ]
            },
            color: 'f4f4f4',
        }
    },

    methods: {
        updateColor (color) {
            this.color = color || this.color
            .split('')
            .reverse()
            .join('')
        }
    }
})