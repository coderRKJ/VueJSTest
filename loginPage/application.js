const a = new Vue({
    el: "#app",
    data: {
        pass: "",
    },
    computed: {
        uppercase: function () {
            return this.pass.match('[A-Z]') ? 'alert alert-success': 'alert alert-danger';
        },
        lowercase: function () {
            return this.pass.match('[a-z]') ? 'alert alert-success': 'alert alert-danger';
        },
        number: function () {
            return this.pass.match('[0-9]') ? 'alert alert-success': 'alert alert-danger';
        },
        special: function () {
            return this.pass.match(/[^\w\s]/) ? 'alert alert-success': 'alert alert-danger';
        },
        strength: function () {
            c = 0;
            c += Number(this.uppercase == 'alert alert-success');
            c += Number(this.lowercase == 'alert alert-success');
            c += Number(this.number == 'alert alert-success');
            c += Number(this.special == 'alert alert-success');
            c += Number(this.pass.length > 7);

            if (c == 5) {
                return `<span class="alert alert-success">Password strength is excellent</span>`;
            }
            if (c == 4 || c == 3) {
                return `<span class="alert alert-primary">Password strength is very good</span>`;
            }
            if (c == 2) {
                return `<span class="alert alert-info">Password strength is average</span>`;
            }
            if (c == 1) {
                return `<span class="alert alert-danger">Password strength is poor</span>`;
            }
            return `<span class="alert alert-warning">Please enter a valid passwordr</span>`;
        }
    },
})