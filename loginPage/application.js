const a = new Vue({
    el: "#app",
    data: {
        pass: "",
        track : {
            uppercase: 'rgba(255,0,0,0.4)',
            lowercase: 'rgba(255,0,0,0.4)',
            number: 'rgba(255,0,0,0.4)',
            special: 'rgba(255,0,0,0.4)',
        },
        strength: "Please enter a valid password"
    },
    methods: {
            meter: function() {
                let c = 0;
                // console.log("check");
                for (i in this.track) {
                    if (this.track[i] == 'rgba(0,255,0,0.4)') {
                        c++;
                    }
                }
                if (this.pass.length > 7) {
                    c++;
                }

                if (c == 5) {
                    this.strength = "Password strength is excellent";
                }
                else if (c == 4) {
                    this.strength = "Password strength is very good";
                }
                else if (c == 3) {
                    this.strength = "Password strength is good";
                }
                else if (c == 2) {
                    this.strength = "Password strength is average";
                }
                else if (c == 1) {
                    this.strength = "Password strength is poor";
                }
                else {
                    this.strength = "Please enter a valid password";
                }
            },

            // something: function() {
            //     console.log("You clicked outside of text input")
            // }

    },
    computed: {

    },
    watch: {
        pass(val) {

            this.track.uppercase = 'rgba(255,0,0,0.4)';
            this.track.lowercase = 'rgba(255,0,0,0.4)';
            this.track.number = 'rgba(255,0,0,0.4)';
            this.track.special = 'rgba(255,0,0,0.4)';

            for (let i = 0; i < val.length; i++) {
                let ch = val.charCodeAt(i);

                if (ch >= 65 && ch <= 90) {
                    this.track.uppercase = 'rgba(0,255,0,0.4)';
                }
                else if (ch >= 97 && ch <= 122) {
                    this.track.lowercase = 'rgba(0,255,0,0.4)';
                }
                else if (ch >= 48 && ch <= 57) {
                    this.track.number = 'rgba(0,255,0,0.4)';
                }
                else if ((ch >= 33 && ch <= 47) || (ch >= 58 && ch <= 64)) {
                    this.track.special = 'rgba(0,255,0,0.4)';
                }
            } 
            this.meter();
        }
    }
})