const Counter = {
    data() {
      return {
        counter: 0
      }
    },
    mounted() {
        setInterval(() => {
          this.counter++
        }, 1000)
    }
}

Vue.createApp({
    data() {
        return {
            number1: null,
            number2: null
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
            return this.calc((a, b) => a / b)
        },
        quotient() {
            return this.calc((a, b) => Math.floor(a / b))
        },
        remainder() {
            return this.calc((a, b) => a % b)
        }
    },
    methods: {
        calc(func) {
            const number1 = parseInt(this.number1)
            const number2 = parseInt(this.number2)
            if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
                return func(number1, number2)
            } else {
                return null
            }
        }
    }
}).mount('#app')
