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
            number1: '',
            number2: ''
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
            if (this.number1 === '' || this.number2 ==='') {
                return null
            }
            return func(this.number1, this.number2)
        }
    }
}).mount('#app')
