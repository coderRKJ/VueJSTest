var app = new Vue({
    el: '#app',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        output: 'Hello visitor! Enter you name and say hi.',
        visitor: "",
        visitors: [],
        isSuccess: false,
    },
    methods: {
        sayHi: function () {
            if (this.visitor) {
                this.output = "Hi";
                this.visitors.push(this.visitor);
                this.visitor = "";
            }
            else {
                alert("Enter a valid name.")
            }
        },
        now: function () {
            return Date();
        },
    },
    computed: {
        count: function () {
            return this.visitors.length;
        },
        btnClass: function () {
            return this.isSuccess? 'btn-success': 'btn-primary';
        },
    },
})

new Vue({
    el: '#demo',
    data: {
        show: true,
    }
})

new Vue({
    el: '#example-1',
    data: {
        show: true
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Cheese' },
            { id: 1, text: 'Vegetables' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // whenever question changes, this function will run
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
        console.log("Created")
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }
})