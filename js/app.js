Vue.createApp({
    data() {
        return {
            value1: '',
            value2: ''
        }
    },
    computed: {
        add() {
            return this.calc((a, b) => a + b)
        },
        subtract() {
            return this.calc((a, b) => a - b)
        },
        multiply() {
            return this.calc((a, b) => a * b)
        },
        divide() {
            return this.calc((a, b) => (b == 0) ? null : a / b)
        },
        quotient() {
            return this.calc((a, b) => (b == 0) ? null : Math.floor(a / b))
        },
        remainder() {
            return this.calc((a, b) => (b == 0) ? null : a % b)
        }
    },
    methods: {
        calc(func) {
            if (this.value1 === '' || this.value2 ==='') {
                return null
            }
            return func(this.value1, this.value2)
        }
    },
    mounted() {
        this.$refs.value1.focus()
    }
}).mount('#app')
